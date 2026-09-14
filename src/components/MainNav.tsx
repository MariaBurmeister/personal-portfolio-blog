"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

const routes = [
  { path: "/portfolio", label: "Portfolio" },
  // { path: "/blog", label: "Blog" },
];

export const MainNav: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav className="rounded-s-[2rem] rounded-e-[1rem] bg-white shadow-2xl relative z-50 grid grid-cols-[1fr] items-center">
      <Link
        href="/"
        className="col-start-1 row-start-1 w-min self-center rounded-full bg-purple-100 px-2 py-3 font-rubikMono text-xl text-purple-600 ring-2 ring-purple-600 ring-offset-4"
        aria-label="Home - Maria Burmeister - Frontend Developer"
      >
         <span className="text-green-200">M</span>B
      </Link>
      <ul className="col-start-1 row-start-1 flex grow flex-row flex-wrap justify-center gap-8 mx-12 p-0 align-middle text-purple-300">
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
        className={`rounded px-2 py-1 hover:bg-purple-100 hover:text-purple-500 ${
          isActive ? "bg-purple-100 text-purple-600" : ""
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
