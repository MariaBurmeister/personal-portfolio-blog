import type { Metadata } from "next";
import { AboutSection } from "./AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Maria Burmeister — frontend engineer with a graphic design background.",
};

export default function Portfolio() {
  return <AboutSection />;
}
