import { FunctionComponent, ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

const BlogLayout: FunctionComponent<Layout> = ({ children }) => {
  return (
    <main className="row-span-5 grid grid-cols-1 items-stretch justify-center gap-8 rounded-xl md:col-span-12 md:row-start-1 md:grid-cols-12 ">
      <section className="rounded-xl bg-white shadow-2xl md:col-span-9">
        {children}
      </section>
      <section className="col-span-1 rounded-xl bg-white shadow-2xl md:col-span-3" />
    </main>
  );
};

export default BlogLayout;
