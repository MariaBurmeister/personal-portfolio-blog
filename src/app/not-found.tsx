import { ErrorStatus } from "@/components/ErrorStatus";

export default function NotFound() {
  return (
    <ErrorStatus
      variant="embedded"
      statusCode={404}
      title="Page not found"
      description="That page doesn't exist or may have moved. Head home or open the portfolio to keep browsing."
    />
  );
}
