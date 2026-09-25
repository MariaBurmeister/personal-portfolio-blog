import { BusinessCard } from "@/components";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { SecondaryNav, NavRoute } from "./SecondaryNav";
import { PageLayout } from "@/components/layout/PageLayout";
import { Panel } from "@/components/layout/Panel";

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
    <PageLayout variant="side-content">
      <BusinessCard />
      <Panel
        as="section"
        variant="inline-end"
        // minmax(0, 1fr): Safari treats 1fr as minmax(auto, 1fr), so the row
        // won't shrink and the whole panel becomes the scroller.
        className="grid grid-rows-[auto_1fr_auto]"
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
      </Panel>
    </PageLayout>
  );
};

export default PortfolioLayout;
