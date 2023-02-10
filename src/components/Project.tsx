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
  const [expanded, setExpanded] = useState(false);
  return (
    <Card
      title={name}
      titleHelp={language}
      label={name}
      footer={<ProjectActions gitHubLink={url} />}
      styleContent="relative flex flex-col justify-between min-h-[4.5rem] "
      styleFooter="flex justify-between items-center pr-2 pt-1"
    >
      <p className={`line-clamp-2 ${expanded ? "line-clamp-none" : ""}`}>
        {description ?? name}
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

const ProjectActions: FunctionComponent<{ gitHubLink: string }> = ({
  gitHubLink,
}) => {
  return (
    <>
      <a
        href=""
        className="rounded-full border  border-purple-900 bg-purple-100 px-2 py-1 shadow-sm shadow-green-400 hover:shadow-md hover:shadow-green-400"
      >
        Expand
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
