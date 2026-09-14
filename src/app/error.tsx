"use client";

import { ErrorStatus } from "@/components/ErrorStatus";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorStatus
      variant="embedded"
      statusCode={500}
      title="Something went wrong"
      description="A server error interrupted this request. Try again in a moment, or go back to the portfolio while I sort it out."
      actions={
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full border border-purple-900 bg-purple-100 px-3 py-1 text-sm shadow-sm shadow-green-400 hover:shadow-md"
        >
          Try again
        </button>
      }
    />
  );
}
