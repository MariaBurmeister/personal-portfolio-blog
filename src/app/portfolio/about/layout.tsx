import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Maria Burmeister — frontend engineer with a graphic design background.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
