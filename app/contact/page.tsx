import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Contact Us — Podloop",
  description:
    "Get in touch with the Podloop team for support, " +
    "partnerships, or general inquiries.",
};

function TextField({
  id, label, type = "text", placeholder, required = false,
}: {
  id: string; label: string; type?: string;
  placeholder: string; required?: boolean;
}) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.formLabel}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.formInput}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

function ContactForm() {
  return (
    <form>
      <TextField id="ct-name" label="Name" placeholder="Your full name" required />
      <TextField id="ct-email" label="Email" type="email" placeholder="you@example.com" required />
      <TextField id="ct-subject" label="Subject" placeholder="How can we help?" />
      <div className={styles.formGroup}>
        <label htmlFor="ct-message" className={styles.formLabel}>
          Message
        </label>
        <textarea
          id="ct-message"
          className={styles.formTextarea}
          placeholder="Tell us more..."
          required
        />
      </div>
      <button
        type="submit"
        className={`btn-primary ${styles.formSubmit}`}
      >
        Send Message
      </button>
    </form>
  );
}

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
