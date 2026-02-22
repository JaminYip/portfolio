import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jamin Yip | Portfolio",
  description:
    "Jamin Yip's portfolio — skills, career, and projects.",
  metadataBase: new URL("https://jaminyip.vercel.app"),
  openGraph: {
    title: "Jamin Yip | Portfolio",
    description: "Jamin Yip's portfolio — skills, career, and projects.",
    url: "https://jaminyip.vercel.app",
    siteName: "Jamin Yip Portfolio",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "Jamin Yip | Portfolio",
    description: "Jamin Yip's portfolio — skills, career, and projects.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
