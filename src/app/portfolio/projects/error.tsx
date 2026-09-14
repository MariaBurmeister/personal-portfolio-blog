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
    <div className="flex h-full flex-col items-start justify-center gap-3 px-4">
      <h2 className="font-rubikMono text-lg">Something went wrong</h2>
      <p className="text-sm">
        An error occurred while loading projects from GitHub.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-purple-900 bg-purple-100 px-3 py-1 text-sm shadow-sm shadow-green-400 hover:shadow-md"
      >
        Try again
      </button>
      <a
        href="https://github.com/MariaBurmeister"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-purple-600 underline"
      >
        Or view projects on GitHub
      </a>
    </div>
  );
};

export default Error;
