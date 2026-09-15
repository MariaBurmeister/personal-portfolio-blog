import {
  Baskervville,
  Rubik_Mono_One,
} from "next/font/google";
import { AnalyticsWrapper, MainNav, ThemeProvider } from "@/components";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import "./globals.scss";


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
  "Frontend developer portfolio — polished UI, thoughtful UX, and selected projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mariaburmeister.com"),
  title: {
    default: "Maria Burmeister | Frontend Developer",
    template: "%s | Maria Burmeister",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mariaburmeister.com",
    siteName: "Maria Burmeister",
    title: "Maria Burmeister | Frontend Developer",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Burmeister | Frontend Developer",
    description: siteDescription,
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
      suppressHydrationWarning
      className={`${rubikMono.variable} ${baskervville.variable}`}
    >
      <body className="relative flex min-h-[100dvh] flex-col-reverse gap-8 bg-gradient-to-r from-green-200 to-purple-500 p-6 md:justify-center md:px-16 lg:px-36 dark:from-slate-950 dark:to-purple-950">
        <ThemeProvider>
          <header className="sticky bottom-1 shrink">
            <MainNav />
          </header>
          {children}
          <AnalyticsWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
