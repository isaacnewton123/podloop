"use client";

import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    initials: "SJ",
    color: "#ec4899",
    name: "Sarah Johnson",
    role: "Host, The Marketing Hour",
    quote:
      "PodGuest Flow cut my pre-production admin " +
      "from 3 hours to 10 minutes.",
  },
  {
    initials: "MR",
    color: "#8b5cf6",
    name: "Marco Rivera",
    role: "Host, Dev Unfiltered",
    quote:
      "No more chasing guests for headshots or " +
      "timezone math. Everything arrives ready.",
  },
  {
    initials: "AL",
    color: "#34d399",
    name: "Aisha Lee",
    role: "Producer, StartupFM",
    quote:
      "Post-release notifications doubled our " +
      "episode shares overnight.",
  },
  {
    initials: "JC",
    color: "#f59e0b",
    name: "Jake Chen",
    role: "Host, Build in Public",
    quote:
      "Guests actually compliment the booking " +
      "experience. That never happened before.",
  },
  {
    initials: "TP",
    color: "#3b82f6",
    name: "Tanya Patel",
    role: "Producer, HealthCast",
    quote:
      "We onboard 5 guests a week now with zero " +
      "manual email threads.",
  },
  {
    initials: "DR",
    color: "#ef4444",
    name: "David Rossi",
    role: "Host, The Indie Pod",
    quote:
      "I went from spreadsheets to fully automated " +
      "in about 15 minutes.",
  },
];

function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[number];
}) {
  return (
    <div className={styles.card}>
      <p className={styles.quote}>
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className={styles.bottom}>
        <div
          className={styles.avatar}
          style={{ background: review.color }}
        >
          {review.initials}
        </div>
        <div className={styles.meta}>
          <span className={styles.name}>
            {review.name}
          </span>
          <span className={styles.role}>
            {review.role}
          </span>
        </div>
      </div>
    </div>
  );
}

function MarqueeTrack() {
  return (
    <div className={styles.track}>
      {REVIEWS.map((r) => (
        <ReviewCard key={r.name} review={r} />
      ))}
      {REVIEWS.map((r) => (
        <ReviewCard
          key={`dup-${r.name}`}
          review={r}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Testimonials</p>
          <h2 className="display-lg">
            Loved by podcasters
          </h2>
        </div>
      </div>
      <div className={styles.marquee}>
        <MarqueeTrack />
      </div>
    </section>
  );
}
