import type { Metadata } from "next";

export const SITE_URL = "https://podloop.xyz";
export const SITE_NAME = "Podloop";
export const SITE_DESCRIPTION = "One link to let guests self-book, submit assets, and get reminders. Automate your podcast guest management and save 2-4 hours per episode.";

export function constructMetadata({
  title = "Podloop — Automate Your Podcast Guest Management",
  description = SITE_DESCRIPTION,
  image = "/og-image.webp",
  icons = "/favicon.ico",
  canonicalUrl = "/",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      siteName: SITE_NAME,
      url: canonicalUrl !== "/" ? canonicalUrl : SITE_URL,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@podloop",
    },
    icons,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": "/en-US",
      },
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export const globalEntitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": SITE_NAME,
      "operatingSystem": "All",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "description": SITE_DESCRIPTION,
      "url": SITE_URL,
    },
    {
      "@type": "Organization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo-podloop-no-bg.avif`,
      "sameAs": [
        "https://twitter.com/podloop",
        "https://linkedin.com/company/podloop"
      ]
    },
    {
      "@type": "WebSite",
      "url": SITE_URL,
      "name": SITE_NAME,
      "description": SITE_DESCRIPTION,
      "publisher": {
        "@type": "Organization",
        "name": SITE_NAME
      }
    }
  ]
};
