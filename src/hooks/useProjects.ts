"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";

const projects = [
  "personal-portfolio-blog",
  "reQiew_code-test",
  "db_case-study",
  "wo-was-denn-essen-wir-heute_code-test",
  "codecademy_boss-machine-project",
  "codecademy_jamming-project",
  "codecademy_ravenous-project",
];

export const useProjects = () => {
  const { data, error, isLoading, isValidating } = useSWR<Projects, Error>(
    "/api/projects",
    fetcher,
    { suspense: true, fallbackData: [] }
  );
  const [filteredData, setFilteredData] = useState<Projects>();

  useEffect(() => {
    if (!data) return;

    const filteredData = data.filter((project) =>
      projects.includes(project.name)
    );
    setFilteredData(filteredData);
  }, [data]);

  return { data: filteredData, error, isLoading, isValidating };
};
