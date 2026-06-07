import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Podloop",
  description: "How Podloop collects, uses, and protects your data.",
};

function PrivacyContent() {
  return (
    <div className={styles.prose}>
      <h2>1. Information We Collect</h2>
      <p>
        We collect information you provide directly:
        name, email address, podcast name, and any
        data submitted through our guest portal
        (headshots, bios, scheduling preferences).
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your information to provide the Podloop
        service, send booking confirmations, reminders,
        and post-release notifications. We do not sell
        your data to third parties.
      </p>

      <h2>3. Data Storage &amp; Security</h2>
      <p>
        Your data is stored on secure, encrypted servers.
        We implement industry-standard security measures
        including TLS encryption, access controls, and
        regular audits.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Podloop integrates with Google Calendar, Zoom,
        and other services at your direction. These
        services have their own privacy policies.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You may request access to, correction of, or
        deletion of your personal data at any time by
        contacting us at privacy@podloop.xyz.
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
