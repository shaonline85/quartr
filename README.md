## Quartr – Assignment (Next.js App Router)

Small Next.js app that renders a **Trending Companies** list on the home page and provides a **Company Details** page for each company. The codebase is structured for readability: typed data model, single-responsibility modules/components, and a small test suite.

## Features

- **Home page**: Trending companies list with accessible markup and internal navigation.
- **Company details**: `/companies/[companyId]` route with basic company information and external links.
- **API**: `/api/companies` returns `{ data: Company[] }`.
- **ISR-style data caching** (optional external API): server fetch is cached and can be invalidated via on-demand revalidation.
- **Performance**: company logos are rendered via `next/image`.
- **Tests**: Jest + Testing Library (see `tests/`).

## Requirements

This project is based on **Next.js (App Router)** and requires **Node 18+**.

## Quickstart

```
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

- **Home**: `/`
- **Company details**: `/companies/1` (replace `1` with any existing `companyId`)
- **Companies API**: `/api/companies`

## Data source & caching (ISR-style)

By default, the app uses the local dataset in `lib/companies/companiesData.ts`.

Optionally, you can point the app to an external API by setting `COMPANIES_API_URL` to an absolute URL that returns:

- `{ "data": Company[] }`

The external fetch is cached with `revalidate: 14400` (4 hours) and tagged as `companies`.

### On-demand revalidation

When your upstream data changes (e.g. a CMS publish event), trigger a cache invalidation by calling:

- **Endpoint**: `POST /api/revalidate`
- **Auth**: send header `x-revalidate-secret: <REVALIDATE_SECRET>`

This revalidates the `companies` tag, so subsequent requests pick up fresh data without waiting for the full cache window.

## Environment variables

Create `.env.local`:

```
COMPANIES_API_URL=
REVALIDATE_SECRET=
```

## Scripts

- `npm run dev`: start dev server
- `npm run build`: production build
- `npm run start`: start production server
- `npm run lint`: run Next.js ESLint
- `npm test`: run Jest tests
