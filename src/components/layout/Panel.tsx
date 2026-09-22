import { ReactElement, ReactNode } from "react";
import { Base, BaseProps, PolymorphicProps } from "../PolymorphicComponent";

type PanelElement =
  "header" | "section" | "aside" | "main" | "article" | "footer";

type Variant = "inline-start" | "inline-end";

const panelVariant: Record<Variant, string> = {
  "inline-start": "pane-inline-start",
  "inline-end": "pane-inline-end",
};

interface PanelOwnProps {
  variant?: Variant;
  className?: string;
}

const panelLayoutStyles: Record<Variant, string> = {
  "inline-start": "grow md:w-80 md:min-w-80 md:shrink-0 md:grow-0",
  "inline-end":
    "h-[min(70dvh,36rem)] max-h-[calc(100dvh-8rem)] min-h-[min(28rem,calc(100dvh-8rem))] min-w-0 grow overflow-hidden rounded-xl bg-linear-to-b from-white to-purple-100 px-4 shadow-2xl dark:from-slate-900 dark:to-purple-950",
};

export const Panel = ({
  variant = "inline-start",
  className,
  as = "section",
  ...props
}: BaseProps<PanelElement> & PanelOwnProps) => {
  return (
    <Base
      as={as}
      {...props}
      className={`${panelVariant[variant]} ${className}`}
    />
  );
};

///

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingSize = "sm" | "md" | "lg";
type HeadingOwnProps = {
  size?: HeadingSize;
};

export function Heading({
  as = "h2",
  size = "md",
  className,
  ...props
}: BaseProps<HeadingElement, HeadingOwnProps>) {
  const sizeStyles: Record<HeadingSize, string> = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  };
  return (
    <Base as={as} {...props} className={`${sizeStyles[size]} ${className}`} />
  );
}
