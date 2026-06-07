import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Terms of Service — Podloop",
  description: "Terms and conditions for using the Podloop platform.",
};

function TermsContent() {
  return (
    <div className={styles.prose}>
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Podloop
        (&quot;podloop.xyz&quot;), you agree to be bound
        by these Terms. If you do not agree, do not use
        the service.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Podloop provides podcast guest management tools
        including scheduling, asset collection, automated
        reminders, and post-release distribution features.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        You are responsible for maintaining the
        confidentiality of your account credentials. You
        agree to notify us immediately of any unauthorized
        access.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>
        You may not use Podloop for unlawful purposes, to
        harass others, or to distribute spam. We reserve
        the right to suspend accounts that violate these
        terms.
      </p>

      <h2>5. Limitation of Liability</h2>
      <p>
        Podloop is provided &quot;as is&quot;. We are not
        liable for any indirect, incidental, or
        consequential damages arising from your use.
      </p>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Terms of Service
          </h1>
          <p className={styles.pageHeroSub}>
            Last updated: June 1, 2026
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <TermsContent />
        </div>
      </section>
    </>
  );
}
