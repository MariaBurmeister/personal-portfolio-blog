import { Card } from "@/components/Card";
import { FunctionComponent, useState } from "react";

const Experience: FunctionComponent = () => {
  return (
    <ul className="grid items-start gap-24 py-24">
      {mockExperience.map(({}) => (
        <ExperienceBlock />
      ))}
    </ul>
  );
};

export default Experience;

const mockExperience = Array.from({ length: 10 }, (_, i) => ({}));

interface ExperienceBlock {}

export const ExperienceBlock: FunctionComponent<ExperienceBlock> = ({}) => {
  // const [expanded, setExpanded] = useState(false);
  return (
    <Card
      title=""
      label=""
      // footer={}
      styleContent="relative"
      styleFooter="flex justify-between items-center pr-2 pt-1"
    >
      {/* <p className={`line-clamp-2 ${expanded ? "line-clamp-none" : ""}`}>{}</p> */}
      {/* <button
        id="expand"
        className="peer absolute top-0 left-0 h-full w-full opacity-0 "
        onClick={() => setExpanded(!expanded)}
      /> */}
      <label
        htmlFor="expand"
        className="text-xs text-purple-400 underline peer-hover:text-purple-600"
      >
        {/* {expanded ? "show less" : "show more"} */}
      </label>
    </Card>
  );
};
