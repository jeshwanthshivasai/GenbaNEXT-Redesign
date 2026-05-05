# GenbaNEXT — Redesign

A scroll-driven corporate hub for the GenbaNEXT circular-economy network.

Industrial minimalism: pure paper background, deep ink, single saturated blue accent.
Helvetica Neue for display, JetBrains Mono for technical labels.

Built with Next.js 16 + React 19. No external animation libraries — scroll choreography
is plain `getBoundingClientRect` + CSS transforms.

## Sections

1. **Hero** — pinned wordmark, parallax 現場 kanji, live Tokyo/Mumbai clocks, tick-mark ring.
2. **Manifesto** — 360vh sticky scroll; four lines reveal sequentially.
3. **Marquee** — endless tape of the 14 vertical names.
4. **Circular Economy** — 600vh sticky dial that rotates through 6 stations: Source → Make → Use → Recover → Regenerate → Return.
5. **Platforms** — 600vh horizontal pinned scroll, 14 cards + a `+ ∞` tail card.
6. **Geography** — equirectangular map with Tokyo + Mumbai hubs and 8 RefNEXT markets.
7. **Audience** — Investors / Partners / Governments triptych with hover-invert.
8. **Footer** — full vertical index, hub coordinates, language switcher (UI only), subscribe form.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.
