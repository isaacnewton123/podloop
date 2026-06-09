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
      <h3 className={styles.infoCardTitle}>{role.title}</h3>
      <p
        className={styles.infoCardDesc}
        style={{ fontSize: 13, marginBottom: 8 }}
      >
        {role.type}
      </p>
      <p className={styles.infoCardDesc}>{role.desc}</p>
    </div>
  );
}

export default function CareersPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Careers
          </h1>
          <p className={styles.pageHeroSub}>
            Help us automate podcast production for
            creators worldwide.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <div className={styles.prose}>
            <h2>Open positions</h2>
            <p>
              We&apos;re a small, remote-first team that
              moves fast and ships often. If you&apos;re
              passionate about creator tools, we&apos;d
              love to hear from you.
            </p>
          </div>
          <div
            className={styles.cardGrid}
            style={{ marginTop: 32, maxWidth: 720, marginInline: "auto" }}
          >
            {ROLES.map((r) => (
              <RoleCard key={r.title} role={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
