import { NextApiRequest, NextApiResponse } from "next";
import { Fetcher } from "swr";

interface ProjectData {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  language: string;
}

interface Project {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string;
}

type ProjectsData = ProjectData[];

export type Projects = Project[];

export const fetcher: Fetcher<Projects> = (url: string) =>
  fetch(url).then((res) => res.json());

export default function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData>
) {
  const username = process.env.GITHUB_USERNAME;
  const bearer = process.env.GITHUB_TOKEN;
  const url = `https://api.github.com/users/${username}/repos?sort=created&direction=desc`;
  return fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${bearer}`,
    },
  })
    .then((data) => {
      if (data.status === 200) {
        return data.json();
      }
      console.log("failed");
      res.status(data.status || 500).end(data.statusText);
    })
    .then((data) => {
      const projects = data.map(
        ({ id, name, description, html_url, language }: ProjectData) => ({
          id,
          name,
          description: description ?? null,
          url: html_url,
          language: language,
        })
      );
      res.status(200).json(projects);
    })
    .catch(({ message, status }) => {
      console.error(message, status);
      res.status(status || 500).end(message);
    });
}
