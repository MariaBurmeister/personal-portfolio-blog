import { BusinessCard } from "@/components";
import { FunctionComponent, ReactNode, useState } from "react";
import { SecondaryNav } from "./SecondaryNav";

interface Layout {
  children: ReactNode;
}

const Routes = [
  { path: "", label: "About" },
  { path: "experience", label: "Experience" },
  { path: "projects", label: "Projects" },
];

const PortfolioLayout: FunctionComponent<Layout> = ({ children }) => {
  return (
    <main className="row-span-5 grid grid-cols-1 items-stretch justify-center gap-8 md:row-start-1 md:grid-cols-12 ">
      <BusinessCard className="col-span-1 md:col-span-4" />
      <section className="rounded-xl bg-white shadow-2xl ring-white  ring-offset-4 ring-offset-slate-300 md:col-span-8">
        <SecondaryNav routes={Routes} />
        {children}
      </section>
    </main>
  );
};

export default PortfolioLayout;
