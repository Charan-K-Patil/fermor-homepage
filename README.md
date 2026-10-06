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

**Audience:** young Indian professionals (roughly 21 to 30, first or second job, ₹5 to 20L income) who have started earning and want to get better with money but don't know where to start.

**Feeling:** smart, calm and trustworthy. Not a trading app shouting returns. The goal is the sentence "I finally understand what's happening with my money."

**Idea:** *Your money, finally making sense.* One message, one primary action (try the product, not "join a waiting list"), and one visual per section.

Page flow:

1. **Hero:** the promise, one CTA, and a sample net-worth card.
2. **Understand, Plan, Invest:** three plain cards that map to Fermor's own Analyse, Plan, Invest framing.
3. **Calculator demo:** "What could ₹5,000 a month become?" It is a working SIP calculator, not a description of one. "Try another scenario" cycles through realistic examples.
4. **Investing:** a sample portfolio view and "Know what you own."
5. **Forecast:** the showpiece. An interactive projected-wealth chart: drag the monthly amount, switch the return assumption, and hover the chart to read any year.
6. **Close:** "You don't need to be a finance expert. You just need a clearer picture."

## Design decisions

- **Direction:** editorial financial intelligence. Warm off-white, near-black text, thin borders, generous whitespace.
- **Type:** Instrument Serif for headlines and big numbers, Inter for UI and body text. Both load through `next/font`.
- **Colour:** one accent, a deep green (`#0d6b57`). Everything else is neutral.
- **Shape:** 14px radius, one card style, no shadows. Borders and contrast do the work.
- **Motion, kept small:** numbers count up, the charts draw themselves, sections reveal once on scroll, and buttons and cards lift 1 to 2px on hover. `prefers-reduced-motion` turns all of it off, and a `<noscript>` rule keeps content visible without JavaScript.
- **Responsive:** one column on phones with a collapsing menu. Two-column layouts from 960px.
- **Accessibility:** keyboard focus rings, labelled controls, `aria-live` on results, and chart summaries for screen readers.

All portfolio, net worth and forecast numbers are illustrative and live in `data/mockFinancialData.ts`.

## Calculator maths

Defined in `lib/finance.ts`.

- SIP: `FV = P × ((1 + i)^n − 1) / i × (1 + i)`, where `i` is the monthly rate and `n` is the number of months. This assumes payments at the start of each month.
- Forecast: an existing corpus compounded monthly, plus the SIP above.

Projections are illustrative and assume a constant return.

## Structure

```
app/                       layout, page, global styles, favicon
components/                Header, Hero, HeroCard, FeatureGrid, CalculatorDemo,
                           InvestmentDashboard, WealthForecast, FinalCta, Footer,
                           Field, Reveal, Logo, hooks
data/mockFinancialData.ts  all illustrative numbers
lib/finance.ts             calculator maths and number formatting
lib/content.ts             nav and copy
```

## What I would do next

- Replace the sample cards with real product screenshots.
- Add the Market, Portfolio, ACT and Ask pages that the nav will eventually link to.
- Add unit tests for `lib/finance.ts` and a Lighthouse pass before launch.

This is an independent design exercise and is not affiliated with or endorsed by Fermor.
