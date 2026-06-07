import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy — Podloop",
  description: "How Podloop uses cookies and similar technologies.",
};

function CookiesContent() {
  return (
    <div className={styles.prose}>
      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files stored on your
        device when you visit a website. They help us
        remember your preferences and improve your
        experience.
      </p>

      <h2>Essential cookies</h2>
      <p>
        Required for the service to function. These
        cannot be disabled. They handle authentication
        and session management.
      </p>

      <h2>Analytics cookies</h2>
      <p>
        Help us understand how visitors interact with
        Podloop so we can improve the product. These
        are anonymous and aggregated.
      </p>

      <h2>Preference cookies</h2>
      <p>
        Remember your settings such as timezone and
        language preferences across sessions.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can control cookies through your browser
        settings. Disabling essential cookies may affect
        site functionality.
      </p>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Cookie Policy
          </h1>
          <p className={styles.pageHeroSub}>
            Last updated: June 1, 2026
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <CookiesContent />
        </div>
      </section>
    </>
  );
}
