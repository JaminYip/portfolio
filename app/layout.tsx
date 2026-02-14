import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "JaminYip's Portfolio",
  description:
    "Personal portfolio website for describe about my skills, career and what I have created.",
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
