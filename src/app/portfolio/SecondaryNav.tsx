"use client";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

import { FunctionComponent, useEffect, useState } from "react";

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
  const location = usePathname();
  const [activeRoute, setActiveRoute] = useState<NavRoute | undefined>();

  // todo: useSelectedLayoutSegment instead of usePathname
  // const segment = useSelectedLayoutSegment();

  useEffect(() => {
    routes.forEach(({ path, label }) => {
      location === indexRoute + path && setActiveRoute({ path, label });
    });
  }, [location]);

  return (
    <nav className="flex flex-row flex-wrap items-center gap-4 align-middle md:px-4">
      <h3 className="overflow-hidden text-ellipsis pt-1 font-rubikMono text-lg leading-none text-purple-600">
        {activeRoute?.label}
      </h3>
      <ul className="flex grow flex-row flex-wrap justify-end gap-4 text-purple-400 ">
        {routes
          .filter(({ label }) => label !== activeRoute?.label)
          .map(({ label, path }) => (
            <SecondaryNavItem
              key={path}
              label={label}
              path={path}
              indexRoute={indexRoute}
              handleClick={setActiveRoute}
            />
          ))}
      </ul>
    </nav>
  );
};

interface SecondaryNavItem {
  label: RouteName;
  path: RoutePath;
  indexRoute: string;
  handleClick: ({ label, path }: NavRoute) => void;
}

const SecondaryNavItem: FunctionComponent<SecondaryNavItem> = ({
  label,
  path,
  indexRoute,
  handleClick,
}) => {
  return (
    <li key={path}>
      <Link
        className="rounded-md px-2 py-1 hover:bg-green-100"
        onClick={() => handleClick({ label, path })}
        href={`${indexRoute}${path}`}
      >
        {label}
      </Link>
    </li>
  );
};
