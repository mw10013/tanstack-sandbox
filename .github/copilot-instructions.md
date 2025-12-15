# Copilot Instructions for TanStack Sandbox

## Overview

This is a sandbox project for experimenting with TanStack libraries (Router, Query, Form, Start) integrated with shadcn/ui components, built using Vite, React 19, TypeScript, and Tailwind CSS v4.

## Architecture

- **Routing**: File-based routing with TanStack Router. Routes defined in `src/routes/` with generated `routeTree.gen.ts`.
- **Components**: UI components from shadcn/ui in `src/components/ui/`, custom components in `src/components/`.
- **Styling**: Tailwind CSS with custom CSS variables, utilities in `src/lib/utils.ts` using `cn()` for class merging.
- **Build**: Vite with TanStack Start plugin for SSR/full-stack, Nitro for server-side rendering.
- **Refs**: Downloaded source code of TanStack libraries and shadcn in `refs/` for reference.

## Key Patterns

- Use `createFileRoute` for new routes in `src/routes/`.
- Integrate TanStack Query with `createQuery` or `useQuery` for data fetching.
- Use TanStack Form with `useForm` for form handling.
- Shadcn components: Import from `@/components/ui/*`, customize via `className` and `cn()`.
- Path aliases: `@/` for `src/`, configured in `tsconfig.json` and `vite.config.ts`.

## Workflows

- **Dev**: `pnpm dev` starts Vite dev server on port 3000.
- **Build**: `pnpm build` for production build.
- **Test**: `pnpm test` runs Vitest.
- **Lint/Format**: `pnpm lint` for ESLint, `pnpm format` for Prettier, `pnpm check` for both.
- **Refs**: `pnpm refs:*` downloads library sources to `refs/` for inspection (e.g., `pnpm refs:tan-router`).

## Conventions

- Dark mode by default (`className="dark"` on html).
- Devtools: TanStack Devtools in bottom-right with Router panel.
- Component variants: Use `class-variance-authority` for button variants, etc.
- File structure: Routes in `src/routes/`, components in `src/components/`, lib in `src/lib/`.

## Integration Points

- TanStack Start: Full-stack framework with SSR.
- Shadcn/ui: Base-vega style, CSS variables in `src/styles.css`.
- External deps: Lucide icons, date-fns, recharts, etc.

Reference: `package.json` for scripts, `vite.config.ts` for build config, `components.json` for shadcn setup.</content>
