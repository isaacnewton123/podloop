import styles from "../styles/page-common.module.css";
import { constructMetadata } from "../lib/seo";

export const metadata = constructMetadata({
  title: "Refund Policy — Podloop",
  description: "Podloop's cancellation and refund policy.",
});

function RefundContent() {
  return (
    <div className={styles.prose}>
      <h2>1. General Subscription Terms</h2>
      <p>
        Podloop offers subscription-based access to our podcast guest management platform. Subscriptions are billed on a recurring basis (monthly or annually). You can cancel your subscription at any time through your dashboard settings.
      </p>

      <h2>2. 14-Day Money-Back Guarantee</h2>
      <p>
        We stand behind our product. If you are not completely satisfied with Podloop within the first 14 days of your initial purchase, you are eligible for a full refund. Simply contact our support team to request a cancellation and refund.
      </p>

      <h2>3. Cancellations After 14 Days</h2>
      <p>
        After the initial 14-day period, all sales are final and non-refundable. If you cancel your subscription, you will retain access to your Podloop dashboard and automated features until the end of your current billing cycle.
      </p>

      <h2>4. Exceptions and Abuse</h2>
      <p>
        Refunds are not granted for failure to use the platform, lack of guest bookings, or failure to properly configure your calendar integration. We reserve the right to refuse refunds to users who abuse our policies or violate our Terms of Service.
      </p>

      <h2>5. How to Request a Refund</h2>
      <p>
        To request a refund within the eligible 14-day window, please email us at support@podloop.xyz with your account email address and a brief explanation of why the platform did not meet your needs. We typically process requests within 3-5 business days.
      </p>
    </div>
  );
}

export default function RefundPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Refund Policy
          </h1>
          <p className={styles.pageHeroSub}>
            Last updated: June 1, 2026
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <RefundContent />
        </div>
      </section>
    </>
  );
}
