import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
  title: "Podloop — Automate Your Podcast Guest Management",
  description:
    "One link to let guests self-book, submit assets, " +
    "and get reminders. Save 2-4 hours per episode.",
  appleWebApp: {
    title: "PodLoop",
  },
  openGraph: {
    title: "Podloop — Automate Your Podcast Guest Management",
    description: "One link to let guests self-book, submit assets, and get reminders. Save 2-4 hours per episode.",
    url: "https://podloop.xyz",
    siteName: "Podloop",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Podloop — Automate Your Podcast Guest Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Podloop — Automate Your Podcast Guest Management",
    description: "One link to let guests self-book, submit assets, and get reminders. Save 2-4 hours per episode.",
    images: ["/og-image.webp"],
  },
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
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
