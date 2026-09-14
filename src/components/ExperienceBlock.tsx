"use client";

import { Card } from "@/components";
import { Stack } from "@/utils";
import { FunctionComponent, useState } from "react";
import { Icon } from "@iconify/react";

interface ExperienceBlockProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: Stack;
}

export const ExperienceBlock: FunctionComponent<ExperienceBlockProps> = ({
  title,
  company,
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
          <span className="rounded-md bg-green-100 px-2 py-1 dark:bg-green-950 dark:text-green-200">@ {company}</span>
        </>
      }
      titleHelp={
        <span>
          <span className="rounded-md bg-purple-200 px-2 py-1 text-xs dark:bg-purple-900 dark:text-purple-100">
            {startDate}
          </span>
          {" - "}
          <span className="rounded-md bg-purple-200 px-2 py-1 text-xs dark:bg-purple-900 dark:text-purple-100">
            {endDate}
          </span>
        </span>
      }
      shadow="2xl"
      className="mx-6 max-w-[600px]"
      styleContent="relative"
      footer={<ExperienceStack stack={stack} />}
      styleFooter="flex justify-between flex-wrap grow items-center pr-2 pt-1"
    >
      <article className="flex flex-col gap-2 overflow-hidden px-2 pt-2 font-baskervville">
        {description.map((desc, i) =>
          i === 0 ? (
            <p
              className={expanded ? "line-clamp-none" : "line-clamp-2"}
              key={title + i}
            >
              {desc}
            </p>
          ) : (
            expanded && <p key={title + i}>{desc}</p>
          )
        )}
      </article>
      <button
        type="button"
        className="font-standard text-xs text-purple-400 underline hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-100"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "show less" : "show more"}
      </button>
    </Card>
  );
};

const ExperienceStack: FunctionComponent<{ stack: Stack }> = ({ stack }) => (
  <>
    {stack.map(({ name, icon, purpose }, i) =>
      icon ? (
        <Icon
          key={icon + i}
          icon={icon}
          role="img"
          aria-hidden={false}
          aria-label={purpose ? `${name}, ${purpose}` : name}
        />
      ) : (
        <span key={name} className="text-xs">
          {name}
          {purpose ? <span className="sr-only">, {purpose}</span> : null}
        </span>
      )
    )}
  </>
);
