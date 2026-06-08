import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Podloop",
  description: "How Podloop collects, uses, and protects your data.",
};

function PrivacyContent() {
  return (
    <div className={styles.prose}>
      <h2>1. Introduction &amp; Data Controller</h2>
      <p>
        This Privacy Policy explains how Podloop collects and processes your personal data. When a Podcaster uses Podloop to manage their guests, the Podcaster acts as the Data Controller, and Podloop acts as the Data Processor.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        <strong>From Podcasters:</strong> We collect your name, email, podcast name, show descriptions, and calendar availability metadata (via Google/Outlook integration). We <em>never</em> read the contents of your private calendar events.<br /><br />
        <strong>From Guests:</strong> We collect information submitted through the Guest Portal, including names, verified emails, headshot images (up to 5MB), short biographies, and social media links.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use this data exclusively to:
      </p>
      <ul>
        <li>Facilitate the scheduling of podcast recording sessions.</li>
        <li>Send automated ICS calendar invitations and H-1 reminder emails.</li>
        <li>Populate the Podcaster&apos;s Mini CRM dashboard with guest assets.</li>
        <li>Send post-release promotional emails to guests.</li>
      </ul>
      <p>
        We <strong>never</strong> sell your data or your guests&apos; data to third-party data brokers.
      </p>

      <h2>4. Third-Party Integrations</h2>
      <p>
        Podloop integrates with Google Calendar, Microsoft Outlook, and various virtual studio platforms (Zoom, Riverside, Google Meet) to enable core workflow automation. Data shared with these platforms is governed by their respective privacy policies.
      </p>

      <h2>5. Data Retention &amp; Your Rights</h2>
      <p>
        We retain guest data for as long as the Podcaster maintains an active account, or until the Podcaster deletes the specific guest record. Under GDPR and CCPA, you have the right to request access to, correction of, or deletion of your personal data by contacting us at privacy@podloop.xyz.
      </p>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Privacy Policy
          </h1>
          <p className={styles.pageHeroSub}>
            Last updated: June 1, 2026
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <PrivacyContent />
        </div>
      </section>
    </>
  );
}
