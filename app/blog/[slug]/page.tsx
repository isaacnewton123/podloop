import { getPostBySlug, getPostSlugs, BlogPost } from "../../lib/mdx";
import { constructMetadata, SITE_URL } from "../../lib/seo";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page-common.module.css";
import React from "react";

const components = {
  Image: (props: React.ComponentPropsWithoutRef<typeof Image>) => (
    <Image {...props} style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", margin: "32px 0" }} />
  ),
  img: (props: React.ComponentPropsWithoutRef<'img'>) => (
    <img {...props} style={{ maxWidth: "100%", height: "auto", borderRadius: "8px", margin: "32px 0" }} loading="lazy" decoding="async" alt={props.alt || "Blog Post Image"} />
  ),
  a: ({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    if (href?.startsWith("/")) {
      return <Link href={href} {...props} style={{ color: "#3b82f6", textDecoration: "none" }}>{children}</Link>;
    }
    return <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", textDecoration: "none" }} {...props}>{children}</a>;
  },
  h2: (props: React.ComponentPropsWithoutRef<'h2'>) => <h2 style={{ marginTop: "48px", marginBottom: "24px" }} {...props} />,
  h3: (props: React.ComponentPropsWithoutRef<'h3'>) => <h3 style={{ marginTop: "32px", marginBottom: "16px" }} {...props} />,
  p: (props: React.ComponentPropsWithoutRef<'p'>) => <p style={{ marginBottom: "24px", lineHeight: 1.7 }} {...props} />,
  blockquote: (props: React.ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote style={{ borderLeft: "4px solid #3b82f6", paddingLeft: "16px", color: "#4b5563", fontStyle: "italic", margin: "32px 0" }} {...props} />
  ),
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return constructMetadata({ 
      title: post.frontmatter.seoTitle || `${post.frontmatter.title} — Podloop Blog`, 
      description: post.frontmatter.seoDescription || post.frontmatter.excerpt,
      canonicalUrl: post.frontmatter.canonicalUrl || `${SITE_URL}/blog/${slug}`
    });
  } catch {
    return constructMetadata({ title: "Post Not Found" });
  }
}

function JsonLd({ post, slug }: { post: BlogPost; slug: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.seoTitle || post.frontmatter.title,
    description: post.frontmatter.seoDescription || post.frontmatter.excerpt,
    datePublished: new Date(post.frontmatter.date).toISOString(),
    author: { "@type": "Person", name: post.frontmatter.author || "Podloop Team" },
    publisher: { "@type": "Organization", name: "Podloop", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-podloop-no-bg.avif` } },
    url: post.frontmatter.canonicalUrl || `${SITE_URL}/blog/${slug}`,
    ...(post.frontmatter.tags && { keywords: post.frontmatter.tags }),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

function BlogHero({ post }: { post: BlogPost }) {
  const dateStr = new Date(post.frontmatter.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return (
    <section className={styles.pageHero} style={{ paddingBottom: "96px", paddingTop: "96px" }}>
      <div className="container" style={{ maxWidth: "768px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', justifyContent: 'center' }}>
          <span style={{
            background: '#fb923c',
            color: '#111111',
            padding: '4px 12px',
            borderRadius: '9999px',
            fontSize: '13px',
            fontWeight: 500
          }}>
            {post.frontmatter.category || 'Blog'}
          </span>
          <span style={{ color: '#6b7280', fontSize: '14px' }}>
            {dateStr}
          </span>
        </div>

        <h1 style={{ fontSize: "48px", fontWeight: 600, letterSpacing: "-1.5px", lineHeight: 1.1, color: '#111111', fontFamily: '"Cal Sans", Inter, sans-serif' }}>
          {post.frontmatter.title}
        </h1>
        
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post: BlogPost;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <JsonLd post={post} slug={slug} />
      <BlogHero post={post} />
      <section className={styles.pageBody} style={{ paddingTop: "0" }}>
        <div className="container" style={{ maxWidth: "768px", margin: "0 auto" }}>
          <div className={styles.prose} style={{ fontSize: "1.125rem", color: "#374151" }}>
            <MDXRemote source={post.content} components={components} />
          </div>
        </div>
      </section>
    </>
  );
}
