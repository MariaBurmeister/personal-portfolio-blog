import { MainNav } from "@/components";
import { FunctionComponent, ReactNode } from "react";
import "./globals.css";

interface Layout {
  children: ReactNode;
}

const RootLayout: FunctionComponent<Layout> = ({ children }) => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plaster&family=Rubik+Mono+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative grid min-h-[100dvh] grid-cols-1 grid-rows-6 bg-gradient-to-r from-green-200 to-purple-500 p-6 md:px-16 md:pt-16 lg:px-36">
        {children}
        <footer className="sticky bottom-1 col-span-1 row-span-6 grow self-center rounded-xl bg-white py-0 px-2 shadow-2xl ring-white ring-offset-4 ring-offset-slate-300">
          <MainNav />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
