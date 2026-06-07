"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  CalendarCheckIcon,
  Link01Icon,
  BellRingIcon,
  RocketIcon,
} from "@hugeicons/core-free-icons";
import { useReveal } from "../hooks/useReveal";
import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: CalendarCheckIcon,
    iconClass: styles.iconCalendar,
    title: "Smart Scheduling",
    desc:
      "Timezone-aware calendar syncs with Google " +
      "Calendar or Outlook. Guests see only your " +
      "available slots in their local time.",
  },
  {
    icon: Link01Icon,
    iconClass: styles.iconPortal,
    title: "Guest Portal",
    desc:
      "One branded link where guests submit bios, " +
      "headshots, social links, and answer custom " +
      "questions — no more scattered messages.",
  },
  {
    icon: BellRingIcon,
    iconClass: styles.iconReminder,
    title: "Auto-Reminders",
    desc:
      "Automated email sequences at 7 days, 24 hours, " +
      "and 1 hour before recording. Includes tech " +
      "checklist and studio link.",
  },
  {
    icon: RocketIcon,
    iconClass: styles.iconShare,
    title: "Post-Release Notify",
    desc:
      "Automatically email guests when episodes go " +
      "live with one-click share links for Twitter, " +
      "LinkedIn, and Instagram.",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  return (
    <div
      className={styles.card}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`${styles.iconWrap} ${feature.iconClass}`}>
        <HugeiconsIcon icon={feature.icon} size={24} />
      </div>
      <h3 className={`title-md ${styles.cardTitle}`}>
        {feature.title}
      </h3>
      <p className={styles.cardDesc}>{feature.desc}</p>
    </div>
  );
}

export default function Features() {
  const ref = useReveal();

  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Features</p>
          <h2 className="display-lg">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className={styles.subtitle}>
            Replace scattered emails, timezone confusion,
            and forgotten follow-ups with one automated
            workflow.
          </p>
        </div>
        <div ref={ref} className={`reveal ${styles.grid}`}>
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
