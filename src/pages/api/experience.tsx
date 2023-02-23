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

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  projects?: ProjectData[];
  stack: Stack;
}

export type Stack = Technology[];

export interface Technology {
  purpose: string;
  name: string;
  icon: string;
}

export type Experiences = Experience[];

export const fetcher: Fetcher<Experiences> = (url: string) =>
  fetch(url).then((res) => res.json());

export default function getProjects(
  req: NextApiRequest,
  res: NextApiResponse<Experiences>
) {
  res.status(200).json(experiences);
}

const experiences: Experiences = [
  {
    title: "Software Engineering Intern",
    company: "Claimsforce",
    location: "Hamburg, Germany",
    startDate: "02-01-2021",
    endDate: "07-31-2021",
    description: [
      `During my internship, I worked on a self-contained full-stack project called decision tree.
        It was a tool to build and answer questionnaires which led to different outcomes depending on previous answers.
        I built the entirety of the project from scratch in 6 months, under the mentorship of an experienced developer who later became my team lead.
      `,
      `At this opportunity, I was introduced to some architectural concepts such as Domain Driven Design, Clean Architecture and Event Sourcing.
        I got to use some company's stack, like React, Bootstrap, Node.js, and AWS, but also some unrelated tech like Firebase.
      `,
      `This was a valuable learning period, which led to a permanent Junior Engineering position at the same company.`,
    ],
    stack: [
      {
        purpose: "Frontend",
        name: "React",
        icon: "mdi:react",
      },
      {
        purpose: "Frontend",
        name: "Bootstrap",
        icon: "mdi:bootstrap",
      },
      {
        purpose: "Frontend & Backend",
        name: "JavaScript",
        icon: "mdi:language-javascript",
      },
      {
        purpose: "Backend",
        name: "Node.js",
        icon: "mdi:nodejs",
      },
      {
        purpose: "Database",
        name: "Graphql",
        icon: "mdi:graphql",
      },
      {
        purpose: "database",
        name: "Firebase",
        icon: "mdi:firebase",
      },
      {
        purpose: "CI/CD",
        name: "AWS",
        icon: "mdi:aws",
      },
      {
        purpose: "Deployment",
        name: "AWS",
        icon: "mdi:aws",
      },
      {
        purpose: "Testing",
        name: "Jest",
        icon: "",
      },
    ],
  },
  {
    title: "Junior Frontend Engineer",
    company: "Claimsforce",
    location: "Hamburg, Germany",
    startDate: "08-01-2021",
    endDate: "08-31-2022",
    description: [
      `As a Junior Frontend developer I worked in an multidisciplinary
        team developing features to a Digital Product in a fast-
        paced agile environment. I took part in every part of
        development process, from discovery to release to
        maintenance.`,
      `An active, eager and creative contributor, 
        I was also involved in the technical and conceptual discussions about the product and its features,
        as well as the design of some of the features for which I was responsible.`,
      `Ocasionally, I have also contributed to the backend of the platform, which is built with Node.js and TypeScript.`,
    ],
    projects: [],
    stack: [
      {
        purpose: "Frontend",
        name: "React",
        icon: "mdi:react",
      },
      {
        purpose: "Frontend & Backend",
        name: "TypeScript",
        icon: "mdi:language-typescript",
      },
      {
        purpose: "Backend",
        name: "Node.js",
        icon: "mdi:nodejs",
      },
      {
        purpose: "Database",
        name: "Graphql",
        icon: "mdi:graphql",
      },
      {
        purpose: "CI/CD",
        name: "AWS",
        icon: "mdi:aws",
      },
      {
        purpose: "Testing",
        name: "Jest",
        icon: "",
      },
      {
        purpose: "E2E Testing",
        name: "Cypress",
        icon: "",
      },
      {
        purpose: "Design",
        name: "Figma",
        icon: "ph:figma-logo",
      },
      {
        purpose: "Project Management",
        name: "Jira",
        icon: "mdi:jira",
      },
      {
        purpose: "Communication",
        name: "Slack",
        icon: "mdi:slack",
      },
      {
        purpose: "Colaboration",
        name: "Miro",
        icon: "",
      },
      {
        purpose: "Management Framework",
        name: "Scrum",
        icon: "",
      },
    ],
  },
];
