import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "FAQ", href: "/faq" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Refund Policy", href: "/refund" },
];

const SOCIALS = [
  { icon: NewTwitterIcon, href: "#", label: "X" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

function FooterColumn({ col }: { col: (typeof COLUMNS)[number] }) {
  return (
    <div>
      <p className={styles.colTitle}>{col.title}</p>
      <ul className={styles.colLinks}>
        {col.links.map((link) => (
          <li key={link.label}>
            <a className={styles.colLink} href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className={styles.socials}>
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          className={styles.socialLink}
          aria-label={s.label}
        >
          <HugeiconsIcon icon={s.icon} size={20} />
        </a>
      ))}
    </div>
  );
}

function FooterBrand() {
  return (
    <div className={styles.brand}>
      <Image
        src="/logo-podloop-no-bg.avif"
        alt="Podloop Podcast Guest Management Software Logo"
        width={44}
        height={44}
        className={styles.logoImg}
        loading="lazy"
        decoding="async"
      />
      <p className={styles.brandDesc}>
        Automate your podcast guest management. One link, zero admin.
      </p>
      <SocialLinks />
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.top}>
          <FooterBrand />
          {COLUMNS.map((col) => (
            <FooterColumn key={col.title} col={col} />
          ))}
        </div>
        <div className={styles.bottom}>
          <span>© {year} Podloop. All rights reserved.</span>
          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={styles.bottomLink}>
                {link.label}
              </a>
            ))}
          </div>
          <span>Made for podcasters, by podcasters.</span>
        </div>
      </div>
    </footer>
  );
}
