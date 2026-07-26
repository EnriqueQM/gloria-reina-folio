## Goal
Replace the current Home-page hero photo (the black-and-white portrait in `src/assets/hero.jpg`) with a horizontal, high-resolution pastel sky image — soft pink, orange, and a touch of lavender — that matches the site's existing pastel palette. Keep the current text overlay and hero section styling unchanged.

## Plan

1. **Generate the new hero image**
   - Use the agent-side image generation tool to create a calm, minimal cotton-candy sky: horizontal orientation, pastel pink / soft orange / subtle lavender clouds, sunrise/sunset feel, no strong contrast or saturated colors, no other subjects.
   - Save it to a temporary path first.

2. **Upload it as a Lovable Asset**
   - Run `lovable-assets create --file /tmp/hero-sky.jpg --filename hero-sky.jpg > src/assets/hero-sky.jpg.asset.json`.
   - This produces a CDN-backed asset pointer so the image is easy to swap later without touching component code.

3. **Clean up the old hero asset**
   - Delete the old binary `src/assets/hero.jpg` so the repo doesn't keep an unused large file.

4. **Update `src/routes/index.tsx`**
   - Change the import from `import hero from "@/assets/hero.jpg"` to `import hero from "@/assets/hero-sky.jpg.asset.json"`.
   - Update the `<img>` `alt` text to describe the new sky image (e.g., "Soft pastel clouds at sunrise").
   - Leave the hero section layout, text overlay, animations, and dark overlay exactly as they are.

## Files touched
- `src/assets/hero.jpg` — deleted
- `src/assets/hero-sky.jpg.asset.json` — created
- `src/routes/index.tsx` — import and alt text updated

## Verification
- Open the Home page preview and confirm the new pastel sky fills the full-width hero background.
- Confirm the "Gloria Reina" name, tagline, and "Ver Galería" link still sit on top and remain readable.
- Confirm no build errors.