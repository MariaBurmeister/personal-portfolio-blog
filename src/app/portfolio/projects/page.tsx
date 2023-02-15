"use client";
import { Project } from "@/components/Project";
import { useProjects } from "@/hooks/useProjects";
import { FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
  const { data, error, isLoading } = useProjects();
  return (
    <ul
      className="grid items-start gap-4 px-4"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
    >
      {isLoading && (
        <p className="text-2xs absolute left-4 bottom-0">loading...</p>
      )}
      {error && <p>Error: {error.message + " " + error.cause}</p>}
      {data &&
        data.map(({ id, name, description, url, language }) => (
          <Project
            key={id}
            id={id}
            name={name}
            description={description}
            url={url}
            language={language}
          />
        ))}
      {/* {mockProjects.map(({ id, name, description, html_url, language }) => (
        <Project
          id={id}
          name={name}
          description={description}
          html_url={html_url}
          language={[language]}
        />
      ))} */}
    </ul>
  );
};

export default Projects;

const mockProjects = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  name: `Project ${i}`,
  description: `This is a long long long long long long long long long long long long long  description for project ${i}`,
  html_url: "",
  language: "TypeScript",
}));
