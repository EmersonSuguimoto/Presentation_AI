# Electrolux AI History — Animated Presentation

A scroll-driven, animated web presentation telling the 75-year story of Artificial Intelligence — from Turing's 1950 paper to today's reasoning agents. Built for an informal Electrolux team session, styled with the Electrolux brand frame and Kurzgesagt-inspired era palettes.

> **Runtime:** ~20–25 minutes live · 12 scenes · single-page HTML · no build step

---

## Quick start

No dependencies, no build. Just serve the folder with any static file server:

```bash
# Python (built-in on most systems)
python -m http.server 8000

# Node.js
npx http-server . -p 5173
```

Open `http://localhost:8000` in Chrome, Edge, or Firefox.

---

## Presenting on a TV

1. Open the URL in a full-screen capable browser.
2. Press **F11** for fullscreen.
3. Set browser zoom to **125%** (`Ctrl` + `+` three times).
4. Click anywhere inside the page, then navigate with the keyboard.

---

## Navigation

| Key | Action |
|---|---|
| `→` · `Space` · `PgDn` | Next scene |
| `←` · `PgUp` | Previous scene |
| `Home` | Jump to cover |
| `End` | Jump to outro |
| `Esc` | Open/close mini-map overview |
| Mouse wheel / trackpad | Smooth scroll (Lenis) |
| Rail dots (top) | Click to jump |

---

## What's in each scene

| # | Scene | Era | Palette |
|---|---|---|---|
| 00 | Cover | — | Electrolux navy + starfield |
| 01 | The Dream | 1940s–1955 | Sepia parchment |
| 02 | The Birth | 1956 | Chalkboard |
| 03 | Golden Years | 1956–1974 | CRT green |
| 04 | First Winter | 1974–1980 | Icy blue + snow |
| 05 | Expert Systems | 1980–1987 | 80s Tron neon |
| 06 | Second Winter | 1987–1993 | Deeper ice |
| 07 | Quiet Revolution | 1993–2011 | Warm 2000s web |
| 08 | Deep Learning | 2012–2017 | Kurzgesagt cosmos |
| 09 | Transformer Era | 2017–2022 | Cosmic gradient |
| 10 | ChatGPT Moment | 2022–2024 | Full Kurzgesagt space |
| 11 | Today · State of the Art | 2025–2026 | Futuristic neon + Electrolux tie-in |
| 12 | Outro | — | Back to Electrolux navy |

For scene-by-scene speaker notes, fun facts, and discussion prompts, see [PRESENTATION_GUIDE.md](PRESENTATION_GUIDE.md).

---

## Tech stack

All libraries loaded via CDN — no install, no bundler.

- **[GSAP 3.12.5](https://gsap.com/)** + `ScrollTrigger` — scene animations, parallax, staggered reveals
- **[Lenis 1.1.20](https://github.com/darkroomengineering/lenis)** — buttery smooth-scroll
- **[Lottie](https://github.com/airbnb/lottie-web)** — optional set-piece illustrations
- **Vanilla CSS** — per-era themes via custom properties, responsive with `clamp()`
- **Vanilla JS** — no framework, modular scene setup in `scripts/scenes.js`

### Brand system

- **Primary color:** `#041E41` (Electrolux Navy)
- **Typography:** Inter (Google Fonts) — open-source stand-in for Electrolux Sans
- **Type scale:** 72 / 40 / 35 / 27 / 26 / 25 / 18 / 14 / 12 px (matches Electrolux guidelines)
- **Kurzgesagt accent palette:** `#001372`, `#0b0054`, `#e30050`, `#e32e01`, `#fbbe00`

---

## Project structure

```
Presentation_English/
├── index.html                  # 12 <section> scenes + brand frame
├── styles/
│   ├── base.css               # brand tokens, type scale, layout primitives
│   └── scenes.css             # per-era theme overrides, scene illustrations
├── scripts/
│   ├── main.js                # Lenis + ScrollTrigger bootstrap
│   ├── scenes.js              # per-scene GSAP animation timelines
│   └── nav.js                 # rail dots, mini-map, keyboard nav
├── .claude/
│   └── launch.json            # preview server config (npx http-server)
├── PRESENTATION_GUIDE.md      # speaker notes, fun facts, discussion prompts
└── README.md                  # you are here
```

---

## Accessibility

- `prefers-reduced-motion: reduce` disables Lenis smooth scroll and long GSAP timelines
- All animations have graceful fallbacks — the story is readable without JS
- Keyboard-complete navigation (no mouse required)
- Semantic HTML5 sections with `aria-label` on navigation controls

---

## Browser support

Tested on:
- Chrome / Edge (Chromium) — full support
- Firefox — full support
- Safari — full support

Requires a modern browser with CSS `clamp()`, CSS custom properties, and ES2020 JS.

---

## Credits

- **Content, structure, and story arc:** designed for an internal Electrolux Group team session, April 2026
- **Visual inspiration:** [Kurzgesagt](https://kurzgesagt.org/) cosmic infographics + Electrolux brand frame
- **Fonts:** [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- **Libraries:** GSAP (GreenSock), Lenis (Darkroom Engineering), Lottie (Airbnb)

---

## License

Internal Electrolux team material. Not for redistribution.
