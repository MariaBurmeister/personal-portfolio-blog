"use client";
import Link from "next/link";
import { FunctionComponent } from "react";

export const MainNav: FunctionComponent = () => {
  return (
    <nav className="-ml-3 -mr-2 flex flex-row flex-wrap justify-between align-middle">
      <Link
        href="/"
        className="self-center rounded-full bg-purple-100 px-2 py-3 font-rubikMono text-xl text-purple-600 ring-2 ring-purple-600 ring-offset-4"
      >
        <span className=" text-green-200">M</span>B
      </Link>
      <ul className="my-2 ml-4 flex grow flex-row flex-wrap justify-center gap-4 p-0 align-middle text-purple-300">
        <li className="self-center py-2">
          <Link className="active:text-green-500" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="self-center py-2">
          <Link className="active:text-green-500" href="blog">
            Blog
          </Link>
        </li>
      </ul>
      {/* dark-theme */}
      <input className="my-4 ml-4 mr-4" type="checkbox" />
    </nav>
  );
};
