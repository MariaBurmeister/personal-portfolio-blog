"use client";
import Link, { LinkProps } from "next/link";
import { FunctionComponent } from "react";

const routes = [
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blog", label: "Blog" },
];

export const MainNav: FunctionComponent = () => {
  return (
    <nav className="relative z-50 -ml-3 -mr-2 flex flex-row flex-wrap justify-between align-middle">
      <Link
        href="/"
        className="self-center rounded-full bg-purple-100 px-2 py-3 font-rubikMono text-xl text-purple-600 ring-2 ring-purple-600 ring-offset-4"
      >
        <span className=" text-green-200">M</span>B
      </Link>
      <ul className="my-2 ml-4 flex grow flex-row flex-wrap justify-center gap-8 p-0 align-middle text-purple-300">
        {routes.map(({ path, label }) => (
          <MainNavItem key={path} label={label} href={path} />
        ))}
      </ul>
      {/*todo: dark-theme & toggle */}
      <input className="my-4 ml-4 mr-4" type="checkbox" />
    </nav>
  );
};

type RoutePath = string;
type RouteName = string;
export interface NavRoute {
  path: RoutePath;
  label: RouteName;
}

// todo: active route state ? see if use client is worth it
interface NavItem extends LinkProps {
  label: RouteName;
  href: RoutePath;
  // isActive?: boolean;
  // handleClick?: ({ label, path }: NavRoute) => void;
}

const MainNavItem: FunctionComponent<NavItem> = ({ label, href, ...rest }) => {
  return (
    <li key={href} className="-ml-4 self-center py-2">
      <Link
        className={`rounded-md px-2 py-1 hover:bg-purple-100 hover:text-purple-500`}
        href={href}
        {...rest}
      >
        {label}
      </Link>
    </li>
  );
};
