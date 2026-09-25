import { cClass } from "@/utils/composeClass";
import { ReactNode } from "react";

type Variant = "side-content" | "content-side" | "content";

const pageLayoutBaseStyles = "page group/page";

const pageLayoutVariant: Record<Variant, string> = {
  "side-content": "flex flex-wrap items-stretch gap-8 md:flex-nowrap",
  "content-side": "flex flex-wrap items-stretch gap-8 md:flex-nowrap",
  content: "my-auto flex flex-col items-center gap-6 self-center md:my-0",
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
      {...props}
      className={cClass(
        variant,
        pageLayoutBaseStyles,
        pageLayoutVariant[variant],
        className,
      )}
    >
      {children}
    </main>
  );
};
