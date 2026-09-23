import "./globals.css";
import "../styles/brand.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

function siteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXTAUTH_URL || "http://localhost:3101").trim();
  if (!raw) return "http://localhost:3101";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw.replace(/\/+$/, "");
  return `https://${raw.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

const SITE_URL = siteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "DayaKlik",
  description: "Pulsa, paket data, e-wallet, token listrik, game, dan PPOB dalam satu tempat.",
  applicationName: "DayaKlik",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "DayaKlik",
    description: "Pulsa, paket data, e-wallet, token listrik, game, dan PPOB dalam satu tempat.",
    url: SITE_URL,
    siteName: "DayaKlik",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DayaKlik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DayaKlik",
    description: "Pulsa, paket data, e-wallet, token listrik, game, dan PPOB dalam satu tempat.",
    images: ["/twitter-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Root layout harus netral. Jangan taruh Header/Footer di sini.
  return (
    <html lang="id" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {process.env.NEXT_PUBLIC_GA_ID ? <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        /> : null}
        {process.env.NEXT_PUBLIC_GA_ID ? <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${JSON.stringify(process.env.NEXT_PUBLIC_GA_ID)});
          `}
        </Script> : null}
        {children}
      </body>
    </html>
  );
}
