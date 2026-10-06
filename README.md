# Fermor homepage

A redesigned homepage for [Fermor](https://fermor.in), built with **Next.js (App Router), React and TypeScript**, styled with plain CSS.

- **Live:** _add your Vercel URL here_
- **Repo:** _add your GitHub URL here_

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Requires Node 18.18 or newer.

## Deploy

Push to GitHub, then import the repo at [vercel.com/new](https://vercel.com/new). No environment variables or settings are needed.

## What I was trying to say

Fermor is two things at once: a free calculator site people already use, and an app that brings investing, spending and planning together. The homepage should make both feel like one product.

So the hero is not a screenshot. It is a working calculator written as a sentence ("I invest ₹15,000 every month for 15 years, earning 12% a year") that you can edit and see the result of immediately. It shows the product's promise, clear maths and no sign-up, within seconds of landing.

Everything below stays quiet and in plain language:

1. **Product:** four things the app does, with one real-looking sample (a spending breakdown) instead of decorative cards.
2. **Calculators:** a plain list that links to the live tools on fermor.in.
3. **How it works:** analyse, plan, invest. It is a real sequence, so it is numbered.
4. **Principles:** educational not advice, private by default, written for India. These matter more for a financial brand than another feature grid.
5. **FAQ and final call to action:** the health check, with the SEBI disclaimer kept in the footer.

## Design decisions

- **Type:** Bricolage Grotesque for headings and numbers (a grotesque with some character, not a default serif), Figtree for body text. Both load via `next/font`, so there is no layout shift.
- **Colour:** a cool off-white, deep forest green for trust, and a marigold used sparingly for the "growth" part of the result and the main call to action.
- **No decoration for its own sake:** no gradient washes, no uppercase label above every heading, no hover-lift on every card. The one piece of motion is the result updating as you change an input.
- **Responsive:** one column on phones with a collapsing menu, sliders under the sentence for easy touch input, and a two-column hero from 1000px.
- **Accessibility:** keyboard focus rings, labelled inputs, `aria-live` on the result, native `<details>` for the FAQ, and `prefers-reduced-motion` respected.

## Calculator maths

Defined in `lib/finance.ts`.

- SIP: `FV = P × ((1 + i)^n − 1) / i × (1 + i)`, where `i` is the monthly rate and `n` is the number of months. This assumes payments at the start of each month.
- Lumpsum: `FV = P × (1 + r)^t`, compounded yearly.

Projections are illustrative and shown at a constant return.

## Structure

```
app/            layout, page, global styles, favicon
components/     Header, Calculator, Field, GrowthChart, Faq, Logo
lib/finance.ts  calculator maths and formatting
lib/content.ts  all page copy and link data
```

## What I would do next

- Replace the sample spending data with real product screenshots or the hero phone video.
- Add the Market, Portfolio, ACT and Ask pages that the nav will eventually link to.
- Add unit tests for `lib/finance.ts` and a Lighthouse pass before launch.

This is an independent design exercise and is not affiliated with or endorsed by Fermor.
