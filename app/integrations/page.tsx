import type { Metadata } from "next";
import Image from "next/image";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Integrations — Podloop",
  description:
    "Connect Podloop to Google Calendar, Zoom, " +
    "Meet, Riverside, and more.",
};

const INTEGRATIONS = [
  {
    logo: "/logo-integration/google-calendar.svg",
    bg: "#ede9fe",
    name: "Google Calendar",
    desc: "Two-way sync to prevent double-booking.",
  },
  {
    logo: "/logo-integration/outlook-calendar.svg",
    bg: "#dbeafe",
    name: "Outlook Calendar",
    desc: "Full read/write calendar integration.",
  },
  {
    logo: "/logo-integration/zoom.svg",
    bg: "#fce7f3",
    name: "Zoom",
    desc: "Auto-embed meeting links in guest invites.",
  },
  {
    logo: "/logo-integration/google-meet.svg",
    bg: "#fef3c7",
    name: "Google Meet",
    desc: "Generate and attach Meet links instantly.",
  },
  {
    logo: "/logo-integration/riverside.svg",
    bg: "#d1fae5",
    name: "Riverside",
    desc: "Direct studio links for remote recording.",
  },
  {
    logo: "/logo-integration/spotify.svg",
    bg: "#fce4ec",
    name: "Spotify for Podcasters",
    desc: "Share published episodes back to guests.",
  },
  {
    logo: "/logo-integration/Email-(SMTP).svg",
    bg: "#e0f2fe",
    name: "Email (SMTP)",
    desc: "Send branded confirmation and reminder emails.",
  },
  {
    logo: "/logo-integration/squadcast.svg",
    bg: "#f3e8ff",
    name: "SquadCast",
    desc: "Embed SquadCast session links in invites.",
  },
];

function IntCard({
  item,
}: {
  item: (typeof INTEGRATIONS)[number];
}) {
  return (
    <div className={styles.infoCard}>
      <div
        className={styles.infoCardIcon}
        style={{ background: item.bg }}
      >
        <Image src={item.logo} alt={item.name} width={28} height={28} />
      </div>
      <h3 className={styles.infoCardTitle}>{item.name}</h3>
      <p className={styles.infoCardDesc}>{item.desc}</p>
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <h1 className={`display-lg ${styles.pageHeroTitle}`}>
            Integrations
          </h1>
          <p className={styles.pageHeroSub}>
            Connect the tools you already use. Podloop
            plugs into your existing workflow.
          </p>
        </div>
      </section>
      <section className={styles.pageBody}>
        <div className="container">
          <div className={styles.cardGrid}>
            {INTEGRATIONS.map((item) => (
              <IntCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
