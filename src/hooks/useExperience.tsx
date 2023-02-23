"use client";
import useSWR from "swr";
import { Experiences, Experience, fetcher } from "@/pages/api/experience";
import { useEffect, useState } from "react";

interface MappedExperience extends Omit<Experience, "startDate" | "endDate"> {
  startDate: string;
  endDate: string;
}

export type LocalizedExperiences = MappedExperience[];

export const useExperience = () => {
  const { data, isLoading, error } = useSWR<Experiences>(
    "/api/experience",
    fetcher
  );
  const [experiences, setExperiences] = useState<LocalizedExperiences>();
  useEffect(() => {
    if (!data) return;
    const localizedData = data.map((experience) => {
      return {
        ...experience,
        startDate: new Date(experience.startDate).toLocaleDateString(),
        endDate: new Date(experience.endDate).toLocaleDateString(),
      };
    });
    setExperiences(localizedData);
  }, [data]);

  return {
    data: experiences,
    isLoading,
    error,
  };
};
