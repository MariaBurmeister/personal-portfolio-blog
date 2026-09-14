"use client";
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
  const activeRoute =
    routes.find(({ path }) => pathname === `${indexRoute}${path}`) ?? routes[0];

  return (
    <nav className="flex flex-row flex-wrap items-center gap-4 align-middle md:px-4">
      <h3 className="overflow-hidden text-ellipsis pt-1 font-rubikMono text-lg leading-none text-purple-600">
        {activeRoute?.label}
      </h3>
      <ul className="flex grow flex-row flex-wrap justify-end gap-4 text-purple-400">
        {routes
          .filter(({ label }) => label !== activeRoute?.label)
          .map(({ label, path }) => (
            <li key={path}>
              <Link
                className="rounded-md px-2 py-1 hover:bg-green-100"
                href={`${indexRoute}${path}`}
              >
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
