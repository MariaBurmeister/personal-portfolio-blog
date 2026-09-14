import { FunctionComponent, ReactNode } from "react";
import { LinkButton } from "./LinkButton";

export interface ErrorStatusProps {
  statusCode: 404 | 500;
  title: string;
  description: string;
  /** `page` = full-viewport shell for Pages Router; `embedded` = card only inside App layout */
  variant?: "page" | "embedded";
  actions?: ReactNode;
}

export const ErrorStatus: FunctionComponent<ErrorStatusProps> = ({
  statusCode,
  title,
  description,
  variant = "page",
  actions,
}) => {
  const card = (
    <section
      aria-labelledby="error-title"
      className="w-full max-w-lg rounded-xl border border-purple-900 bg-gradient-to-b from-white to-purple-100 p-6 text-purple-900 shadow-2xl shadow-purple-200"
    >
      <p className="font-rubikMono text-sm tracking-wide text-purple-600">
        Error {statusCode}
      </p>
      <h1 id="error-title" className="mt-2 font-rubikMono text-2xl">
        {title}
      </h1>
      <p className="mt-3 font-baskervville text-base leading-relaxed text-purple-800">
        {description}
      </p>
      <nav
        aria-label="Error page navigation"
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        <LinkButton href="/" className="px-4 py-2 text-sm font-medium">
          Home
        </LinkButton>
        <LinkButton
          href="/portfolio"
          className="border-purple-700 bg-white px-4 py-2 text-sm font-medium"
        >
          Portfolio
        </LinkButton>
        <a
          href="mailto:mariaburmeister+work@proton.me"
          className="text-sm text-purple-700 underline hover:text-purple-900"
        >
          Contact me
        </a>
        {actions}
      </nav>
    </section>
  );

  if (variant === "embedded") {
    return <div className="flex w-full justify-center py-8">{card}</div>;
  }

  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-8 bg-gradient-to-r from-green-200 to-purple-500 p-6 md:px-16 lg:px-36">
      {card}
    </main>
  );
};
