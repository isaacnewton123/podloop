import Link from "next/link";
import styles from "./styles/page-common.module.css";

export default function NotFound() {
  return (
    <section className={styles.pageHero} style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="display-lg" style={{ fontFamily: '"Cal Sans", Inter, sans-serif', fontSize: "64px", marginBottom: "16px", color: "#111111" }}>
          404
        </h1>
        <h2 className="title-lg" style={{ marginBottom: "24px", color: "#374151" }}>
          Page not found
        </h2>
        <p className={styles.pageHeroSub} style={{ marginBottom: "32px", maxWidth: "400px", margin: "0 auto 32px" }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
        </p>
        <Link href="/" style={{ backgroundColor: "#111111", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, textDecoration: "none" }}>
          Return Home
        </Link>
      </div>
    </section>
  );
}
