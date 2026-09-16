export interface Experience {
  title: string;
  /** Small-caps progression line, e.g. "Junior → Mid-level". */
  level?: string;
  company: string;
  location: string;
  /** ISO date (YYYY-MM-DD). */
  startDate: string;
  /** ISO date (YYYY-MM-DD); omit for a current role ("Present"). */
  endDate?: string;
  /** First paragraph is the collapsed summary; the rest show on "show more". */
  description: string[];
  stack: Stack;
}

export type Stack = Technology[];

export interface Technology {
  purpose: string;
  name: string;
  /** Iconify icon id, or empty string to render the name as text. */
  icon: string;
}

export type Experiences = Experience[];

/** Newest first. */
const experiences: Experiences = [
  {
    title: "Frontend Developer",
    level: "Junior → Mid-level",
    company: "Craftboxx GmbH",
    location: "Hamburg, Germany",
    startDate: "2023-05-01",
    description: [
      `First frontend-focused developer at Craftboxx, where I grew from junior to mid-level while establishing frontend practices and conventions across multiple projects.`,
      `Owned the technical migration of a large PHP/Laravel + Blade + Vanilla JS application to Inertia.js, Vue 3 and TypeScript: researched and evaluated architectural alternatives, presented them to the team so we could decide together, then designed the foundations - build infrastructure, Laravel/Inertia integration, controller conventions, modal/offcanvas page flows, navigation history and redirects.`,
      `Established conventions for the migrated codebase focused on maintainability, developer experience and consistent interfaces, and began incremental page implementation while keeping the existing application running alongside.`,
      `Led a Bootstrap 4 → 5 migration together with a comprehensive visual redesign, extending Bootstrap beyond its standard theming while staying compatible with the existing application.`,
      `Introduced Vitest as the frontend testing framework where no automated frontend tests existed before, and PostHog for product analytics - advocating for metrics to validate assumptions, evaluate features and inform product decisions.`,
      `Promoted semantic HTML and accessibility, and helped improve how the team works: feature discovery, defining metrics and a definition of done, project retros and frontend knowledge-sharing sessions.`,
    ],
    stack: [
      { purpose: "Frontend framework", name: "Vue 3", icon: "mdi:vuejs" },
      {
        purpose: "Frontend framework",
        name: "Inertia.js",
        icon: "simple-icons:inertia",
      },
      {
        purpose: "Language",
        name: "TypeScript",
        icon: "mdi:language-typescript",
      },
      { purpose: "Backend framework", name: "Laravel", icon: "mdi:laravel" },
      { purpose: "Styling", name: "Bootstrap", icon: "mdi:bootstrap" },
      { purpose: "Styling", name: "Sass", icon: "mdi:sass" },
      { purpose: "Testing", name: "Vitest", icon: "simple-icons:vitest" },
      {
        purpose: "Product analytics",
        name: "PostHog",
        icon: "simple-icons:posthog",
      },
      { purpose: "Version control", name: "GitLab", icon: "mdi:gitlab" },
    ],
  },
  {
    title: "Frontend Developer",
    level: "Intern → Junior",
    company: "Claimsforce",
    location: "Hamburg, Germany",
    startDate: "2021-02-01",
    endDate: "2022-08-31",
    description: [
      `Joined as a Software Development Intern and progressed to Junior Frontend Developer in a highly collaborative, multidisciplinary agile team.`,
      `Owned frontend features along their whole lifecycle - from discovery and implementation through release and maintenance — working closely with product, design and engineering.`,
      `Became one of the main contributors to the company's design system component library, used across the platform.`,
      `During the internship I built a self-contained full-stack "decision tree" tool from scratch under the mentorship of a senior developer, and was introduced to Domain-Driven Design, Clean Architecture and Event Sourcing along the way.`,
    ],
    stack: [
      { purpose: "Frontend framework", name: "React", icon: "mdi:react" },
      {
        purpose: "Language",
        name: "TypeScript",
        icon: "mdi:language-typescript",
      },
      { purpose: "Styling", name: "Bootstrap", icon: "mdi:bootstrap" },
      { purpose: "Backend runtime", name: "Node.js", icon: "mdi:nodejs" },
      { purpose: "API", name: "GraphQL", icon: "mdi:graphql" },
      {
        purpose: "Infrastructure",
        name: "AWS",
        icon: "simple-icons:amazonaws",
      },
      { purpose: "Testing", name: "Jest", icon: "simple-icons:jest" },
      { purpose: "E2E testing", name: "Cypress", icon: "simple-icons:cypress" },
      { purpose: "Design", name: "Figma", icon: "ph:figma-logo" },
      { purpose: "Project management", name: "Jira", icon: "mdi:jira" },
      { purpose: "Process", name: "Scrum", icon: "" },
    ],
  },
];

const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    timeZone: "UTC",
  });

/** Display-ready experiences: dates formatted, open-ended roles as "Present". */
export const getExperiences = (): (Experience & { endDate: string })[] =>
  experiences.map((experience) => ({
    ...experience,
    startDate: formatDate(experience.startDate),
    endDate: experience.endDate ? formatDate(experience.endDate) : "Present",
  }));
