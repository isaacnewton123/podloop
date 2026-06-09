import styles from "../styles/page-common.module.css";
import cls from "./changelog.module.css";
import { constructMetadata } from "../lib/seo";

export const metadata = constructMetadata({
  title: "Changelog — Podloop",
  description:
    "See what's new in Podloop. Latest features, " +
    "improvements, and bug fixes.",
});

const ENTRIES = [
  {
    version: "v0.3.0",
    date: "Jun 1, 2026",
    title: "Post-release guest notifications",
    items: [
      "Paste your episode link and auto-notify guests",
      "Optional promotional asset attachments",
      "Guest share tracking dashboard",
    ],
  },
  {
    version: "v0.2.0",
    date: "May 15, 2026",
    title: "Automated reminder sequences",
    items: [
      "H-24 reminder emails with tech-check tips",
      "Reschedule flow without re-filling forms",
      "Mini CRM with Upcoming/Recorded/Canceled",
    ],
  },
  {
    version: "v0.1.0",
    date: "May 1, 2026",
    title: "Initial launch — Guest Portal",
    items: [
      "One-link guest booking with timezone detection",
      "Headshot and bio self-service upload",
      "Google Calendar two-way sync",
      "Custom onboarding form fields",
    ],
  },
];

function Entry({
  entry,
}: {
  entry: (typeof ENTRIES)[number];
}) {
  return (
    <div className={cls.entry}>
      <div className={cls.dot} />
      <div className={cls.content}>
        <div className={cls.meta}>
          <span className={cls.version}>
            {entry.version}
          </span>
          <span className={cls.date}>{entry.date}</span>
        </div>
        <h3 className={cls.title}>{entry.title}</h3>
        <ul className={cls.list}>
          {entry.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Changelog
          </h1>
          <p className={styles.pageHeroSub}>
            Track every improvement we ship to Podloop.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <div className={cls.timeline}>
            {ENTRIES.map((e) => (
              <Entry key={e.version} entry={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
