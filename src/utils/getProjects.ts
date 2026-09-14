import { getData } from "./getData";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
}

export interface Project {
  id: number;
  name: string;
  description: string | null;
  url: string;
  mainLanguage: string;
}

export type Projects = Project[];

const FEATURED_PROJECTS = [
  "personal-portfolio-blog",
  "reQiew_code-test",
  "db_case-study",
  "wo-was-denn-essen-wir-heute_code-test",
  "codecademy_boss-machine-project",
  "codecademy_jamming-project",
  "codecademy_ravenous-project",
];

export const getProjects = async (): Promise<Projects> => {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    throw new Error("GITHUB_USERNAME is not set");
  }

  const url = new URL(
    `https://api.github.com/users/${username}/repos?sort=created&direction=desc`
  );

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const repos = await getData<GitHubRepo[]>(url, {
    headers,
    next: { revalidate: 3600 },
  });

  return repos
    .filter((repo) => FEATURED_PROJECTS.includes(repo.name))
    .map(({ id, name, description, html_url, language }) => ({
      id,
      name,
      description,
      url: html_url,
      mainLanguage: language ?? "Unknown",
    }));
};
