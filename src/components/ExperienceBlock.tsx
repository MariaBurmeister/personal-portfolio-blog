"use client";

import { Card } from "@/components";
import { Stack } from "@/utils";
import { FunctionComponent, useState } from "react";
import { Icon } from "@iconify/react";

interface ExperienceBlockProps {
  title: string;
  level?: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  stack: Stack;
}

export const ExperienceBlock: FunctionComponent<ExperienceBlockProps> = ({
  title,
  level,
  company,
  startDate,
  endDate,
  description,
  stack,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      styleHeader="flex-wrap"
      styleTitle="flex flex-col gap-1 basis-auto"
      title={
        <>
          <span className="text-[0.65rem] font-semibold tracking-[0.16em] text-purple-500 uppercase dark:text-purple-300">
            {title}
            {level ? ` · ${level}` : null}
          </span>
          <span>{company}</span>
        </>
      }
      titleHelp={
        <>
          <span className="rounded-md bg-purple-200 px-2 py-1 text-xs text-nowrap dark:bg-purple-900 dark:text-purple-100">
            {startDate}
          </span>
          {" - "}
          <span className="rounded-md bg-purple-200 px-2 py-1 text-xs text-nowrap dark:bg-purple-900 dark:text-purple-100">
            {endDate}
          </span>
        </>
      }
      shadow="2xl"
      className="mx-6 max-w-[600px]"
      styleContent="relative"
      footer={<ExperienceStack stack={stack} />}
      styleFooter="flex flex-wrap items-center gap-3 pr-2 pt-1"
    >
      <article className="flex h-min flex-col gap-2 overflow-hidden px-2 pt-2 font-baskervville">
        {description.map((descriptionPart, i) =>
          i === 0 ? (
            <p
              className={expanded ? "line-clamp-none" : "line-clamp-2"}
              key={title + i}
            >
              {descriptionPart}
            </p>
          ) : (
            expanded && <p key={title + i}>{descriptionPart}</p>
          ),
        )}
      </article>
      <button
        type="button"
        className="px-2 py-1 font-standard text-xs text-purple-400 underline hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-100"
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
        <span key={icon + i} title={purpose ? `${name} - ${purpose}` : name}>
          <Icon
            icon={icon}
            className="text-lg"
            role="img"
            aria-hidden={false}
            aria-label={purpose ? `${name}, ${purpose}` : name}
          />
        </span>
      ) : (
        <span
          key={name}
          className="text-[0.65rem] font-semibold tracking-wide text-purple-500 uppercase dark:text-purple-300"
        >
          {name}
          {purpose ? <span className="sr-only">, {purpose}</span> : null}
        </span>
      ),
    )}
  </>
);
