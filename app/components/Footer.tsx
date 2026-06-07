import { HugeiconsIcon } from "@hugeicons/react";
import {
  NewTwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  Mic01Icon,
} from "@hugeicons/core-free-icons";
import styles from "./Footer.module.css";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: NewTwitterIcon, href: "#", label: "X / Twitter" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

function FooterColumn({
  col,
}: {
  col: (typeof COLUMNS)[number];
}) {
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
      <span className={styles.logo}>
        <span
          className={styles.logoIcon}
          aria-hidden="true"
        >
          <HugeiconsIcon icon={Mic01Icon} size={14} />
        </span>
      </span>
      <p className={styles.brandDesc}>
        Automate your podcast guest management.
        One link, zero admin.
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
          <span>
            © {year} PodGuest Flow. All rights reserved.
          </span>
          <span>Made for podcasters, by podcasters.</span>
        </div>
      </div>
    </footer>
  );
}
