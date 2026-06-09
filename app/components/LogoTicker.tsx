import Image from "next/image";
import styles from "./LogoTicker.module.css";

const LOGOS = [
  { src: "/logo-integration/google-calendar.svg", alt: "Google Calendar Integration for Podcast Scheduling" },
  { src: "/logo-integration/outlook-calendar.svg", alt: "Outlook Calendar Integration for Podcast Booking" },
  { src: "/logo-integration/zoom.svg", alt: "Zoom Integration for Remote Podcast Recording" },
  { src: "/logo-integration/google-meet.svg", alt: "Google Meet Integration for Podcast Interviews" },
  { src: "/logo-integration/riverside.svg", alt: "Riverside.fm Integration for High Quality Podcast Recording" },
  { src: "/logo-integration/spotify.svg", alt: "Spotify Podcast Distribution Integration" },
  { src: "/logo-integration/Email-(SMTP).svg", alt: "SMTP Custom Email Integration for Automated Reminders" },
  { src: "/logo-integration/squadcast.svg", alt: "SquadCast Integration for Remote Podcasting" },
];

export default function LogoTicker() {
  // Duplicate logos so the marquee animation is seamless
  const tickerLogos = [...LOGOS, ...LOGOS];

  return (
    <section className={styles.section} id="integrations-ticker">
      <div className="container">
        <p className={styles.tagline}>Integrates with your favorite tools</p>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {tickerLogos.map((logo, i) => (
              <div key={i} className={styles.logoItem}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={60}
                  className={styles.img}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
