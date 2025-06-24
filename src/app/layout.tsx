import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vynce.app'),
  title: "Vynce - Your music, analyzed.",
  description: "Turn your Spotify data into stunning, AI-powered insights. Discover your musical DNA with Music Radar, Musical Age, Mood Ring, and more.",
  keywords: ["music analysis", "spotify insights", "AI music", "music DNA", "mood ring", "musical age", "spotify wrapped"],
  authors: [{ name: "Vynce Team" }],
  creator: "Vynce",
  publisher: "Vynce",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Vynce - Your music, analyzed.",
    description: "Turn your Spotify data into stunning, AI-powered insights.",
    type: "website",
    url: "https://vynce.app",
    siteName: "Vynce",
    locale: "en_US",
    images: [
      {
        url: "/Vynce_logo.png",
        width: 1200,
        height: 630,
        alt: "Vynce - Your music, analyzed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vynce - Your music, analyzed.",
    description: "Turn your Spotify data into stunning, AI-powered insights.",
    creator: "@vynceapp",
    images: ["/Vynce_logo.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Vynce_logo.png", sizes: "192x192", type: "image/png" },
      { url: "/Vynce_logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/Vynce_logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-radial from-[#0d0d0d] to-[#1a1a1a] text-white">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
