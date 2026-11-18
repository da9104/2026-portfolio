# Dami Kang portfolio

Responsive portfolio preserving the original reference layout, with content from the supplied index.html, portfolio-evidence.md, and commit-log.md. The original page is preserved in ../portfolio-original.html.

## Preview

From this directory: `python3 -m http.server 4173 --directory dist --bind 127.0.0.1`

Open http://127.0.0.1:4173. The workspace root index.html also opens the updated portfolio using this directory’s assets.

## Editing

- dist/index.html: page content
- dist/styles.css: shared design and responsive portfolio layouts
- dist/script.js: navigation and project tabs
- dist/assets/*.svg: labeled project-image placeholders, not real screenshots
- dist/assets/*.webp: decorative photography retained from the design reference

Figures are a snapshot through 14 November 2026. Descriptions follow supplied commit-subject evidence, not an audit of project source code. GitHub project links require organization access. Hosting remains owner-private.

## Language, motion, and screenshots

The globe control switches English/Korean and persists the choice in localStorage. Translation strings live in dist/i18n.js. The summary, chart labels, and interactive daily counts translate between English and Korean.

GSAP and ScrollTrigger are installed via npm and served locally from dist/vendor. dist/animations.js implements hero entrance and scroll framing, desktop pinned project progression, staggered reveals, a pausable technology marquee, counters, and footer reveal. Motion respects prefers-reduced-motion; pinning is limited to wide, tall viewports.

Reference motion was inspected through successive browser screenshots of the hero, pinned Hear/See/Speak flow, logo band, product cards, integrations, and metrics. This is a portfolio adaptation, not a frame-exact export of Framer's runtime.

Palette: navy #151e31, cobalt #2948d8, mist #f2f4f8, with blue-gray surfaces. The build log uses the original summary HTML and live SVG daily-commit chart, not screenshot images.

Run npm run check to check JavaScript syntax.


Opening sequence (automatic, not scroll-triggered): after image decoding, 0–0.65 s holds the full-screen photographic curtain; both half-screen image panels slide outward together between 0.65–2.0 s; navigation and hero copy fade in only after that, between 2.15–3.23 s. Text does not translate or clip, and the main photograph does not resize. Reduced-motion mode displays the finished composition immediately.

The live chart in dist/activity-chart.js preserves the original portfolio dates and daily counts. Hover, click, focus, and arrow keys expose daily values. On mobile, the chart scrolls horizontally for readable bars.
