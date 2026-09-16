import { FunctionComponent } from "react";

export const Loader: FunctionComponent<{
  loadingText?: string;
}> = ({ loadingText = "Loading" }) => {
  return (
    <div
      role="status"
      className="flex h-full min-h-[12rem] w-full flex-col items-center justify-center gap-5 px-4"
    >
      <span className="relative grid h-16 w-16 place-items-center">
        <svg
          className="absolute inset-0 motion-safe:animate-spin motion-reduce:animate-none"
          viewBox="0 0 64 64"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="32"
            cy="32"
            r="26"
            className="stroke-purple-200 dark:stroke-purple-800"
            strokeWidth="2.5"
          />
          <circle
            cx="32"
            cy="32"
            r="26"
            className="stroke-purple-600 dark:stroke-green-300"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="32 130"
          />
        </svg>
        <span className="font-rubikMono text-sm text-purple-600 dark:text-purple-200">
          <span className="text-green-200 dark:text-green-300">M</span>B
        </span>
      </span>
      <p className="text-center font-baskervville text-sm tracking-wide text-purple-500 dark:text-purple-300">
        {loadingText}
      </p>
    </div>
  );
};
