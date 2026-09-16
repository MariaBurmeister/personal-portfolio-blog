import { BusinessCard } from "@/components";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { SecondaryNav, NavRoute } from "./SecondaryNav";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Maria Burmeister",
  },
  description:
    "Frontend developer portfolio — about, experience, and selected projects.",
};

const Routes: NavRoute[] = [
  { path: "", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
];

const PortfolioLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      id="content"
      className="flex flex-wrap items-stretch gap-8 md:flex-nowrap"
    >
      <BusinessCard className="grow md:min-w-fit md:max-w-fit" />
      <section
        // minmax(0, 1fr): Safari treats 1fr as minmax(auto, 1fr), so the row
        // won't shrink and the whole panel becomes the scroller.
        className="relative grid h-[min(70dvh,36rem)] max-h-[calc(100dvh-8rem)] min-h-[min(28rem,calc(100dvh-8rem))] grow grid-rows-[auto_1fr_auto] overflow-hidden rounded-xl bg-gradient-to-b from-white to-purple-100 px-4 shadow-2xl dark:from-slate-900 dark:to-purple-950"
      >
        <header className="flex flex-col items-stretch gap-4 bg-white pt-4 dark:bg-slate-900">
          <SecondaryNav indexRoute="/portfolio" routes={Routes} />
          <hr className="border-purple-200 dark:border-purple-800" />
        </header>
        <section
          id="main-content"
          // `relative` keeps absolutely positioned descendants (e.g. sr-only
          // labels) contained here instead of leaking into the panel's scroll area.
          className="relative min-h-0 min-w-0 overflow-y-auto"
        >
          {children}
        </section>
        <footer className="bg-purple-100 pb-4 dark:bg-purple-950">
          <hr
            aria-hidden="true"
            className="border-purple-200 dark:border-purple-800"
          />
        </footer>
      </section>
    </main>
  );
};

export default PortfolioLayout;
