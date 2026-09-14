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
    <main className="flex flex-wrap items-stretch gap-8 md:flex-nowrap">
      <BusinessCard className="grow md:min-w-fit md:max-w-fit" />
      <section
        className="relative grid h-[453px] max-h-[calc(100dvh-8rem)] grow overflow-auto rounded-xl bg-gradient-to-b from-white to-purple-100 px-4 shadow-2xl dark:from-slate-900 dark:to-purple-950"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <header className="sticky top-0 flex flex-col items-stretch gap-4 bg-white pt-4 dark:bg-slate-900">
          <SecondaryNav indexRoute="/portfolio" routes={Routes} />
          <hr className="border-purple-200 dark:border-purple-800" />
        </header>
        <section className="min-h-0 min-w-0 overflow-y-auto">{children}</section>
        <footer className="sticky bottom-0 bg-purple-100 pb-4 dark:bg-purple-950">
          <hr className="border-purple-200 dark:border-purple-800" />
        </footer>
      </section>
    </main>
  );
};

export default PortfolioLayout;
