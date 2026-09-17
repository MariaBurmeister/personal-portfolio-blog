# Maria Burmeister — Portfolio

Personal portfolio site for a frontend developer. Built with **Next.js 16**, **React 19**, and **Tailwind CSS**.

Live site: [mariaburmeister.com](https://mariaburmeister.com)

## Features

- Portfolio: About, Experience, Projects (GitHub)
- Blog placeholder (coming soon)
- App Router error / not-found UI

## Getting started

Requires [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

Copy `.env.example` to `.env.local` (never commit `.env.local`):

```bash
GITHUB_USERNAME=your-github-username
GITHUB_TOKEN=your-fine-grained-github-token
NEXT_PUBLIC_CONTACT_EMAIL=you@example.com
```

`NEXT_PUBLIC_CONTACT_EMAIL` is required (mailto links, error page, and PWA manifest). `GITHUB_TOKEN` is optional for public repos but recommended to avoid rate limits. Use a fine-grained PAT with minimal read access, then set the same values in your Vercel project env.

### Scripts

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `pnpm dev`          | Development server                    |
| `pnpm build`        | Production build (`prebuild` runs first) |
| `pnpm start`        | Serve production build                |
| `pnpm lint`         | ESLint                                |
| `pnpm format`       | Prettier (write)                      |
| `pnpm format:check` | Prettier (check only)                 |

The editor formats with Prettier and applies ESLint fixes on save. Vercel runs `pnpm build`, which runs `prebuild` (lint + Prettier check) first. That must pass before the Next.js build starts.

## Deploy

Designed for [Vercel](https://vercel.com). Push to GitHub and import the repo, or use the Vercel CLI. Ensure `GITHUB_USERNAME` / `GITHUB_TOKEN` / `NEXT_PUBLIC_CONTACT_EMAIL` are configured, and set the install command to `pnpm install` if it is not detected automatically.
