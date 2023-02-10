import { NextApiRequest, NextApiResponse } from "next";
import { Fetcher } from "swr";

interface Project {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
}

export type ProjectsData = Project[];

export const fetcher: Fetcher<ProjectsData> = (url: string) =>
  fetch(url).then((res) => res.json());

export default function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData>
) {
  const username = process.env.GITHUB_USERNAME;
  const url = `https://api.github.com/users/${username}/repos`;
  return fetch(url, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((data) => data.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500);
    });
}
