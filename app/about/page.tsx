import type { Metadata } from "next";
import Image from "next/image";
import styles from "../styles/page-common.module.css";

export const metadata: Metadata = {
  title: "About — Podloop",
  description:
    "The story behind Podloop and why we're building " +
    "the future of podcast guest management.",
};

const FOUNDER_SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/isaacnewton123', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
  { label: 'Facebook', href: 'https://www.facebook.com/hanif.maulana.108/', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
  { label: 'Instagram', href: 'https://www.instagram.com/hanifmaulana2/', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { label: 'X (Twitter)', href: 'https://x.com/isaac_newton252', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanif-maulana-210b4721b/', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg> },
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
              {social.icon}
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
