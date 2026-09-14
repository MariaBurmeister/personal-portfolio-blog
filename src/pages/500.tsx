import { ErrorStatus } from "@/components/ErrorStatus";

export default function Custom500() {
  return (
    <ErrorStatus
      statusCode={500}
      title="Something went wrong"
      description="A server error interrupted this request. Try again in a moment, or go back to the portfolio while I sort it out."
    />
  );
}
