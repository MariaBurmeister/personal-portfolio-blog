import { FunctionComponent, ReactNode } from "react";

type Variant = "side-content" | "content-side" | "content";

const pageLayoutVariant: Record<Variant, string> = {
  "side-content": "flex flex-wrap items-stretch gap-8 md:flex-nowrap",
  "content-side": "flex flex-wrap items-stretch gap-8 md:flex-nowrap",
  content: "flex flex-wrap items-stretch gap-8 md:flex-nowrap",
};

interface PageLayoutOwnProps {
  children: ReactNode;
  variant: Variant;
  className?: string;
}

export const PageLayout = ({
  variant = "side-content",
  children,
  className,
  ...props
}: PageLayoutOwnProps) => {
  return (
    <main
      id="content"
      className={`${pageLayoutVariant[variant]} ${className}`}
      {...props}
    >
      {children}
    </main>
  );
};
