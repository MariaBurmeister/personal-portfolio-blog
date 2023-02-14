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
    className={`
        rounded-full
        border
        border-purple-900
        bg-purple-100
        px-2
        py-1
        shadow-sm
        shadow-green-400
        hover:shadow-md
        hover:shadow-green-400
        ${className}
      `}
    {...rest}
  >
    {children}
  </a>
);
