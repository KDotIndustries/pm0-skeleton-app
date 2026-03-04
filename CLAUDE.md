# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vite SPA skeleton using React 19, TypeScript (strict), Tailwind CSS v4, and shadcn/ui (radix-maia style). No backend, database, or auth — frontend-only at this stage.

## Commands

```bash
pnpm dev          # Start Vite dev server
pnpm build        # TypeScript check + Vite production build
pnpm lint         # Lint with ultracite (oxlint) — type-aware
pnpm lint:fix     # Auto-fix lint issues
pnpm preview      # Preview production build
```

No test runner is configured yet.

## Architecture

- **Entry**: `src/main.tsx` — renders React root with `StrictMode`, `TooltipProvider`, `RouterProvider`, and `Toaster`
- **Routing**: React Router v7 with `createBrowserRouter` (client-side only). Routes defined inline in `main.tsx`, page components in `src/routes/`
- **UI components**: 58 pre-installed shadcn/ui components in `src/components/ui/`. Uses compound component pattern with Radix primitives
- **Styling**: Tailwind CSS v4 with oklch CSS custom properties for theming (light in `:root`, dark in `.dark`). Theme defined in `src/style/global.css` via `@theme inline`
- **Icons**: Phosphor Icons (`@phosphor-icons/react`)
- **Dark mode**: `next-themes` (despite no Next.js — works standalone)
- **Utilities**: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge). Also re-exports `cva` and `VariantProps`

## Code Conventions

- **Path alias**: `@/*` maps to `src/*` — always use `@/components/ui/...`, `@/lib/...`, `@/hooks/...`
- **Formatting** (oxfmt): No semicolons, single quotes, trailing commas, 2-space indent, single attribute per line, arrow parens avoided
- **Import order** (oxfmt): builtins → external → internal (`@mando/`, `@/`) → relative
- **Component variants**: Use `cva()` from `@/lib/utils` for variant definitions
- **No RSC**: `components.json` has `"rsc": false` — do not add `'use client'` directives
- **Package manager**: pnpm
