import { FunctionComponent, ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

const ProjectsLayout: FunctionComponent<Layout> = ({ children }) => {
  return (
    <>
      <h2 className="sr-only">Projects</h2>
      {children}
    </>
  );
};

export default ProjectsLayout;
