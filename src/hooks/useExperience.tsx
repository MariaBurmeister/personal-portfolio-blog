"use client";
import useSWR from "swr";
import { Experiences, fetcher } from "@/pages/api/experience";

export const useExperience = () =>
  useSWR<Experiences, Error>("/api/experience", fetcher);
