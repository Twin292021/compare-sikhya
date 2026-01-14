import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/common/nav";
import Footer from "@/src/common/footer/inex";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.compareshiksha.com"),

  title: {
    default: "Compare Shiksha | Compare Online Colleges, Courses & Universities in India",
    template: "%s | Compare Shiksha"
  },

  description:
    "Compare Shiksha helps students compare online colleges, universities, courses, fees, EMI options, and placements in India. Get expert guidance to choose the right online degree for your career.",

  keywords: [
    "Compare online colleges in India",
    "Online degree programs India",
    "Compare universities online",
    "Online MBA comparison",
    "Online MCA colleges",
    "Distance education India",
    "Education counselling platform",
    "Compare Shiksha"
  ],

  authors: [{ name: "Compare Shiksha Team" }],
  creator: "Compare Shiksha",

  openGraph: {
    title: "Compare Shiksha | Compare Online Colleges & Courses in India",
    description:
      "Make informed education decisions with Compare Shiksha. Compare online colleges, courses, fees, and career outcomes across India with expert counselling support.",
    url: "https://www.compareshiksha.com",
    siteName: "Compare Shiksha",
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Compare Shiksha | Online Education Comparison Platform",
    description:
      "Compare colleges, universities, online degrees, fees, and placements in India. Get expert guidance with Compare Shiksha.",
    images: ["/og-image.png"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  category: "Education"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
