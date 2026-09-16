import { FunctionComponent, ReactNode } from "react";

interface Card {
  rounded?: "sm" | "md" | "lg" | "xl";
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  styleHeader?: string;
  title: string | ReactNode;
  styleTitle?: string;
  titleHelp?: string | ReactNode;
  styleTitleHelp?: string;
  hideTitle?: boolean;
  children: ReactNode;
  styleContent?: string;
  footer?: ReactNode;
  styleFooter?: string;
}

const roundedClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
} as const;

const shadowClasses = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
} as const;

export const Card: FunctionComponent<Card> = ({
  className,
  rounded,
  shadow = "lg",
  styleHeader,
  title,
  styleTitle,
  hideTitle,
  titleHelp,
  styleTitleHelp,
  children,
  styleContent,
  footer,
  styleFooter,
}) => {
  return (
    <article
      className={`relative ${rounded ? roundedClasses[rounded] : "rounded"} border border-purple-900 bg-gradient-to-b from-white to-purple-100 p-4 text-purple-900 dark:border-purple-700 dark:from-slate-900 dark:to-purple-950 dark:text-purple-100 ${shadowClasses[shadow]} shadow-purple-200 dark:shadow-purple-950/50 ${className} `}
    >
      <header
        className={`mb-2 flex max-w-full items-center justify-between gap-x-4 gap-y-2 ${styleHeader}`}
      >
        <h3 className={`${hideTitle ? "sr-only" : ""} font-bold ${styleTitle}`}>
          {title}
        </h3>
        {titleHelp && (
          <p className={`text-xs ${styleTitleHelp}`}>{titleHelp}</p>
        )}
      </header>
      <hr className="my-1" />
      <section className={`font-baskervville ${styleContent}`}>
        {children}
      </section>
      <hr className="my-1" />
      {footer && <footer className={`${styleFooter}`}>{footer}</footer>}
    </article>
  );
};
