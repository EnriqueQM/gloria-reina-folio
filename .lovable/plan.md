## Problem

On `/galleries/retratos` the app still renders the categories index (the six category tiles from `/galleries`), never the Retratos gallery. Clicking any category tile navigates the URL correctly, but the target gallery page never appears.

## Root cause

TanStack Router treats `src/routes/galleries.tsx` as the parent layout of `src/routes/galleries.$slug.tsx` (dot-nested file-based routing). A parent route MUST render `<Outlet />` for its children to mount. Right now `galleries.tsx` is written as a leaf page (renders the categories grid, no `<Outlet />`), so:

- At `/galleries` it looks correct by accident.
- At `/galleries/retratos` the router matches the child, but the parent has no outlet to mount it into, so we still see the categories grid.

## Fix

Split `galleries.tsx` into a layout + index pair (standard TanStack pattern from the route-architecture rules):

1. Create `src/routes/galleries.index.tsx` — move the current `/galleries` page (categories grid, head metadata) into this leaf, registered as `createFileRoute("/galleries/")`.
2. Rewrite `src/routes/galleries.tsx` as a minimal layout: `createFileRoute("/galleries")({ component: () => <Outlet /> })`, importing `Outlet` from `@tanstack/react-router`. No other UI, no metadata (the index and `$slug` leaves own their own `head()`).
3. Leave `src/routes/galleries.$slug.tsx` unchanged.

No other files need to change.

## Verification

After the edit, load `/galleries` (categories grid still renders) and `/galleries/retratos` (Retratos gallery with masonry + lightbox renders). Confirm clicking any category tile now opens its gallery page and clicking a photo opens the lightbox.