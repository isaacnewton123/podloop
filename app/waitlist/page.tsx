import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Join the Waitlist — Podloop",
  description:
    "Get early access to Podloop and automate " +
    "your podcast guest management.",
};

function WaitlistForm() {
  return (
    <form>
      <div className={styles.formGroup}>
        <label htmlFor="wl-name" className={styles.formLabel}>
          Your name
        </label>
        <input
          id="wl-name"
          type="text"
          className={styles.formInput}
          placeholder="Jane Smith"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="wl-email" className={styles.formLabel}>
          Email address
        </label>
        <input
          id="wl-email"
          type="email"
          className={styles.formInput}
          placeholder="jane@podcast.fm"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="wl-show" className={styles.formLabel}>
          Podcast name (optional)
        </label>
        <input
          id="wl-show"
          type="text"
          className={styles.formInput}
          placeholder="The Creator Lab"
        />
      </div>
      <button
        type="submit"
        className={`btn-primary ${styles.formSubmit}`}
      >
        Join the Waitlist
      </button>
    </form>
  );
}

export default function WaitlistPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Get early access
          </h1>
          <p className={styles.pageHeroSub}>
            Be the first to try Podloop. Drop your email
            and we&apos;ll let you know when we launch.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <div className={styles.formCard}>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
