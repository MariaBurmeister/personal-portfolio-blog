"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LinkButton } from "./LinkButton";

const routes = [
  { path: "/portfolio", label: "Portfolio" },
  // { path: "/blog", label: "Blog" },
];

export const MainNav: FunctionComponent = () => {
  const pathname = usePathname();
  const onPortfolio = !!pathname?.startsWith("/portfolio");

  return (
    <nav className="relative z-50 grid grid-cols-[auto_1fr_auto] grid-rows-[auto] items-center gap-4 rounded-s-[2rem] rounded-e-[2rem] bg-white shadow-2xl dark:bg-slate-900 dark:shadow-purple-950/40">
      <Link
        href="/"
        className="col-start-1 col-end-2 row-start-1 row-end-2 w-min self-center rounded-full bg-purple-100 px-2 py-3 font-rubikMono text-xl text-purple-600 ring-2 ring-purple-600 ring-offset-4 dark:bg-purple-950 dark:text-purple-200 dark:ring-purple-300 dark:ring-offset-slate-900"
        aria-label="Home - Maria Burmeister - Frontend Developer"
      >
        <span className="text-green-200 dark:text-green-300">M</span>B
      </Link>
      <LinkButton href="#content"className="sr-only col-start-2 row-start-1 row-end-2 w-min justify-self-start focus:not-sr-only focus:px-2">Skip to content</LinkButton>
      {onPortfolio && 
      (<LinkButton  href="#secondary-nav"  className="sr-only col-start-2 row-start-1 row-end-2 w-min justify-self-start focus:not-sr-only focus:px-2">Skip to secondary navigation</LinkButton>
      )}
      <ul className="col-start-2 col-end-3 row-start-1 row-end-2 mx-4 flex grow flex-row flex-wrap justify-center gap-8 p-0 align-middle text-purple-300 md:mx-12">
        {routes.map(({ path, label }) => (
          <MainNavItem
            key={path}
            label={label}
            href={path}
            isActive={
              !!pathname &&
              (pathname === path || pathname.startsWith(`${path}/`))
            }
          />
        ))}
      </ul>
      <ThemeToggle className="me-2 col-start-3 col-end-4 row-start-1 row-end-2" />
    </nav>
  );
};

type RoutePath = string;
type RouteName = string;

interface NavItem extends LinkProps {
  label: RouteName;
  href: RoutePath;
  isActive?: boolean;
}

const MainNavItem: FunctionComponent<NavItem> = ({
  label,
  href,
  isActive,
  ...rest
}) => {
  return (
    <li className="py-2">
      <Link
        className={`rounded px-2 py-1 hover:bg-purple-100 hover:text-purple-500 dark:hover:bg-purple-900 dark:hover:text-purple-200 ${
          isActive
            ? "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200"
            : ""
        }`}
        href={href}
        aria-current={isActive ? "page" : undefined}
        {...rest}
      >
        {label}
      </Link>
    </li>
  );
};
