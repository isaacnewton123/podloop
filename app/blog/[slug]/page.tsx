import { getPostBySlug, getPostSlugs, BlogPost } from "../../lib/mdx";
import { constructMetadata, SITE_URL } from "../../lib/seo";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/page-common.module.css";
import React from "react";
import BurnoutCalculator from "../components/BurnoutCalculator";

const components = {
  BurnoutCalculator,
  Image: ({
    src,
    alt,
    caption,
    ...props
  }: React.ComponentPropsWithoutRef<"img"> & { caption?: string }) => (
    <figure style={{ margin: "32px 0" }}>
      <img
        src={src}
        alt={alt || "Blog Image"}
        style={{
          maxWidth: "100%",
          height: "auto",
          borderRadius: "8px",
          display: "block",
        }}
        loading="lazy"
        decoding="async"
        {...props}
      />
      {caption && (
        <figcaption
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "14px",
            marginTop: "12px",
            fontStyle: "italic",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  ),
  img: (props: React.ComponentPropsWithoutRef<"img">) => (
    <img
      {...props}
      style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px",
        margin: "32px 0",
      }}
      loading="lazy"
      decoding="async"
      alt={props.alt || "Blog Post Image"}
    />
  ),
  a: ({ href, children, ...props }: React.ComponentPropsWithoutRef<"a">) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          {...props}
          style={{ color: "#3b82f6", textDecoration: "none" }}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#3b82f6", textDecoration: "none" }}
        {...props}
      >
        {children}
      </a>
    );
  },
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2 style={{ marginTop: "48px", marginBottom: "24px" }} {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 style={{ marginTop: "32px", marginBottom: "16px" }} {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p style={{ marginBottom: "24px", lineHeight: 1.7 }} {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      style={{
        borderLeft: "4px solid #3b82f6",
        paddingLeft: "16px",
        color: "#4b5563",
        fontStyle: "italic",
        margin: "32px 0",
      }}
      {...props}
    />
  ),
  VideoEmbed: ({ url, title }: { url: string; title?: string }) => {
    let embedUrl = url;
    if (url.includes("youtube.com/watch?v=")) {
      embedUrl = url.replace("watch?v=", "embed/");
    } else if (url.includes("youtu.be/")) {
      embedUrl = url.replace("youtu.be/", "youtube.com/embed/");
    }
    return (
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          maxWidth: "100%",
          margin: "32px 0",
          borderRadius: "12px",
          background: "#000",
        }}
      >
        <iframe
          src={embedUrl}
          title={title || "Video player"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  },
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return constructMetadata({
      title:
        post.frontmatter.seoTitle || `${post.frontmatter.title} — Podloop Blog`,
      description: post.frontmatter.seoDescription || post.frontmatter.excerpt,
      canonicalUrl: post.frontmatter.canonicalUrl || `${SITE_URL}/blog/${slug}`,
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
    author: {
      "@type": "Person",
      name: post.frontmatter.author || "Podloop Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Podloop",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-podloop-no-bg.avif`,
      },
    },
    url: post.frontmatter.canonicalUrl || `${SITE_URL}/blog/${slug}`,
    ...(post.frontmatter.tags && { keywords: post.frontmatter.tags }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function BlogHeroMeta({ category, dateStr }: { category: string; dateStr: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "24px",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          background: "#fb923c",
          color: "#111111",
          padding: "4px 12px",
          borderRadius: "9999px",
          fontSize: "13px",
          fontWeight: 500,
        }}
      >
        {category || "Blog"}
      </span>
      <span style={{ color: "#6b7280", fontSize: "14px" }}>{dateStr}</span>
    </div>
  );
}

function BlogHeroTitle({ title }: { title: string }) {
  return (
    <h1
      style={{
        fontSize: "48px",
        fontWeight: 600,
        letterSpacing: "-1.5px",
        lineHeight: 1.1,
        color: "#111111",
        fontFamily: '"Cal Sans", Inter, sans-serif',
      }}
    >
      {title}
    </h1>
  );
}

function BlogHero({ post }: { post: BlogPost }) {
  const dateStr = new Date(post.frontmatter.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section
      className={styles.pageHero}
      style={{ paddingBottom: "96px", paddingTop: "96px" }}
    >
      <div
        className="container"
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <BlogHeroMeta category={post.frontmatter.category} dateStr={dateStr} />
        <BlogHeroTitle title={post.frontmatter.title} />
      </div>
    </section>
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
        <div
          className="container"
          style={{ maxWidth: "768px", margin: "0 auto" }}
        >
          <div
            className={styles.prose}
            style={{ fontSize: "1.125rem", color: "#374151" }}
          >
            <MDXRemote source={post.content} components={components} />
          </div>
        </div>
      </section>
    </>
  );
}
