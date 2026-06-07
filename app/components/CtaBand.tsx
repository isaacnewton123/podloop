"use client";

import { useReveal } from "../hooks/useReveal";
import styles from "./CtaBand.module.css";

export default function CtaBand() {
  const ref = useReveal();

  return (
    <section className={styles.band} id="cta-band">
      <div className="container">
        <div ref={ref} className={`reveal ${styles.card}`}>
          <h2 className="display-sm">
            Ready to automate your guest workflow?
          </h2>
          <p className={styles.subtitle}>
            Join hundreds of podcasters who save hours
            every week with PodGuest Flow.
          </p>
          <a href="/waitlist" className="btn-primary">
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}
