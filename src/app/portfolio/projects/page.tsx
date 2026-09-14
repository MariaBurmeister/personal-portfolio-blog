import type { Metadata } from "next";
import { Project } from "@/components/Project";
import { getProjects } from "@/utils";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected GitHub projects by Maria Burmeister.",
};

export const dynamic = "force-dynamic";

const Projects = async () => {
  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <p className="px-4 py-6 font-baskervville text-purple-800">
        No featured projects were returned from GitHub right now.{" "}
        <a
          href="https://github.com/MariaBurmeister"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Browse them on GitHub
        </a>
        .
      </p>
    );
  }

  return (
    <ul
      className="grid items-start gap-4 px-4 py-1"
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      }}
    >
      {projects.map(({ id, name, description, url, mainLanguage }) => (
        <Project
          key={id}
          id={id}
          name={name}
          description={description}
          url={url}
          mainLanguage={mainLanguage}
        />
      ))}
    </ul>
  );
};

export default Projects;
