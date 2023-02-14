import { BusinessCard } from "@/components";
import { FunctionComponent, lazy, ReactNode, useState } from "react";
import { SecondaryNav, NavRoute } from "./SecondaryNav";

interface Layout {
  children: ReactNode;
}

const Routes: NavRoute[] = [
  { path: "", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
];

const PortfolioLayout: FunctionComponent<Layout> = ({ children }) => {
  return (
    <main className="flex flex-wrap items-stretch gap-8 md:flex-nowrap">
      <BusinessCard className="max-h-fit grow md:min-w-fit md:max-w-fit" />
      <section className="relative flex min-w-full grow flex-col overflow-auto rounded-xl bg-gradient-to-b from-white to-purple-100 p-4 shadow-2xl md:max-h-[453px] md:min-w-min">
        <header className="sticky flex w-full flex-col">
          <SecondaryNav indexRoute="/portfolio" routes={Routes} />
          <hr className="mt-4" />
        </header>
        <main className="grow py-4 md:overflow-scroll">{children}</main>
        <hr />
      </section>
    </main>
  );
};

export default PortfolioLayout;
