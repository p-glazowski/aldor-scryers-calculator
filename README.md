# Aldor & Scryers Reputation Calculator

A free, production-ready reputation calculator for **World of Warcraft: The Burning Crusade**.
Calculate exactly how many Marks, Signets, Fel Armaments or Arcane Tomes you need to reach your goal — and find the cheapest possible path based on live Auction House prices.

🔗 **[Live Demo](https://aldor-scryers-calculator.com/)**

![Aldor Scryers Calculator](/screenshot.jpg)

---

## Features

- ⚔️ **Faction switching** — supports both The Aldor and The Scryers with correct items for each side
- 🧮 **Cost-optimization algorithm** — calculates the cheapest item combination across all three item tiers, respecting reputation tier caps (e.g. small marks only usable before Honored)
- 💰 **Live price input** — enter your server's current Auction House prices in silver; results update instantly
- 🧝 **Human Racial support** — toggle the Diplomacy passive (+10% reputation gain) for accurate Human character calculations
- 🎯 **Flexible goal setting** — choose any reputation tier as your current standing and target goal
- 🪙 **WoW-accurate gold display** — prices shown in gold/silver format matching the in-game UI
- 📖 **Built-in reputation guide** — faction-specific guide included directly on the page
- 📱 **Fully responsive** — works seamlessly on desktop and mobile
- 📊 **Google Analytics 4** — integrated for usage tracking and iteration

---

## Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | Next.js 16 (App Router)   |
| Language   | TypeScript                |
| Styling    | Tailwind CSS v4           |
| Animations | Framer Motion (Motion 12) |
| Analytics  | Google Analytics 4        |
| Deployment | Vercel                    |

---

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
git clone https://github.com/p-glazowski/aldor-scryers-calculator.git
cd aldor-scryers-calculator
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
├── page.tsx                  # Main calculator page (all state & logic)
├── layout.tsx                # Root layout with Footer & Google Analytics
└── globals.css               # Global styles
components/
├── Results.tsx               # Results panel (items needed, total cost, breakdown)
├── Guidee.tsx                # In-page reputation guide (faction-aware)
├── Footer.tsx                # Footer component
└── Analytics.tsx             # Google Analytics 4 integration
functions/
└── functions.ts              # Helper functions (translateCurrentRep, etc.)
data/
└── reputation.ts             # Reputation tier data (thresholds, names, values)
public/
├── mark.jpg                  # Mark of Kil'jaeden icon
├── signet.jpg                # Sunfury Signet icon
├── fel.jpg                   # Fel Armament icon
├── arcane.jpg                # Arcane Tome icon
├── gold.webp                 # WoW gold coin icon
└── silver.webp               # WoW silver coin icon
```

---

## How the Algorithm Works

The calculator uses a brute-force cost optimization loop to find the cheapest combination of items:

1. Iterates over all possible quantities of high-value items (Fel Armament / Arcane Tome)
2. For each quantity, calculates how many small items (Mark of Kil'jaeden / Firewing Signet) can be used — capped at the **Honored threshold (9,000 rep)** since they are not accepted beyond that point
3. Fills the remaining reputation gap with large items (Mark of Sargeras / Sunfury Signet)
4. Computes total gold cost for each combination and returns the cheapest result

Human and non-Human characters are handled by applying a **×1.1 multiplier** to all reputation-per-item values when the Diplomacy racial is toggled on.

---

## Traction

Launched February 2026 — reached **5,200+ organic users** and **41,000+ events** within the first 5 weeks with zero paid promotion, driven entirely by SEO and niche WoW community interest.

---

## Roadmap

- [ ] Multiple character tracking
- [ ] Shareable calculator links (URL state)
- [ ] Classic era / Season of Discovery support
- [ ] Dark/light theme toggle
- [ ] Mobile AH price lookup integration

---

## License

MIT
