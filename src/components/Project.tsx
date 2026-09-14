import { FunctionComponent } from "react";
import { Card } from "./Card";
import { BsGithub as GitHub } from "react-icons/bs";

interface Project {
  id: number;
  name: string;
  description: string | null;
  url: string;
  mainLanguage: string;
}

export const Project: FunctionComponent<Project> = ({
  name,
  description,
  url,
  mainLanguage,
}) => {
  return (
    <Card
      title={name}
      titleHelp={mainLanguage}
      styleContent="text-purple-400 p-2 rounded rounded-md min-h-[4rem]"
      footer={<ProjectActions gitHubLink={url} projectName={name} />}
      styleFooter="flex flex-wrap justify-between items-center pr-2 pt-1 md:flex-nowrap"
    >
      <p className="line-clamp-2 hover:line-clamp-none">
        {description ?? name}
      </p>
    </Card>
  );
};

const ProjectActions: FunctionComponent<{ gitHubLink: string, projectName: string }> = ({
  gitHubLink,
  projectName,
}) => {
  return (
    <a
      href={gitHubLink}
      target="_blank"
      rel="noreferrer"
      className="group flex grow items-center justify-end gap-2 text-2xl"
      aria-label={`View ${projectName} on GitHub`}
    >
      <span className="text-sm text-purple-400 underline opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all">
        check on GitHub
      </span>
      <GitHub />
    </a>
  );
};
