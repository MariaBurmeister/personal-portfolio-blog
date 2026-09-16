"use client";
import { LinkButton } from "@/components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

type RoutePath = string;
type RouteName = string;
export interface NavRoute {
  path: RoutePath;
  label: RouteName;
}

export const SecondaryNav: FunctionComponent<{
  routes: NavRoute[];
  indexRoute: string;
}> = ({ routes, indexRoute }) => {
  const pathname = usePathname();
  const activePath =
    routes.find(({ path }) => pathname === `${indexRoute}${path}`)?.path ??
    routes[0]?.path;

  return (
    <nav
      id="secondary-nav"
      aria-label="Portfolio sections"
      className="flex flex-row flex-wrap items-center gap-4 align-middle md:px-4"
    >
      <LinkButton
        href="#main-content"
        className="sr-only focus:not-sr-only focus:px-2"
      >
        Skip to main content
      </LinkButton>
      <ul className="flex grow flex-row flex-wrap items-center justify-between gap-4 text-purple-400 dark:text-purple-300">
        {routes.map(({ label, path }) => {
          const isActive = path === activePath;

          return (
            <li
              key={path}
              className={isActive ? "order-first mr-auto" : undefined}
            >
              <Link
                className={
                  isActive
                    ? "pt-1 font-rubikMono text-lg leading-none text-purple-600 dark:text-purple-200"
                    : "rounded-md px-2 py-1 hover:bg-green-100 dark:hover:bg-purple-900"
                }
                href={`${indexRoute}${path}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
