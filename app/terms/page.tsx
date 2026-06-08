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
        By accessing or using Podloop (&quot;podloop.xyz&quot;), you agree to be bound by these Terms of Service. Podloop is a B2B SaaS platform designed to facilitate podcast guest management, scheduling, and asset collection.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Podloop provides tools to automate administrative podcasting tasks. This includes, but is not limited to: generating Guest Portal links, reading Google/Outlook calendar availability to prevent double-booking, collecting guest headshots and bios, scheduling automated email reminders, and facilitating post-release episode distribution.
      </p>

      <h2>3. User Obligations &amp; Account Security</h2>
      <p>
        You must provide accurate information when registering your podcast show profile. You are responsible for maintaining the confidentiality of your account credentials. You agree not to use Podloop to send unsolicited promotional spam, distribute malware, or harass guests.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        <strong>Your Content:</strong> Podloop claims no ownership rights over your podcast content, audio files, or the intellectual property of your guests. All data (including guest headshots and bios) collected via your Guest Portal remains under your controllership.<br /><br />
        <strong>Our Platform:</strong> The Podloop software, UI/UX, and underlying code are the exclusive property of Podloop and are protected by copyright laws.
      </p>

      <h2>5. Subscription, Billing, and Cancellation</h2>
      <p>
        Podloop is a paid subscription service. By subscribing, you authorize us to charge your selected payment method on a recurring basis. You may cancel at any time. For detailed information on refunds, please review our <a href="/refund">Refund Policy</a>.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Podloop is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We do not guarantee that the service will be entirely free from disruptions. To the maximum extent permitted by law, Podloop shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or podcast recording opportunities due to technical errors or calendar sync failures.
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
