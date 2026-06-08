import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Podloop",
  description:
    "Get in touch with the Podloop team for support, " +
    "partnerships, or general inquiries.",
};

import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Contact us
          </h1>
          <p className={styles.pageHeroSub}>
            Have questions? We&apos;d love to hear from you.
            Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <div className={styles.formCard}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
