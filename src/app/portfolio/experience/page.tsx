import { ExperienceBlock, Timeline } from "@/components";
import { getExperiences } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and tech stack.",
};

const TimelineConnector = () => (
  <span
    aria-hidden
    className="block h-full min-h-11 w-0 border border-purple-900 dark:border-purple-300"
  />
);

const Experience = () => {
  const experiences = getExperiences();

  return (
    <>
      <h2 className="sr-only">Experience</h2>
      <Timeline connector={<TimelineConnector />}>
        {experiences.map((experience, i) => (
          <ExperienceBlock key={`${experience.company}-${i}`} {...experience} />
        ))}
      </Timeline>
    </>
  );
};

export default Experience;
