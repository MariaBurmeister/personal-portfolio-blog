"use client";
import { FunctionComponent } from "react";
import { Icon } from "@iconify/react";
import { LinkButton, Steps } from "@/components";

const About: FunctionComponent = () => (
  <>
    <Steps
      className="py-4 text-center text-lg text-slate-600"
      nextStep={<Stepper stepTo="next" />}
      prevStep={<Stepper stepTo="prev" />}
    >
      <>
        <h4 className="mb-8 text-2xl font-bold text-purple-300">
          <Icon
            inline
            className="inline align-middle text-green-300"
            icon="mdi:face-man-shimmer"
            aria-hidden
          />{" "}
          Hi, I&apos;m Gabi!
        </h4>
        <p>
          I&apos;m a self-thaught <strong>Frontend Engineer</strong> with a
          <strong> Graphic design </strong>
          background, and a passion for developing{" "}
          <strong>delightful UX&apos;s</strong> and{" "}
          <strong>polished UI&apos;s</strong>.
        </p>
      </>
      <>
        <p className="mb-2">
          Some of the technologies I enjoy working with include{" "}
          <strong>React</strong>, <strong>Typescript</strong> and{" "}
          <strong>Tailwind css</strong>.
        </p>
        <p>
          As a <strong>developer</strong> and a <strong>learner</strong>, I am
          always looking for ways to improve my skills and learn new
          technologies.
        </p>
      </>
      <>
        <p className="mb-2">
          I take pride in sharing my <strong>work philosophy</strong>, which is
          to always strive to <strong>improve myself</strong>, my{" "}
          <strong>environments</strong> - be them <strong>physical</strong> or
          <strong> digital</strong> - and the <strong>relationships</strong>{" "}
          with the people around me.
        </p>
        <p>
          This tends to make me a <strong>good team player</strong>, and a
          promoter of a <strong>healthy </strong>
          and <strong>communicative</strong> work environment.
        </p>
      </>
      <>
        <p className="mb-4">
          I&apos;m currently looking for a new opportunity, so if you have a
          position for which you think I would be a good fit, please feel free
          to reach out!
        </p>
        <LinkButton
          className="border-none bg-gradient-to-b from-purple-200 to-purple-500 py-1 px-4  text-green-100"
          href="mailto:mariaburmeister+work-origin:portfolio"
        >
          email me
        </LinkButton>
      </>
    </Steps>
  </>
);

export default About;

const Stepper: FunctionComponent<{
  direction?: "horizontal" | "vertical";
  stepTo: "next" | "prev";
}> = ({ direction = "horizontal", stepTo }) => {
  const nextDirection = direction === "horizontal" ? "right" : "down";
  const prevDirection = direction === "horizontal" ? "left" : "up";

  return (
    <Icon
      inline
      icon={`mdi:chevron-${stepTo === "next" ? nextDirection : prevDirection}`}
      className="rounded-full bg-slate-100 text-slate-600 hover:bg-slate-400"
    />
  );
};
