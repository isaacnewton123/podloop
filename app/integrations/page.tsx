import type { Metadata } from "next";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar01Icon,
  Video01Icon,
  Mic01Icon,
  Mail01Icon,
  MusicNote01Icon,
  Globe02Icon,
} from "@hugeicons/core-free-icons";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "Integrations — Podloop",
  description:
    "Connect Podloop to Google Calendar, Zoom, " +
    "Meet, Riverside, and more.",
};

const INTEGRATIONS = [
  {
    icon: Calendar01Icon,
    bg: "#ede9fe",
    color: "#7c3aed",
    name: "Google Calendar",
    desc: "Two-way sync to prevent double-booking.",
  },
  {
    icon: Calendar01Icon,
    bg: "#dbeafe",
    color: "#2563eb",
    name: "Outlook Calendar",
    desc: "Full read/write calendar integration.",
  },
  {
    icon: Video01Icon,
    bg: "#fce7f3",
    color: "#db2777",
    name: "Zoom",
    desc:
      "Auto-embed meeting links in guest invites.",
  },
  {
    icon: Globe02Icon,
    bg: "#fef3c7",
    color: "#d97706",
    name: "Google Meet",
    desc: "Generate and attach Meet links instantly.",
  },
  {
    icon: Mic01Icon,
    bg: "#d1fae5",
    color: "#059669",
    name: "Riverside",
    desc: "Direct studio links for remote recording.",
  },
  {
    icon: MusicNote01Icon,
    bg: "#fce4ec",
    color: "#e91e63",
    name: "Spotify for Podcasters",
    desc: "Share published episodes back to guests.",
  },
  {
    icon: Mail01Icon,
    bg: "#e0f2fe",
    color: "#0284c7",
    name: "Email (SMTP)",
    desc:
      "Send branded confirmation and reminder emails.",
  },
  {
    icon: Video01Icon,
    bg: "#f3e8ff",
    color: "#9333ea",
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
        style={{ background: item.bg, color: item.color }}
      >
        <HugeiconsIcon icon={item.icon} size={24} />
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
