"use client";
import useSWR from "swr";
import { ProjectsData, fetcher } from "@/pages/api/projects";

export const useProjects = () => {
  const { data, error, isLoading, isValidating } = useSWR<ProjectsData, Error>(
    "/api/projects",
    fetcher,
    { suspense: true, fallbackData: [] }
  );

  return { data, error, isLoading, isValidating };
};
