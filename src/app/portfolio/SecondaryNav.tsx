"use client";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

type RoutePath = string;
type RouteName = string;
type Route = { path: RoutePath; label: RouteName };

export const SecondaryNav: FunctionComponent<{ routes: Route[] }> = ({
  routes,
}) => {
  const [currentRoute, setCurrentRoute] = useState<RouteName>("Experience");
  console.log(routes.filter(({ label }) => currentRoute));
  return (
    <nav>
      <h3>{currentRoute}</h3>
      <ul>
        {routes
          .filter(({ label }) => label !== currentRoute)
          .map(({ label, path }) => (
            <li>
              <Link onClick={() => setCurrentRoute(label)} href={`./${path}`}>
                {label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};
