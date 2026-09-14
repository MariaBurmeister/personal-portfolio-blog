import {
  Baskervville,
  Plaster,
  Rubik_Mono_One,
} from "next/font/google";
import { AnalyticsWrapper, MainNav } from "@/components";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.scss";


const plaster = Plaster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-plaster",
});

const rubikMono = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-mono",
});

const baskervville = Baskervville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-baskervville",
});

const siteDescription =
  "Check out my Frontend Developer Portfolio and Blog. Contact me for your open Frontend position. mariaburmeister+work@proton.me";

export const metadata: Metadata = {
  metadataBase: new URL("https://mariaburmeister.com"),
  title: "Maria Burmeister | Frontend Developer",
  description: siteDescription,
  openGraph: {
    title: "Maria Burmeister | Frontend Developer",
    description: siteDescription,
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#bbf7d0" },
    { media: "(prefers-color-scheme: light)", color: "#bbf7d0" },
    { color: "#bbf7d0" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plaster.variable} ${rubikMono.variable} ${baskervville.variable}`}
    >
      <body className="relative flex min-h-[100dvh] flex-col gap-8 bg-gradient-to-r from-green-200 to-purple-500 p-6 md:justify-center md:px-16 lg:px-36">
        {children}
        <AnalyticsWrapper />
        <footer className="sticky bottom-1 shrink rounded-xl bg-white px-2 shadow-2xl">
          <MainNav />
        </footer>
      </body>
    </html>
  );
}
