"use client";

import { useEffect } from "react";
import styles from "./styles/page-common.module.css";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.pageHero} style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h1 className="display-lg" style={{ fontFamily: '"Cal Sans", Inter, sans-serif', fontSize: "64px", marginBottom: "16px", color: "#111111" }}>
          500
        </h1>
        <h2 className="title-lg" style={{ marginBottom: "24px", color: "#374151" }}>
          Something went wrong
        </h2>
        <p className={styles.pageHeroSub} style={{ marginBottom: "32px", maxWidth: "400px", margin: "0 auto 32px" }}>
          An unexpected error occurred on our end. We&apos;ve been notified and are looking into it.
        </p>
        <button 
          onClick={() => reset()}
          style={{ backgroundColor: "#111111", color: "#ffffff", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, border: "none", cursor: "pointer" }}
        >
          Try again
        </button>
      </div>
    </section>
  );
}
