import styles from "../styles/page-common.module.css";
import { constructMetadata } from "../lib/seo";

export const metadata = constructMetadata({
  title: "Documentation — Podloop",
  description: "Learn how to set up and use the Podloop guest management platform.",
});

function DocsContent() {
  return (
    <div className={styles.prose}>
      <h2>1. System Setup (One-Time)</h2>
      <p>
        Getting started with Podloop is simple. First, create your Show Profile by uploading your podcast logo and description. Then, authorize your Google or Outlook calendar for two-way syncing. Finally, set your availability slots, session duration, and virtual studio link (Zoom, Riverside, etc.).
      </p>

      <h2>2. Guest Portal Experience</h2>
      <p>
        Send your unique <code>/invite/podcast-name</code> link to prospective guests. They will see a mobile-friendly, elegantly designed portal. The smart timepicker automatically detects their timezone, preventing scheduling conflicts. Guests can then upload their headshots and provide bios directly through the portal.
      </p>

      <h2>3. Automation Engine</h2>
      <p>
        Once a guest confirms their schedule, Podloop automatically blocks the time on your calendar, sends an ICS invite to the guest, and triggers a confirmation email. A cron job ensures that a 24-hour reminder is dispatched automatically before the recording starts.
      </p>

      <h2>4. Production Management Dashboard</h2>
      <p>
        Manage all your bookings from the Mini CRM view. Access a centralized hub to download guest headshots in one click and copy-paste their bios for YouTube or social media descriptions. If you need to reschedule, a single click will notify the guest and let them pick a new time.
      </p>

      <h2>5. Post-Release Distribution</h2>
      <p>
        When your episode is live, paste the YouTube or Spotify link into the guest's profile. Podloop will automatically draft and send a professional promotional email to the guest, complete with links to promotional assets, encouraging them to share the episode with their network.
      </p>
    </div>
  );
}

export default function DocsPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Documentation
          </h1>
          <p className={styles.pageHeroSub}>
            Complete guides and workflow explanations for Podloop.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <DocsContent />
        </div>
      </section>
    </>
  );
}
