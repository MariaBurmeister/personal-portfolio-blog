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
      <body className="relative flex min-h-[100dvh] flex-col gap-8 bg-gradient-to-r from-green-200 to-purple-500 p-6 md:justify-center  md:px-16 lg:px-36">
        {children}
        <footer className="sticky bottom-1 shrink rounded-xl bg-white px-2 shadow-2xl">
          <MainNav />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
