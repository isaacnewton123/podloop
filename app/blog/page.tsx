import styles from "../styles/page-common.module.css";
import { constructMetadata } from "../lib/seo";
import { getAllPosts, BlogPost } from "../lib/mdx";
import Link from "next/link";
import Image from "next/image";

export const metadata = constructMetadata({
  title: "Blog — Podloop",
  description:
    "Tips, tutorials, and insights for podcast " +
    "creators who want to grow their shows.",
});

function PostCardImage({ src, title }: { src: string; title: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
      <Image 
        src={src} 
        alt={title} 
        fill 
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

function PostCardContent({ post }: { post: BlogPost }) {
  const dateStr = new Date(post.frontmatter.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return (
    <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          background: '#fb923c', color: '#111111', padding: '4px 12px',
          borderRadius: '9999px', fontSize: '13px', fontWeight: 500
        }}>
          {post.frontmatter.category || 'Blog'}
        </span>
      </div>
      <h3 style={{ marginBottom: '12px', fontSize: '22px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.3px', color: '#111111' }}>
        {post.frontmatter.title}
      </h3>
      <p style={{ flexGrow: 1, marginBottom: '24px', fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: '#374151' }}>
        {post.frontmatter.excerpt}
      </p>
      <div style={{ height: '1px', background: '#e5e7eb', width: '100%', marginBottom: '16px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#6b7280' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500, fontSize: '13px', color: '#111111' }}>
            {post.frontmatter.author ? post.frontmatter.author.charAt(0) : 'P'}
          </div>
          <span style={{ fontWeight: 500, color: '#111111' }}>{post.frontmatter.author || 'Podloop Team'}</span>
        </div>
        <span>{dateStr}</span>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div 
        style={{ 
          cursor: 'pointer', transition: 'all 0.3s ease', height: '100%', display: 'flex',
          flexDirection: 'column', padding: 0, overflow: 'hidden', 
          background: '#f5f5f5', borderRadius: '12px'
        }}
      >
        <PostCardImage src={post.frontmatter.image || '/og-image.webp'} title={post.frontmatter.title} />
        <PostCardContent post={post} />
      </div>
    </Link>
  );
}

import BlogSort from "./BlogSort";

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ sort?: string }> }) {
  const { sort = "newest" } = await searchParams;
  let posts = getAllPosts(); // Default is newest first

  if (sort === "oldest") {
    posts = posts.reverse();
  } else if (sort === "a-z") {
    posts.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
  } else if (sort === "z-a") {
    posts.sort((a, b) => b.frontmatter.title.localeCompare(a.frontmatter.title));
  }

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>Blog</h1>
          <p className={styles.pageHeroSub}>
            Insights and tips for modern podcast creators.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <BlogSort />
          <div className={styles.cardGrid}>
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
