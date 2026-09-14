import { ExperienceBlock } from "@/components/ExperienceBlock";
import { VerticalSteps } from "@/components/Steps";
import { getExperiences } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and tech stack.",
};

const TimelineStepper = () => (
  <hr className="mx-auto my-0 h-full w-0 grow border border-purple-900 py-0" />
);

const Experience = () => {
  const experiences = getExperiences();

  return (
    <>
      <h2 className="sr-only">Experience</h2>
      <VerticalSteps
        nextStep={<TimelineStepper />}
        prevStep={<TimelineStepper />}
      >
        {experiences.map((experience, i) => (
          <ExperienceBlock key={`${experience.company}-${i}`} {...experience} />
        ))}
      </VerticalSteps>
    </>
  );
};

export default Experience;
