## Problem

In `src/components/Lightbox.tsx`, the overlay uses `flex items-center justify-center` on a full-viewport container with no overflow handling, and the image is clamped to `max-h-[88vh] max-w-[92vw] object-contain`. Result:

- The image is always shrunk to fit the viewport (you never see it at full size).
- The body is locked with `overflow: hidden`, so the page behind can't scroll either — which reads as the site "freezing" when you try to scroll a tall photo.

## Fix

Make the lightbox itself scrollable and let tall/large images exceed the viewport so users can scroll up/down to see the whole photo.

1. Change the overlay wrapper to allow vertical scrolling: `overflow-y-auto`, and switch from centered flex to a scrollable column that centers small images but lets tall ones extend beyond the viewport.
2. Remove the `max-h-[88vh]` clamp on the `<img>`; keep `max-w-[92vw]` (and `h-auto`) so wide images still fit horizontally but tall images render at natural height and become scrollable.
3. Keep the close/prev/next buttons and the counter as `fixed` (not `absolute`) so they stay pinned while the image scrolls.
4. Keep the `document.body.style.overflow = "hidden"` lock — scrolling happens inside the lightbox container instead of the page.
5. Add touch scrolling niceties: `overscroll-contain` on the lightbox so scroll doesn't bleed into the page on mobile.

## Files

- `src/components/Lightbox.tsx` — only file touched.

## Verification

Open a gallery (e.g. `/galleries/paisajes`), click a tall portrait-orientation photo, confirm you can scroll top→bottom of the image inside the lightbox, close it, and confirm the page below scrolls normally again.