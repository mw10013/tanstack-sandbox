# AGENTS.md

## Overview

This is a sandbox project for experimenting with TanStack libraries (Router, Query, Form, Start) integrated with shadcn/ui components using BAse UI, built using Vite, React 19, TypeScript, and Tailwind CSS v4.

- Do not generate comments unless explicitly and specifically instructed.
- Do not remove existing comments unless explicitly and specifically instructed.
- Your training date is in the past, so you need to always check #context7 to read relevant documentation.

## Architecture

- **Routing**: File-based routing with TanStack Router. Routes defined in `src/routes/` with generated `routeTree.gen.ts`.
- **Components**: UI components from shadcn/ui in `src/components/ui/`, custom components in `src/components/`.
- **Styling**: Tailwind CSS with custom CSS variables, utilities in `src/lib/utils.ts` using `cn()` for class merging.
- **Build**: Vite with TanStack Start plugin for SSR/full-stack, Nitro for server-side rendering.
- **Refs**: Downloaded source code of TanStack libraries, shadcn, and Base UI in `refs/` for reference.

### Reference Docs Locations

- **TanStack Router**: `refs/tan-router/docs/` (Markdown files)
- **TanStack Start**: `refs/tan-start/docs/` (Markdown files)
- **TanStack Query**: `refs/tan-query/docs/` (Markdown files)
- **TanStack Form**: `refs/tan-form/docs/` (Markdown files)
- **Shadcn UI**: `refs/shadcn/apps/www/content/docs/` (MDX files)
- **Base UI**: `refs/base-ui/docs/src/app/(docs)/(content)/react/` (MDX files in subdirs)

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
  - Using Shadcn/ui with Base UI instead of Radix UI. 
  - Since Base UI does not support `asChild`, use its `render` prop instead.
- External deps: Lucide icons, date-fns, recharts, etc.

Reference: `package.json` for scripts, `vite.config.ts` for build config, `components.json` for shadcn setup.</content>

## TypeScript Guidelines

- Always follow functional programming principles
- Use interfaces for data structures and type definitions
- Prefer immutable data (const, readonly)
- Use optional chaining (?.) and nullish coalescing (??) operators
- **Do not add any comments to generated code.** Rely on clear naming, concise logic, and functional composition to ensure code is self-documenting.
- Employ a concise and dense coding style. Prefer inlining expressions, function composition (e.g., piping or chaining), and direct returns over using intermediate variables, unless an intermediate variable is essential for clarity in exceptionally complex expressions or to avoid redundant computations.
- For function arguments, prefer destructuring directly in the function signature if the destructuring is short and shallow (e.g., `({ data: { value }, otherArg })`). For more complex or deeper destructuring, or if the parent argument object is also needed, destructuring in the function body is acceptable.

