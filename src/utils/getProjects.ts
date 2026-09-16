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
] as const;

/** PoC: human titles for featured repos (slug still used for GitHub). */
const PROJECT_DISPLAY: Partial<
  Record<
    (typeof FEATURED_PROJECTS)[number],
    { name: string; description?: string }
  >
> = {
  "personal-portfolio-blog": {
    name: "This Portfolio",
    description:
      "Personal frontend portfolio — the site you’re looking at right now.",
  },
  "reQiew_code-test": { name: "reQiew" },
  "db_case-study": { name: "Deutsche Bahn Case Study" },
  "wo-was-denn-essen-wir-heute_code-test": { name: "Was essen wir heute?" },
  "codecademy_boss-machine-project": { name: "Boss Machine" },
  "codecademy_jamming-project": { name: "Jamming" },
  "codecademy_ravenous-project": { name: "Ravenous" },
};

export const getProjects = async (): Promise<Projects> => {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    throw new Error("GITHUB_USERNAME is not set");
  }

  const url = new URL(
    `https://api.github.com/users/${username}/repos?sort=created&direction=desc`,
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
    .filter((repo) =>
      (FEATURED_PROJECTS as readonly string[]).includes(repo.name),
    )
    .map(({ id, name, description, html_url, language }) => {
      const display =
        PROJECT_DISPLAY[name as (typeof FEATURED_PROJECTS)[number]];
      return {
        id,
        name: display?.name ?? name,
        description: display?.description ?? description,
        url: html_url,
        mainLanguage: language ?? "Unknown",
      };
    });
};
