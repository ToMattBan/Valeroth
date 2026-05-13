# Valeroth — AGENTS.md

## Stack
- **Framework**: Nuxt 4 + Vue 3 + TypeScript
- **Package manager**: pnpm (see `pnpm-lock.yaml`)
- **Database**: MongoDB (planned, not yet wired)

## Commands
| Command | Action |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm generate` | Static site generation |
| `pnpm preview` | Preview production build |
| `pnpm postinstall` | Runs `nuxt prepare` && `lefthook install` (auto-runs after install) |
| `pnpm lint` | ESLint check (no auto-fix) |
| `pnpm lint:fix` | ESLint with auto-fix |
| `pnpm audit` | Security audit (runs via lefthook pre-commit) |

## Conventions
- Nuxt 4 auto-imports: `useState`, `useFetch`, `useRouter`, etc. are available without imports.
- Add pages in `app/pages/`, components in `app/components/`, composables in `app/composables/`, server routes in `app/server/`.
- `tsconfig.json` references generated configs in `.nuxt/` — do not edit directly.
- `.env` is gitignored. Never commit secrets. Create `.env.example` for documented vars.
- `.nuxt/`, `.output/`, `dist/`, `node_modules/` are gitignored.

## Architecture Notes
- Project is in early scaffolding — only `app/app.vue` exists (displays `<NuxtWelcome />`).
- Planned: RPG campaign manager with character creation, GM dashboard, map, inventory, and dynamic per-campaign data.
- No CI, no test setup yet. When lint is added, always use `pnpm lint:fix` over `pnpm lint`.

## Known Gotchas
- After editing `nuxt.config.ts`, restart the dev server.
- `nuxt prepare` generates TypeScript stubs — run it if `.nuxt/` is missing or types are broken.
