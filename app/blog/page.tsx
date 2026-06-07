import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Blog — Podloop",
  description:
    "Tips, tutorials, and insights for podcast " +
    "creators who want to grow their shows.",
};

const POSTS = [
  {
    title: "5 Ways to Onboard Podcast Guests Faster",
    date: "Jun 2, 2026",
    excerpt:
      "Manual emails, timezone confusion, and missing " +
      "headshots slow you down. Here's how to fix it.",
    color: "#8b5cf6",
  },
  {
    title: "Why Your Guests Never Share the Episode",
    date: "May 28, 2026",
    excerpt:
      "Post-release follow-ups are the key to free " +
      "promotion. Most podcasters skip them.",
    color: "#3b82f6",
  },
  {
    title: "The True Cost of Podcast Admin Work",
    date: "May 20, 2026",
    excerpt:
      "We calculated how many hours per month the " +
      "average weekly podcaster loses to admin.",
    color: "#ec4899",
  },
  {
    title: "Building a Guest Portal That Impresses",
    date: "May 12, 2026",
    excerpt:
      "First impressions matter. A branded booking " +
      "page sets the tone for a great recording.",
    color: "#10b981",
  },
];

function PostCard({
  post,
}: {
  post: (typeof POSTS)[number];
}) {
  return (
    <div className={styles.infoCard}>
      <div
        style={{
          width: "100%",
          height: 8,
          borderRadius: 4,
          background: post.color,
          marginBottom: 16,
        }}
      />
      <p className={styles.infoCardDesc}>{post.date}</p>
      <h3 className={styles.infoCardTitle}>{post.title}</h3>
      <p className={styles.infoCardDesc}>{post.excerpt}</p>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Blog
          </h1>
          <p className={styles.pageHeroSub}>
            Insights and tips for modern podcast creators.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <div className={styles.cardGrid}>
            {POSTS.map((p) => (
              <PostCard key={p.title} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
