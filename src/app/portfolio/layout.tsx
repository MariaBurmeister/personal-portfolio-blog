import { BusinessCard } from "@/components";
import { FunctionComponent, ReactNode } from "react";
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
      <BusinessCard className="grow md:min-w-fit md:max-w-fit" />
      <section
        className="relative grid h-[453px] grow overflow-auto rounded-xl bg-gradient-to-b from-white to-purple-100 px-4 shadow-2xl"
        style={{ gridTemplateRows: "auto 1fr auto" }}
      >
        <header className="sticky top-0 flex flex-col items-stretch gap-4 bg-white pt-4">
          <SecondaryNav indexRoute="/portfolio" routes={Routes} />
          <hr />
        </header>
        <main className="overflow-scroll">{children}</main>
        <footer className="sticky bottom-0 bg-purple-100 pb-4">
          <hr />
          {/* footer content */}
        </footer>
      </section>
    </main>
  );
};

export default PortfolioLayout;
