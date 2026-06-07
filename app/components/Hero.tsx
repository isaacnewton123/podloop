import styles from "./Hero.module.css";

const DAYS_HEAD = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const CAL_DAYS = [
  { d: 2 },
  { d: 3 },
  { d: 4, avail: true },
  { d: 5 },
  { d: 6, avail: true },
  { d: 7 },
  { d: 8 },
  { d: 9 },
  { d: 10 },
  { d: 11, avail: true },
  { d: 12 },
  { d: 13, avail: true, selected: true },
  { d: 14 },
  { d: 15 },
  { d: 16 },
  { d: 17 },
  { d: 18, avail: true },
  { d: 19 },
  { d: 20, avail: true },
  { d: 21 },
  { d: 22 },
];

const SLOTS = [
  { t: "10:00", active: false },
  { t: "11:00", active: false },
  { t: "14:00", active: true },
  { t: "15:30", active: false },
];

function calDayClass(day: { avail?: boolean; selected?: boolean }) {
  if (day.selected) return `${styles.calDay} ${styles.calDaySelected}`;
  if (day.avail) return `${styles.calDay} ${styles.calDayAvail}`;
  return styles.calDay;
}

function MockupHeader() {
  return (
    <div className={styles.mockupHeader}>
      <div className={styles.mockupAvatar}>PL</div>
      <div className={styles.mockupMeta}>
        <span className={styles.mockupName}>The Creator Lab</span>
        <span className={styles.mockupLabel}>60 min · Google Meet</span>
      </div>
    </div>
  );
}

function CalendarGrid() {
  return (
    <div className={styles.calGrid}>
      {DAYS_HEAD.map((d) => (
        <div key={d} className={`${styles.calDay} ${styles.calDayHead}`}>
          {d}
        </div>
      ))}
      {CAL_DAYS.map((day) => (
        <div key={day.d} className={calDayClass(day)}>
          {day.d}
        </div>
      ))}
    </div>
  );
}

function TimeSlots() {
  return (
    <div className={styles.timeSlots}>
      {SLOTS.map((s) => (
        <span
          key={s.t}
          className={
            s.active ? `${styles.slot} ${styles.slotActive}` : styles.slot
          }
        >
          {s.t}
        </span>
      ))}
    </div>
  );
}

function MockupCard() {
  return (
    <div className={styles.mockup}>
      <MockupHeader />
      <CalendarGrid />
      <TimeSlots />
    </div>
  );
}

function HeroContent() {
  return (
    <div className={styles.content}>
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        Now in Early Access
      </div>
      <h1 className="display-xl">
        Your podcast guests,
        <br />
        fully automated.
      </h1>
      <p className={styles.subtitle}>
        One link. Guests self-book, submit bios &amp; headshots, and get
        automatic reminders — from scheduling to post-release promotion.
      </p>
      <div className={styles.ctas}>
        <a href="/waitlist" className="btn-primary">
          Get Started Free
        </a>
        <a href="/#how-it-works" className="btn-secondary">
          See How It Works
        </a>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.grid}`}>
        <HeroContent />
        <MockupCard />
      </div>
    </section>
  );
}
