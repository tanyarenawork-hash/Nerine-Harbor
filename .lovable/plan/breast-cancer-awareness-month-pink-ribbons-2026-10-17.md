# Breast Cancer Awareness Month — Pink Ribbons

Add a gentle, tasteful pink ribbon theme for October that fits the existing calm, premium look.

## What you'll see
1. **Awareness strip** at the very top of every page (above the emergency notice): a small pink ribbon icon with "October is Breast Cancer Awareness Month" and a link to the National Breast Cancer Foundation for learning about early detection.
2. **Ribbon next to the logo** in the header — a small pink ribbon beside "Nerine Harbor".
3. **Home page card**: a soft pink "In Awareness" card below the mission strip with a short, hopeful message about early detection and screening, plus links to trusted sources (National Breast Cancer Foundation, American Cancer Society).
4. **Footer**: a small ribbon with "Standing in awareness during Breast Cancer Awareness Month."

Tone stays hopeful and supportive, not fear-based. Includes the usual reminder that this is educational, not medical advice.

## Automatic on/off
The ribbons appear only during October and hide automatically the rest of the year, so nothing needs to be removed later.

## Technical details
- New `src/components/awareness.tsx` with a custom SVG pink ribbon and an `isOctober()` check (rendered after hydration to avoid mismatch).
- Add a `--pink-ribbon` color token in `src/styles.css`.
- Mount strip in `__root.tsx`; small additions to `site.tsx` header/footer and `index.tsx`.
