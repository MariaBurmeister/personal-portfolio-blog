"use client";
import { Card, Steps } from "@/components";
import { useExperience } from "@/hooks/useExperience";
import { Stack } from "@/pages/api/experience";
import { FunctionComponent, useState } from "react";
import { Icon } from "@iconify/react";
import { VerticalSteps } from "@/components/Steps";

const Experience: FunctionComponent = () => {
  const { data, isLoading, error } = useExperience();

  return (
    <>
      <h2 className="sr-only">Experience</h2>
      <VerticalSteps
        nextStep={<TimelineStepper />}
        prevStep={<TimelineStepper />}
      >
        {isLoading && (
          <p className="text-2xs absolute left-4 bottom-0 z-10">loading...</p>
        )}
        {error && (
          <p className="text-2xs p-4">
            Error: {error.message + " " + error.cause}
          </p>
        )}
        {data &&
          data.map((experience, i) => (
            <ExperienceBlock key={i} {...experience} />
          ))}
      </VerticalSteps>
    </>
  );
};

const TimelineStepper: FunctionComponent = () => (
  <hr className="mx-auto my-0 h-full w-0 grow border border-purple-900 py-0" />
);

export default Experience;

interface ExperienceBlock {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: Stack;
}

const ExperienceBlock: FunctionComponent<ExperienceBlock> = ({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  stack,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Card
      title={
        <>
          {title} -{" "}
          <span className="rounded-md bg-green-100 py-1 px-2 ">
            @ {company}
          </span>
        </>
      }
      titleHelp={
        <p>
          <span className="rounded-md bg-purple-200  py-1 px-2 text-xs">
            {startDate}
          </span>{" "}
          -{" "}
          <span className="rounded-md bg-purple-200  py-1 px-2 text-xs">
            {endDate}
          </span>
        </p>
      }
      shadow="2xl"
      className="mx-6 max-w-[600px]"
      styleContent="relative"
      footer={<ExperienceStack stack={stack} />}
      styleFooter="flex justify-between flex-wrap grow items-center pr-2 pt-1"
    >
      <article
        className={`flex flex-col gap-2 overflow-hidden px-2 pt-2 font-baskervville`}
      >
        {description.map((desc, i) =>
          i === 0 ? (
            <p
              className={expanded ? "line-clamp-none" : "line-clamp-2"}
              key={title + i}
            >
              {desc}
            </p>
          ) : (
            <>{expanded && <p key={title + i}>{desc}</p>}</>
          )
        )}
      </article>
      <button
        id="expand"
        className="peer absolute top-0 left-0 h-full w-full opacity-0 "
        onClick={() => setExpanded(!expanded)}
      />
      <label
        htmlFor="expand"
        className="font-standard text-xs text-purple-400 underline peer-hover:text-purple-600"
      >
        {expanded ? "show less" : "show more"}
      </label>
    </Card>
  );
};

const ExperienceStack: FunctionComponent<{ stack: Stack }> = ({ stack }) => (
  <>
    {stack.map(({ name, icon }) =>
      icon ? (
        <Icon key={icon} icon={icon} />
      ) : (
        <span key={name} className="text-xs">
          {name}
        </span>
      )
    )}
  </>
);
