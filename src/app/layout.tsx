import { Baskervville, Rubik_Mono_One } from "next/font/google";
import {
  AnalyticsWrapper,
  LinkButton,
  MainNav,
  ThemeProvider,
} from "@/components";
import type { Metadata, Viewport } from "next";
import { ReactNode, ViewTransition } from "react";
import "./globals.css";

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
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${rubikMono.variable} ${baskervville.variable}`}
    >
      <ViewTransition>
        <body className="page-change relative flex min-h-dvh flex-col gap-8 p-6 accent-purple-500 [--bg-gradient-direction:var(--bg-gradient-direction-initial)] selection:bg-green-200 selection:text-purple-600 md:justify-center md:px-16 md:[--bg-gradient-direction:var(--bg-gradient-direction-md)] lg:px-36 dark:selection:bg-purple-600 dark:selection:text-green-200">
          <ThemeProvider>
            <LinkButton
              className="sr-only absolute top-0 left-0 focus:not-sr-only"
              href="#main-nav"
              tabIndex={1}
            >
              To Site Navigation
            </LinkButton>
            <LinkButton
              className="sr-only absolute top-0 right-0 focus:not-sr-only"
              href="#secondary-nav"
              tabIndex={1}
            >
              To Portfolio Navigation
            </LinkButton>
            {children}
            <header className="sticky bottom-1 z-50 shrink">
              <MainNav />
            </header>
            <AnalyticsWrapper />
          </ThemeProvider>
        </body>
      </ViewTransition>
    </html>
  );
}
