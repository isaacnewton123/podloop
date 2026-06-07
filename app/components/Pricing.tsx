"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
} from "@hugeicons/core-free-icons";
import { useReveal } from "../hooks/useReveal";
import styles from "./Pricing.module.css";

interface Tier {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "For solo podcasters getting started.",
    features: [
      "1 show profile",
      "Smart timezone calendar",
      "Guest self-service portal",
      "5 bookings / month",
      "Email confirmations",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/mo",
    desc: "For serious creators who record weekly.",
    features: [
      "Unlimited bookings",
      "Google Calendar 2-way sync",
      "Custom onboarding form fields",
      "Automated reminder sequences",
      "Post-release guest notifications",
      "Priority email support",
    ],
    featured: true,
    cta: "Go Pro",
  },
  {
    name: "Team",
    price: "$19.99",
    period: "/mo",
    desc: "For networks and multi-host shows.",
    features: [
      "Everything in Pro",
      "Unlimited shows",
      "Multiple team members",
      "Branded guest portal",
      "Analytics dashboard",
      "API access",
      "Dedicated support",
    ],
    cta: "Start Team Trial",
  },
];

function CheckIcon({ featured }: { featured?: boolean }) {
  return (
    <span className={styles.check}>
      <HugeiconsIcon
        icon={CheckmarkCircle01Icon}
        size={16}
        color={featured ? "#fff" : undefined}
      />
    </span>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const cardClass = tier.featured
    ? `${styles.card} ${styles.featured}`
    : styles.card;

  const btnClass = tier.featured
    ? `btn-primary ${styles.ctaBtn} ${styles.featuredBtn}`
    : `btn-primary ${styles.ctaBtn}`;

  return (
    <div className={cardClass}>
      {tier.featured && (
        <span className={styles.badge}>Most Popular</span>
      )}
      <h3 className={`title-lg ${styles.planName}`}>
        {tier.name}
      </h3>
      <div>
        <span className={styles.price}>{tier.price}</span>
        {tier.period && (
          <span className={styles.period}>
            {tier.period}
          </span>
        )}
      </div>
      <p className={styles.desc}>{tier.desc}</p>
      <div className={styles.divider} />
      <ul className={styles.featureList}>
        {tier.features.map((f) => (
          <li key={f} className={styles.featureItem}>
            <CheckIcon featured={tier.featured} />
            {f}
          </li>
        ))}
      </ul>
      <a href="/waitlist" className={btnClass}>
        {tier.cta}
      </a>
    </div>
  );
}

export default function Pricing() {
  const ref = useReveal();

  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Pricing</p>
          <h2 className="display-lg">
            Simple, transparent pricing
          </h2>
          <p className={styles.subtitle}>
            Start free. Upgrade when you need more.
          </p>
        </div>
        <div ref={ref} className={`reveal ${styles.grid}`}>
          {TIERS.map((t) => (
            <TierCard key={t.name} tier={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
