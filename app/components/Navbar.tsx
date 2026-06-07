"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
];

function DesktopLinks() {
  return (
    <ul className={styles.links}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a className={styles.link} href={item.href}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={styles.mobileMenu}
      data-open={open}
      id="mobile-menu"
    >
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          className={styles.mobileLink}
          href={item.href}
          onClick={onClose}
        >
          {item.label}
        </a>
      ))}
      <a href="/waitlist" className="btn-primary">
        Get Started Free
      </a>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav} id="main-nav">
        <div className={`container ${styles.inner}`}>
          <a href="/" className={styles.logo}>
            <Image
              src="/logo-podloop-no-bg.avif"
              alt="Podloop"
              width={44}
              height={44}
              className={styles.logoImg}
            />
          </a>
          <DesktopLinks />
          <div className={styles.actions}>
            <a href="/waitlist" className={styles.signIn}>
              Sign in
            </a>
            <a href="/waitlist" className="btn-primary">
              Get Started Free
            </a>
            <button
              className={styles.hamburger}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              id="nav-hamburger"
            >
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
              <span className={styles.hamburgerLine} />
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
