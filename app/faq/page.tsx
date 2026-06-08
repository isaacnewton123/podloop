import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Podloop",
  description: "Get answers to common questions about Podloop's podcast guest management workflow.",
};

const FAQS = [
  {
    category: "For Podcasters",
    questions: [
      {
        q: "How does the calendar sync work?",
        a: "Podloop integrates directly with your Google Calendar or Outlook. We read your Busy/Free status to prevent double-booking and automatically insert guest sessions into your available slots. We never read the details of your private events.",
      },
      {
        q: "How do I collect guest headshots and bios?",
        a: "When a guest selects a time slot, they are prompted to fill out a customizable onboarding form. You can require them to upload a headshot and provide their bio before the booking is confirmed.",
      },
      {
        q: "When are automated reminders sent?",
        a: "By default, Podloop's automation engine sends a reminder email to both you and your guest exactly 24 hours before the recording starts. The email includes testing instructions for microphones and cameras.",
      },
    ],
  },
  {
    category: "For Guests",
    questions: [
      {
        q: "Do my guests need to create a Podloop account?",
        a: "Absolutely not. The guest experience is designed to be completely frictionless. Guests simply click your unique invitation link, pick a time, fill out their details, and they are done. No passwords, no logins.",
      },
      {
        q: "How are timezones handled?",
        a: "The smart timepicker automatically detects the guest's local timezone based on their browser settings. Your available slots are instantly converted to their local time, eliminating timezone math and confusion.",
      },
    ],
  },
];

function FaqList() {
  return (
    <div className={styles.prose}>
      {FAQS.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          {category.questions.map((faq) => (
            <div key={faq.q} style={{ marginBottom: "24px" }}>
              <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{faq.q}</h3>
              <p style={{ marginTop: "0" }}>{faq.a}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Frequently Asked Questions
          </h1>
          <p className={styles.pageHeroSub}>
            Everything you need to know about the Podloop platform and workflow.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <FaqList />
        </div>
      </section>
    </>
  );
}
