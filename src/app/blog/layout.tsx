import { PageLayout } from "@/components/layout/PageLayout";
import { Panel } from "@/components/layout/Panel";
import { FunctionComponent, ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

const BlogLayout: FunctionComponent<Layout> = ({ children }) => {
  return (
    <PageLayout variant="content-side">
      <h1 className="sr-only">Maria Burmeister | Blog</h1>
      <Panel as="section" id="main-content" variant="inline-start">
        {children}
      </Panel>
      <Panel as="nav" variant="inline-end" aria-label="Blog navigation">
        <ul>
          <li>Writing</li>
        </ul>
      </Panel>
    </PageLayout>
  );
};

export default BlogLayout;
