"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Link01Icon,
  UserCheckIcon,
  FlashIcon,
} from "@hugeicons/core-free-icons";
import { useReveal } from "../hooks/useReveal";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    num: "1",
    icon: Link01Icon,
    title: "Share Your Link",
    desc:
      "Set up your show profile and scheduling rules " +
      "once. Get a permanent invite link to share " +
      "with every prospective guest.",
  },
  {
    num: "2",
    icon: UserCheckIcon,
    title: "Guests Self-Book",
    desc:
      "Guests pick a time in their timezone, upload " +
      "their headshot and bio, and answer your custom " +
      "questions — all in one flow.",
  },
  {
    num: "3",
    icon: FlashIcon,
    title: "Automate the Rest",
    desc:
      "Calendar invites, tech-check reminders, and " +
      "post-release share links are sent automatically. " +
      "You just show up and record.",
  },
];

function StepCard({
  step,
}: {
  step: (typeof STEPS)[number];
}) {
  return (
    <div className={styles.step}>
      <div className={styles.stepNumber}>{step.num}</div>
      <div className={styles.stepIcon}>
        <HugeiconsIcon icon={step.icon} size={32} />
      </div>
      <h3 className={`title-md ${styles.stepTitle}`}>
        {step.title}
      </h3>
      <p className={styles.stepDesc}>{step.desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section
      className={styles.section}
      id="how-it-works"
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>How It Works</p>
          <h2 className="display-lg">
            Three steps to zero admin
          </h2>
          <p className={styles.subtitle}>
            From guest invitation to episode release,
            everything runs on autopilot.
          </p>
        </div>
        <div ref={ref} className={`reveal ${styles.steps}`}>
          <div className={styles.connector} />
          <div
            className={
              `${styles.connector} ` +
              `${styles.connectorSecond}`
            }
          />
          {STEPS.map((s) => (
            <StepCard key={s.num} step={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
