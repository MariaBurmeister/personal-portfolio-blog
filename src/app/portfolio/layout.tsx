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
        className="relative grid h-[453px] grow overflow-auto rounded-xl bg-gradient-to-b from-white to-purple-100 px-4 shadow-2xl"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <header className="sticky top-0 flex flex-col items-stretch gap-4 bg-white pt-4">
          <SecondaryNav indexRoute="/portfolio" routes={Routes} />
          <hr />
        </header>
        <section className="overflow-scroll">{children}</section>
        <footer className="sticky bottom-0 bg-purple-100 pb-4">
          <hr />
        </footer>
      </section>
    </main>
  );
};

export default PortfolioLayout;
