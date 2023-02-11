import { FunctionComponent, useState } from "react";
import { Card } from "./Card";
import { BsGithub as GitHub } from "react-icons/bs";

interface Project {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string;
}

export const Project: FunctionComponent<Project> = ({
  name,
  description,
  url,
  language,
}) => {
  return (
    <Card
      title={name}
      titleHelp={language}
      label={name}
      footer={<ProjectActions gitHubLink={url} />}
      styleContent="relative  text-purple-400 p-2 rounded rounded-md min-h-[4rem] "
      styleFooter="flex justify-between items-center pr-2 pt-1"
    >
      <p className="line-clamp-2 hover:line-clamp-none">
        {description ?? name}
      </p>
    </Card>
  );
};

const ProjectActions: FunctionComponent<{ gitHubLink: string }> = ({
  gitHubLink,
}) => {
  return (
    <>
      <a
        href=""
        className="rounded-full border  border-purple-900 bg-purple-100 px-2 py-1 shadow-sm shadow-green-400 hover:shadow-md hover:shadow-green-400"
      >
        Open
      </a>

      <a href={gitHubLink} className="group flex items-center gap-2 text-2xl">
        <span className="text-sm text-purple-400 underline opacity-0 group-hover:opacity-100">
          check in GitHub
        </span>
        <GitHub />
      </a>
    </>
  );
};
