import { FunctionComponent } from "react";
import "./Loader.scss";

type HorizontalAlign = "center" | "left" | "right";
type SizeVariant = "sm" | "md" | "lg" | "xl" | "" | "full";

export const Loader: FunctionComponent<{
  loadingText?: string;
  horizontalAlign?: HorizontalAlign;
  width?: SizeVariant;
}> = ({ loadingText, horizontalAlign = "center", width }) => {
  return (
    <div
      className={`flex h-full w-full flex-grow flex-col ${horizontalAlign} self-center`}
    >
      <span
        className={`mb-1.5 inline-block h-4 w-full rounded-full border border-purple-700 bg-purple-200 shadow-sm shadow-emerald-400`}
        style={{
          backgroundImage:
            "linear-gradient(45deg,rebeccapurple 25%,transparent 25%,transparent 50%,rebeccapurple 50%,rebeccapurple 75%,transparent 75%,transparent)",
          backgroundSize: "1em 1em",
          animation: "barStripe 0.5s linear infinite",
        }}
      ></span>
      {loadingText && (
        <aside className={`text-${horizontalAlign} text-xs`}>
          {loadingText}
        </aside>
      )}
    </div>
  );
};
