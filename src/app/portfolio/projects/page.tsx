"use client";
import { Project } from "@/components/Project";
import { useProjects } from "@/hooks/useProjects";
import { FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
  const { data, error, isLoading } = useProjects();
  return (
    <>
      <h2 className="sr-only">Projects</h2>
      <ul
        className="grid items-start gap-4 px-4 py-1"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {isLoading && (
          <p className="text-2xs absolute left-4 bottom-0 z-10">loading...</p>
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
      </ul>
    </>
  );
};

export default Projects;
