import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  ReactNode,
} from "react";

interface LinkButton extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export const LinkButton: FunctionComponent<LinkButton> = ({
  children,
  href,
  className,
  ...rest
}) => (
  <a
    href={href}
    className={`rounded-full border border-purple-900 bg-purple-100 px-2 py-1 shadow-xs shadow-green-400 hover:shadow-md hover:shadow-green-400 dark:border-purple-400 dark:bg-purple-900 dark:text-purple-100 dark:shadow-green-700 ${className} `}
    {...rest}
  >
    {children}
  </a>
);
