"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";
import { useReveal } from "../hooks/useReveal";
import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    initials: "SJ",
    color: "#ec4899",
    name: "Sarah Johnson",
    role: "Host, The Marketing Hour",
    stars: 5,
    quote:
      "PodGuest Flow cut my pre-production admin from " +
      "3 hours to 10 minutes. Guests love the " +
      "professional booking experience.",
  },
  {
    initials: "MR",
    color: "#8b5cf6",
    name: "Marco Rivera",
    role: "Host, Dev Unfiltered",
    stars: 5,
    quote:
      "No more chasing guests for headshots or " +
      "timezone math. Everything arrives in one " +
      "place, ready to go.",
  },
  {
    initials: "AL",
    color: "#34d399",
    name: "Aisha Lee",
    role: "Producer, StartupFM",
    stars: 5,
    quote:
      "The post-release notification feature alone " +
      "doubled our episode shares. Guests actually " +
      "remember to promote the episode.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <HugeiconsIcon
          key={i}
          icon={StarIcon}
          size={16}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof REVIEWS)[number];
}) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div
          className={styles.avatar}
          style={{ background: review.color }}
        >
          {review.initials}
        </div>
        <div className={styles.meta}>
          <span className={styles.name}>{review.name}</span>
          <span className={styles.role}>{review.role}</span>
        </div>
      </div>
      <StarRow count={review.stars} />
      <p className={styles.quote}>
        &ldquo;{review.quote}&rdquo;
      </p>
    </div>
  );
}

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Testimonials</p>
          <h2 className="display-lg">
            Loved by podcasters
          </h2>
        </div>
        <div ref={ref} className={`reveal ${styles.grid}`}>
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
