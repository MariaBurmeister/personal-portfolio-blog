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

// const segment = useSelectedLayoutSegment();

export const SecondaryNav: FunctionComponent<{
  routes: NavRoute[];
  indexRoute: string;
}> = ({ routes, indexRoute }) => {
  const location = usePathname();
  const [activeRoute, setActiveRoute] = useState<NavRoute | undefined>();

  useEffect(() => {
    routes.forEach(({ path, label }) => {
      location === indexRoute + path && setActiveRoute({ path, label });
    });
  }, [location]);

  return (
    <nav className="flex flex-row items-center px-4 align-middle">
      <h3 className="pt-1 font-rubikMono text-lg leading-none">
        {activeRoute?.label}
      </h3>
      <ul className="flex grow flex-row justify-end gap-4">
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
        onClick={() => handleClick({ label, path })}
        href={`${indexRoute}${path}`}
      >
        {label}
      </Link>
    </li>
  );
};
