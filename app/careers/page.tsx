import styles from "../styles/page-common.module.css";
import { constructMetadata } from "../lib/seo";

export const metadata = constructMetadata({
  title: "Careers — Podloop",
  description:
    "Join the Podloop team and help us build the " +
    "future of podcast guest management.",
});

const ROLES = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time · Remote",
    desc: "Build and scale the Podloop platform with Next.js, Node, and PostgreSQL.",
  },
  {
    title: "Product Designer",
    type: "Full-time · Remote",
    desc: "Shape the user experience from guest portal to podcaster dashboard.",
  },
  {
    title: "Developer Advocate",
    type: "Full-time · Remote",
    desc: "Create content, demos, and docs that help podcasters succeed with Podloop.",
  },
];

function RoleCard({ role }: { role: (typeof ROLES)[number] }) {
  return (
    <div className={styles.infoCard}>
      <h3 className="title-md" style={{ marginBottom: 12 }}>{role.title}</h3>
      <div style={{ marginBottom: 16 }}>
        <span className={styles.badgePill} style={{ backgroundColor: "var(--color-badge-emerald)", color: "var(--color-ink)" }}>
          {role.type}
        </span>
      </div>
      <p className="body-md" style={{ color: "var(--color-muted)", marginBottom: 24 }}>{role.desc}</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScOcgyYQwkNeE4MOHaHqpQL2aaC9GEXTQ9RU8ZG07LbFWx8qA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ width: "100%" }}>
        Apply Now
      </a>
    </div>
  );
}

function CareersHero() {
  return (
    <section className={styles.pageHero}>
      <div className="container">
        <h1 className={`display-lg ${styles.pageHeroTitle}`}>Careers</h1>
        <p className={styles.pageHeroSub}>
          Help us automate podcast production for creators worldwide.
        </p>
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <section className={styles.pageBody}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Open positions</h2>
            <p>
              We&apos;re a small, remote-first team that moves fast and ships often. If you&apos;re
              passionate about creator tools, we&apos;d love to hear from you.
            </p>
          </div>
          
          <div className={styles.cardGrid} style={{ marginTop: 48 }}>
            {ROLES.map((r) => (
              <RoleCard key={r.title} role={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
