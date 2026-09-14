import { Project } from "@/components/Project";
import { getProjects } from "@/utils";

export const dynamic = "force-dynamic";

const Projects = async () => {
  const projects = await getProjects();

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
