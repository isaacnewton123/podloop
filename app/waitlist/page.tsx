import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";
import WaitlistForm from "./WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist — Podloop",
  description:
    "Get early access to Podloop and automate " +
    "your podcast guest management.",
};

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
