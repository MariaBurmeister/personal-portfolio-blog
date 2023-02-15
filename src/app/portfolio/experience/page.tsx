"use client";
import { Card, Steps } from "@/components";
import { useExperience } from "@/hooks/useExperience";
import { Stack } from "@/pages/api/experience";
import { FunctionComponent, useState } from "react";
import { Icon } from "@iconify/react";

const Experience: FunctionComponent = () => {
  const { data, isLoading, error } = useExperience();

  return (
    <Steps
      className="relative max-h-96 px-4 md:h-full"
      styleSteps="max-w-[500px] md:max-w-[600px]"
      nextStep={[
        <Icon
          icon="svg-spinners:bars-fade"
          rotate={45}
          className="mx-auto mt-4 text-green-100 shadow-green-300 drop-shadow-lg"
          width={40}
        />,
        <Icon
          icon="svg-spinners:bars-fade"
          rotate={45}
          className="mx-auto text-green-100 shadow-green-300 drop-shadow-lg"
          width={40}
        />,
      ]}
      prevStep={[
        <Icon
          icon="svg-spinners:bars-fade"
          rotate={45}
          className="mx-auto text-green-100 shadow-green-300 drop-shadow-lg"
          width={40}
        />,
        <Icon
          icon="svg-spinners:bars-fade"
          rotate={45}
          className="mx-auto mb-4 text-green-100 shadow-green-300 drop-shadow-lg"
          width={40}
        />,
      ]}
    >
      {isLoading && (
        <p className="text-2xs absolute left-4 bottom-0">loading...</p>
      )}
      {error && <p>Error: {error.message + " " + error.cause}</p>}
      {data &&
        data.map((experience, i) => (
          <ExperienceBlock key={i} {...experience} />
        ))}
    </Steps>
  );
};

export default Experience;

interface ExperienceBlock {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
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
      title={title + " - " + company}
      titleHelp={company}
      label=""
      footer={<ExperienceStack stack={stack} />}
      className=""
      styleContent="relative"
      styleFooter="flex justify-between flex-wrap grow items-center pr-2 pt-1"
    >
      <p className={`line-clamp-2 ${expanded ? "line-clamp-none" : ""}`}>
        {description}
      </p>
      <button
        id="expand"
        className="peer absolute top-0 left-0 h-full w-full opacity-0 "
        onClick={() => setExpanded(!expanded)}
      />
      <label
        htmlFor="expand"
        className="text-xs text-purple-400 underline peer-hover:text-purple-600"
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
