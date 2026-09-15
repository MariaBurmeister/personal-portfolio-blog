import type { Metadata } from "next";
import { AboutSection } from "./AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Maria Burmeister — frontend developer with a graphic design background, working with TypeScript, React and Vue.",
};

export default function Portfolio() {
  return <AboutSection />;
}
