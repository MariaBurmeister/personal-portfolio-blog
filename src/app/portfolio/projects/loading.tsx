import { Loader } from "@/components";
import { FunctionComponent } from "react";

const Loading: FunctionComponent = () => {
  return <Loader loadingText="Loading Projects from GitHub" />;
};

export default Loading;
