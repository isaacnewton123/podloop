import type { Metadata } from "next";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "About — Podloop",
  description:
    "The story behind Podloop and why we're building " +
    "the future of podcast guest management.",
};

const TEAM = [
  { initials: "AK", color: "#8b5cf6", name: "Alex Kim", role: "Founder & CEO" },
  { initials: "SR", color: "#ec4899", name: "Sam Reyes", role: "Head of Product" },
  { initials: "JT", color: "#3b82f6", name: "Jordan Tan", role: "Lead Engineer" },
  { initials: "NP", color: "#10b981", name: "Nisha Patel", role: "Design Lead" },
];

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div className={styles.infoCard} style={{ textAlign: "center" }}>
      <div
        style={{
          width: 56, height: 56, borderRadius: "50%",
          background: member.color, display: "flex",
          alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 600, fontSize: 18,
          margin: "0 auto 12px",
        }}
      >
        {member.initials}
      </div>
      <p className={styles.infoCardTitle}>{member.name}</p>
      <p className={styles.infoCardDesc}>{member.role}</p>
    </div>
  );
}

function MissionSection() {
  return (
    <div className={styles.prose}>
      <h2>Why we built this</h2>
      <p>
        Podcasters spend 2–4 hours per episode on
        scheduling, chasing guest headshots, and sending
        reminder emails. We built Podloop to eliminate
        that friction entirely.
      </p>
      <p>
        One link replaces the entire back-and-forth.
        Guests self-book in their timezone, submit their
        bio and headshot, and get automated reminders —
        while you focus on making a great show.
      </p>
      <h2>Our mission</h2>
      <p>
        To automate 100% of podcast guest admin so
        creators can spend their time on what matters:
        conversations that move audiences.
      </p>
    </div>
  );
}

function TeamSection() {
  return (
    <div style={{ marginTop: 64 }}>
      <h2
        className="display-sm"
        style={{ textAlign: "center", marginBottom: 32 }}
      >
        Meet the team
      </h2>
      <div className={styles.cardGrid}>
        {TEAM.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            About Podloop
          </h1>
          <p className={styles.pageHeroSub}>
            We believe podcast production should be
            creative, not administrative.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <MissionSection />
          <TeamSection />
        </div>
      </section>
    </>
  );
}
