import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

export const metadata: Metadata = {
  title:
    "PodGuest Flow — Automate Your Podcast Guest Management",
  description:
    "One link to let guests self-book, submit assets, " +
    "and get reminders. Save 2-4 hours per episode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
