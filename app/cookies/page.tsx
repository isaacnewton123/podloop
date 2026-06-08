import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Cookie Policy — Podloop",
  description: "How Podloop uses cookies and similar technologies.",
};

function CookiesContent() {
  return (
    <div className={styles.prose}>
      <h2>1. What are Cookies?</h2>
      <p>
        Cookies are small text files stored on your computer or mobile device when you visit a website. They allow Podloop to recognize your device, remember your preferences, and provide a seamless scheduling experience.
      </p>

      <h2>2. Strictly Necessary Cookies</h2>
      <p>
        These cookies are essential for the Podloop platform to function correctly. They handle user authentication, maintain active sessions in the Podcaster Dashboard, and ensure security when guests submit their headshots and bios. These cannot be disabled.
      </p>

      <h2>3. Functional &amp; Preference Cookies</h2>
      <p>
        These cookies allow the Guest Portal&apos;s smart timepicker to automatically detect and remember your local timezone, eliminating scheduling confusion. They also remember your language preferences and UI theme choices across sessions.
      </p>

      <h2>4. Analytics Cookies</h2>
      <p>
        We use anonymous, aggregated analytics cookies to understand how Podcasters and Guests interact with our platform. This helps us identify usability issues, optimize page load speeds, and improve the overall guest onboarding flow.
      </p>

      <h2>5. Managing Your Cookies</h2>
      <p>
        You have the right to decide whether to accept or reject non-essential cookies. You can exercise your cookie preferences by adjusting your web browser controls. Please note that if you choose to reject strictly necessary cookies, you may not be able to log into the dashboard or complete the scheduling workflow.
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
