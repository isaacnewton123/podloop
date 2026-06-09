import Image from "next/image";
import styles from "../styles/page-common.module.css";
import { constructMetadata } from "../lib/seo";

export const metadata = constructMetadata({
  title: "About — Podloop",
  description:
    "The story behind Podloop and why we're building " +
    "the future of podcast guest management.",
});

import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
  NewTwitterIcon,
  LinkedinIcon,
} from "@hugeicons/core-free-icons";

const FOUNDER_SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/isaacnewton123', icon: GithubIcon },
  { label: 'Facebook', href: 'https://www.facebook.com/hanif.maulana.108/', icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/hanifmaulana2/', icon: InstagramIcon },
  { label: 'X (Twitter)', href: 'https://x.com/isaac_newton252', icon: NewTwitterIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanif-maulana-210b4721b/', icon: LinkedinIcon },
];

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

function FounderSection() {
  return (
    <div style={{ marginTop: 64, maxWidth: 520, marginInline: "auto" }}>
      <h2
        className="display-sm"
        style={{ textAlign: "center", marginBottom: 32 }}
      >
        Meet the founder
      </h2>
      <div className={styles.infoCard} style={{ textAlign: "center" }}>
        <Image
          src="/hanifmaulana.avif"
          alt="Hanif Maulana"
          width={80}
          height={80}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            margin: "0 auto 16px",
          }}
        />
        <p className={styles.infoCardTitle}>Hanif Maulana</p>
        <p className={styles.infoCardDesc}>Founder</p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 24 }}>
          {FOUNDER_SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoCardIcon}
              style={{ width: 40, height: 40, marginBottom: 0, borderRadius: "50%" }}
              aria-label={social.label}
            >
              <HugeiconsIcon icon={social.icon} size={20} />
            </a>
          ))}
        </div>
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
          <FounderSection />
        </div>
      </section>
    </>
  );
}
