import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sagey - Your AI Wellness Companion",
  description: "Your wise AI companion for a balanced, connected life.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#E6F0FA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gradient-to-b from-[#E6F0FA] to-white">
        {children}
      </body>
    </html>
  );
}
