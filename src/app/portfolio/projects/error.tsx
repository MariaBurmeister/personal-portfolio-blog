"use client";
import { FunctionComponent, useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: FunctionComponent<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-full flex-col items-start justify-center gap-3 px-4 text-purple-900 dark:text-purple-100">
      <h2 className="font-rubikMono text-lg">Couldn’t load projects</h2>
      <p className="font-baskervville text-sm text-purple-800 dark:text-purple-200">
        Fetching featured repos from GitHub failed. Check your connection and
        try again.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-purple-900 bg-purple-100 px-3 py-1 text-sm shadow-xs shadow-green-400 hover:shadow-md dark:border-purple-400 dark:bg-purple-900 dark:text-purple-100 dark:shadow-green-700"
      >
        Try again
      </button>
      <a
        href="https://github.com/MariaBurmeister"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-purple-600 underline dark:text-purple-300"
      >
        Or view projects on GitHub
      </a>
    </div>
  );
};

export default Error;
