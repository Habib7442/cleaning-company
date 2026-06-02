# Lustra — Product Requirements Document (Website)

> **Tagline:** _Spaces, transformed._
> **Product:** Marketing + booking website for a premium, design-led cleaning service.
> **Doc type:** Build-ready PRD (design + content + functional + technical).
> **Version:** 1.0 · **Date:** 2026-06-02 · **Status:** Ready to build
> **Audience for this doc:** the developer / designer building the site (that's you).

---

## 0. How to use this document

This PRD is written so you can build directly from it. It contains:

- The **brand** (name, voice, positioning) so copy stays consistent.
- A **bold art direction** with exact color + type tokens you can paste into code.
- A **section-by-section homepage spec** and specs for every inner page, with **real sample copy** (not lorem).
- The **instant-quote + booking flow**, the conversion system, and full **technical / global** requirements.

Everything in `[square brackets]` is a value you should confirm or fill (cities, currency, phone, etc.). Everything else is ready to use.

> ⚠️ **The one rule that makes this site sell:** it must NOT look like a normal cleaning website. See §5.1 "Anti-patterns" — treat that list as hard constraints.

---

## 1. Product overview

### 1.1 What it is
Lustra is a **premium cleaning service** sold and booked online. The website is the entire storefront: it has to make a global, design-literate visitor feel that this is the most considered cleaning brand they've ever seen — and convert them into a booking in under a minute.

### 1.2 The problem
Cleaning websites look cheap, generic, and interchangeable: bright blue gradients, soap-bubble clip-art, stock photos of someone in an apron giving a thumbs-up, and three identical pricing cards. They make a premium service look like a discount one, so they compete on price and never command trust.

### 1.3 The solution
Position cleaning as **hospitality and craft**, not a chore — and dress the brand like a luxury fragrance house or a boutique hotel, not a janitorial supplier. Pair that with **radically transparent pricing** and a **60-second instant quote** so the premium feel never adds friction.

### 1.4 Vision
> A world where a truly cared-for space is one click away — in every city.

### 1.5 Why it can be sold globally (even though cleaning is local)
The website is framed as a **brand and network**, not a single local outfit:
- Multi-city coverage with per-city landing pages.
- Multi-currency + multi-language.
- One account that works in any city it operates in.
- Consistent standards, vetting, and guarantee everywhere.

This lets the same site be pitched to a buyer anywhere in the world and feel native to them.

---

## 2. Brand identity

### 2.1 Name — **Lustra**
From Latin _lustrare_ — "to purify, to illuminate, to make bright" — and the English _lustre_, the soft glow of a cared-for surface. It says **clean + glow + refinement** in two syllables, is easy to pronounce in most languages, and is short enough for a logo, an app icon, and a `.com`.

**Alternate names** (if you want to swap — keep the same art direction): **Aera**, **Sōl**, **Verra**, **Noon**, **Halo & Co.**

### 2.2 Tagline
- **Primary:** _Spaces, transformed._
- Alternates: _The art of clean._ · _Clean, considered._ · _Beyond spotless._

### 2.3 Positioning statement
> For people who care how a space _feels_, not just how it looks, **Lustra** is a premium cleaning service that treats cleaning as hospitality — vetted professionals, eco-considered products, and a seamless 60-second booking — available across cities worldwide. Unlike ordinary cleaning services that compete on price and look it, Lustra is designed end-to-end like a luxury brand.

### 2.4 Mission & values
**Mission:** Make exceptional clean effortless — and make the people who deliver it proud.

**Values (the five C's):**
1. **Craft** — clean is a skill, done with care.
2. **Care** — for the space, the client, and the cleaner.
3. **Clarity** — transparent, flat pricing. No surprises.
4. **Conscience** — eco-considered products and methods.
5. **Consistency** — the same standard, every visit, every city.

### 2.5 Brand personality & voice
**Personality:** Refined, calm, confident, warm, precise — a great hotel concierge, not a salesperson.

**Voice principles:**
- **Spare.** Short sentences. Let white space carry weight.
- **Sensory.** Talk about how a space _feels_, smells, sounds (quiet), looks in the light.
- **Confident, never loud.** No exclamation marks, no "BEST!!!", no fake urgency.
- **Human.** Respect the people who do the work.

**Do / Don't:**

| ✅ Do | ❌ Don't |
|---|---|
| "The clean you feel the moment you walk in." | "We're the #1 BEST cleaners in town!!!" |
| "We don't cut corners. We clean them." | "Sparkling homes at unbeatable LOW prices!" |
| "Booked in sixty seconds." | "Easy online booking available now!!" |
| "Not delighted? We'll re-clean, free." | "100% satisfaction or your money back guaranteed*" |

### 2.6 Logo direction (for your designer)
- **Wordmark** set in the display serif (Fraunces), tight tracking, lowercase or small-caps: `lustra`.
- Optional **mark**: a single soft "gleam" / four-point sparkle reduced to a minimal geometric glint — used as favicon and app icon. Avoid literal bubbles, brooms, or spray bottles.
- Works in Ink on Bone, Bone on Ink, and Ink on Citrus.

---

## 3. Target audience & personas

### 3.1 Market
Global, urban, **premium** segment. Design-literate, time-poor, quality-over-price. English-first launch, then localized.

### 3.2 Personas

**A. Mara — "The Considered Homeowner"** (primary)
- 38, dual-income, design-conscious, owns a well-kept apartment/home.
- **Goal:** a reliable, high-quality recurring clean she never has to think about.
- **Pain:** flaky cleaners, inconsistent quality, awkward cash payments, ugly booking forms.
- **Wins if:** the site feels trustworthy and premium, pricing is clear, booking is instant.

**B. Daniel — "The Host"** (high-value, recurring)
- 45, manages 2–10 short-let / Airbnb properties across cities.
- **Goal:** dependable guest-ready turnarounds, consistent standards, clean invoicing.
- **Pain:** coordinating multiple cleaners, last-minute gaps, no standardization.
- **Wins if:** scheduling is reliable, multi-property + invoicing supported, one account everywhere.

**C. Priya — "The Studio Manager"** (commercial entry)
- 33, runs a boutique design studio / small premium office.
- **Goal:** a discreet, brand-appropriate clean that respects the space.
- **Pain:** commercial cleaners feel industrial and impersonal.
- **Wins if:** the brand feels as considered as her studio; easy to request a tailored quote.

### 3.3 Audience implications for the site
- Lead with **feel + trust**, support with **transparent price**.
- Two conversion lanes: **instant quote/book** (residential, short-let) and **request a tailored quote** (commercial / multi-property).

---

## 4. Goals & success metrics

### 4.1 Business goals
1. Convert first-time visitors into bookings.
2. Make the brand feel premium enough to justify above-market pricing.
3. Drive recurring (subscription) bookings over one-offs.

### 4.2 Conversion goals
- **Primary:** Complete an **instant quote → booking** (online payment).
- **Secondary:** Request a tailored quote (commercial/host); create an account / save a quote; newsletter signup.

### 4.3 KPIs / targets (set baselines after launch)
| Metric | Target |
|---|---|
| Visitor → quote-started | ≥ 18% |
| Quote-started → booking completed | ≥ 35% |
| Overall visitor → booking | ≥ 5% |
| Recurring (subscription) share of bookings | ≥ 40% |
| Mobile conversion vs desktop | within 80% |
| Core Web Vitals | all "Good" (see §14.4) |

---

## 5. Design direction / art direction (the bold part)

### 5.1 Concept: **"Editorial Atelier"**
Treat the site like the lookbook of a luxury house — **cinematic imagery, oversized confident typography, generous negative space, an asymmetric editorial grid**, and one electric signature color. Quiet, expensive, and a little dramatic. The unexpected lime accent + the squeegee "wipe" interaction make it instantly _not_ a normal cleaning site.

### 5.1.1 ⚠️ Anti-patterns — do NOT do these (hard constraints)
- ❌ Bright blue / cyan gradients.
- ❌ Soap-bubble graphics, sparkle clip-art, water-drop emoji.
- ❌ Stock photos of smiling people in aprons / thumbs-up / spray bottles to camera.
- ❌ Three identical centered pricing cards as the main layout device.
- ❌ Centered hero with a big rounded "Book Now" button and a hero illustration.
- ❌ Generic rounded-corner SaaS cards everywhere.
- ❌ Carousels of clip-art "feature" icons.
- ❌ Comic, cartoon, or overly friendly mascot styling.

### 5.2 Color palette

| Token | Name | Hex | Use |
|---|---|---|---|
| `--ink` | Ink | `#0E0F0D` | Primary dark bg, primary text on light |
| `--bone` | Bone | `#F4F1EA` | Primary light canvas |
| `--citrus` | Citrus | `#C6F24E` | Signature accent: CTAs, highlights, key marks |
| `--sage` | Sage | `#5B6B5A` | Calm secondary (eco sections, muted UI) |
| `--stone` | Stone | `#CFC9BC` | Borders, dividers, muted surfaces |
| `--slate` | Slate | `#6B6B62` | Secondary text on light |
| `--paper` | Paper | `#FBFAF6` | Raised surface on Bone |
| `--white` | White | `#FFFFFF` | Sparing highlights only |
| `--ok` | Success | `#3F8E5B` | Form success |
| `--warn` | Error | `#B4452F` | Form error |

**Usage rules**
- Default to **Ink + Bone**. Citrus is a _spice_ — used on primary CTAs, key numbers, the squeegee handle, hover states, and one or two hero accents per screen. Never large fields of citrus.
- **Citrus buttons → Ink text** (never white text on citrus; contrast fails).
- Big dramatic sections can flip to **Ink background with Bone text** for rhythm.
- Sage is for calm/eco moments and supportive UI, not primary CTAs.

**Contrast (WCAG):** Ink-on-Bone and Bone-on-Ink pass AAA for body. Ink-on-Citrus passes AA for large + UI. Never put body text in Citrus or Stone on Bone.

### 5.3 Typography

**Families (Google Fonts):**
- **Display — _Fraunces_** (variable, opsz + wght). High-contrast characterful serif. Use for H1–H3 and editorial moments. Use the _soft / opsz-large_ look at big sizes; italics for emphasis.
- **Body / UI — _Inter_** (variable). Neutral, legible, modern. All paragraphs, UI, forms.
- **Eyebrow / labels — _Space Mono_** (or _JetBrains Mono_). Small uppercase labels, section numbers (e.g. `01 / SERVICES`) — adds an editorial/technical edge.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

**Type scale (fluid, desktop → mobile via `clamp`):**

| Role | Font | Size (`clamp`) | Weight | Line | Tracking |
|---|---|---|---|---|---|
| Display XL (hero) | Fraunces | `clamp(3rem, 8vw, 7rem)` | 400 | 0.95 | -0.02em |
| H1 | Fraunces | `clamp(2.5rem, 5vw, 4.5rem)` | 400 | 1.0 | -0.02em |
| H2 | Fraunces | `clamp(2rem, 3.5vw, 3rem)` | 400 | 1.05 | -0.01em |
| H3 | Fraunces | `clamp(1.5rem, 2vw, 2rem)` | 500 | 1.1 | -0.01em |
| Body L | Inter | `clamp(1.125rem, 1.4vw, 1.25rem)` | 400 | 1.6 | 0 |
| Body | Inter | `1.0625rem` (17px) | 400 | 1.6 | 0 |
| Small | Inter | `0.875rem` (14px) | 500 | 1.5 | 0 |
| Eyebrow / Label | Space Mono | `0.75rem` (12px) | 700 | 1.4 | 0.16em, UPPERCASE |

**Rules:** one Display element per viewport for impact. Body measure 60–72ch max. Mix Fraunces italic into Display headlines for an editorial accent (e.g. "Spaces, _transformed_.").

### 5.4 Spacing & grid
- **Base unit 8px.** Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- **Grid:** 12-column, max content width **1440px**, wide gutters (≥ 32px), large outer margins (≥ 6vw). Embrace **asymmetry** — let content sit on 7 of 12 columns, push imagery to bleed off one edge.
- **Section rhythm:** vertical padding `clamp(80px, 12vh, 160px)`. Let sections breathe.
- **Full-bleed** imagery allowed (escape the max-width).

### 5.5 Shape, elevation, texture
- **Radius:** mostly sharp — `2px` for surfaces/inputs. **Exception:** primary CTAs are **full-pill** (radius 999px) for a single point of softness/contrast.
- **Borders:** 1px Stone hairlines for editorial dividers and table rules.
- **Shadows:** minimal. One soft token only: `0 20px 60px -20px rgba(14,15,13,.25)` for floating elements (booking widget, modals).
- **Texture:** optional subtle film grain overlay (2–4% opacity) on Ink hero sections for a cinematic feel.

### 5.6 Imagery & art direction
- **Style:** cinematic, **natural light**, light-filled interiors; close-up texture (folded linen, light across marble, water beading on glass, a single ray on a clean floor). Human moments shot **editorially** (hands at work, a cleaner adjusting a curtain) — never posed thumbs-up.
- **Recurring motif:** the **citrus accent appears physically** in photos — citrus-colored gloves, a citrus squeegee, a single citrus object — to tie brand + imagery together.
- **Treatment:** rich but natural color, gentle contrast, slight grain. Optionally a few hero shots in B&W with the citrus object as the only color.
- **Sourcing:** commission or license real photography; if AI-generated, keep it photoreal and grain-matched. **No text baked into images.**

### 5.7 Iconography
- Thin (1.5px) line icons, geometric, minimal. Used sparingly (form steps, footer, feature ticks). No filled "friendly" icon sets.

### 5.8 Motion & interaction principles
- **Smooth scroll** (Lenis) site-wide.
- **Easing:** expo-out `cubic-bezier(0.16, 1, 0.3, 1)`; durations 400–800ms.
- **Scroll-reveal:** headlines and images rise + fade in on enter (translateY 24px → 0, opacity 0 → 1), staggered.
- **Parallax:** 6–12% on full-bleed imagery.
- **Hover:** Citrus underline-grow on links; pill CTAs shift Ink↔Citrus.
- **Respect `prefers-reduced-motion`:** disable parallax, smooth-scroll, and the auto wipe; provide static fallbacks.

### 5.9 Signature interactions (the "unique layout" hooks)
1. **The Squeegee Wipe (hero + transformations):** two stacked images — a dimmer "before" and a bright "after." A draggable **squeegee handle** (citrus) wipes the after image in as you drag, or auto-wipes once on scroll-in. Accessible fallback: a Before/After toggle button; reduced-motion shows the "after" static.
2. **Pinned horizontal Transformations gallery:** a section that pins and scrolls horizontally through full-bleed transformation frames with mono captions (room type, city).
3. **Headline wipe-in:** display headlines "clean" into view with a soft mask-reveal.
4. **City marquee:** a slow horizontal marquee of city names (coverage), pausing on hover.
5. **Optional custom cursor:** a small Ink dot that grows into a citrus ring over interactive elements (desktop only, reduced-motion off).

---

## 6. Design tokens (paste-ready)

```css
:root {
  /* Color */
  --ink:    #0E0F0D;
  --bone:   #F4F1EA;
  --paper:  #FBFAF6;
  --citrus: #C6F24E;
  --sage:   #5B6B5A;
  --stone:  #CFC9BC;
  --slate:  #6B6B62;
  --white:  #FFFFFF;
  --ok:     #3F8E5B;
  --warn:   #B4452F;

  /* Semantic */
  --bg: var(--bone);
  --bg-alt: var(--paper);
  --bg-invert: var(--ink);
  --text: var(--ink);
  --text-muted: var(--slate);
  --text-invert: var(--bone);
  --accent: var(--citrus);
  --line: var(--stone);

  /* Type */
  --font-display: "Fraunces", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;

  /* Spacing (8px base) */
  --s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
  --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
  --s-9: 96px; --s-10: 128px; --s-11: 160px;

  /* Layout */
  --maxw: 1440px;
  --gutter: clamp(20px, 6vw, 96px);

  /* Radius / elevation */
  --radius: 2px;
  --radius-pill: 999px;
  --shadow-float: 0 20px 60px -20px rgba(14,15,13,.25);

  /* Motion */
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --dur: 600ms;
}

@media (prefers-reduced-motion: reduce) {
  * { scroll-behavior: auto; animation: none !important; transition: none !important; }
}
```

---

## 7. Information architecture & sitemap

### 7.1 Pages
```
/                      Home
/services              Services overview
/services/[slug]       Service detail (home, deep, move, short-let, office)
/pricing               Pricing + plans
/how-it-works          How it works
/transformations       Before/after gallery (the showcase)
/about                 About / brand story / the people
/sustainability        Eco commitments
/cities                Coverage index
/cities/[city]         Per-city landing (local SEO, currency, availability)
/quote                 Instant quote + booking flow (multi-step)
/contact               Contact / tailored (commercial) quote
/journal               Journal (blog) — optional, Phase 1
/journal/[slug]        Article
/account/*             Account, bookings, invoices — Phase 1
/legal/privacy         Privacy
/legal/terms           Terms
/legal/cookies         Cookies
```

### 7.2 Primary navigation
`Services · Pricing · Transformations · Cities · About` — right side: **language/currency switch**, a quiet `Sign in`, and the primary pill CTA **"Get a quote"**. Sticky, transparent over hero → solidifies (Bone, hairline border) on scroll.

### 7.3 Footer
4 columns: **Services · Company (About, Sustainability, Journal, Careers) · Support (Contact, FAQ, Guarantee, Cities) · Legal**. Plus: newsletter ("The Journal"), social, currency/language selector, and the wordmark with an oversized Fraunces tagline.

---

## 8. Homepage spec (section by section)

> Order is intentional: **hook → trust → what → proof → how → why → price → social proof → values → reach → close.**

### 8.1 Header / nav
- **Layout:** transparent over hero; wordmark left, nav center/right, pill CTA + language/currency far right.
- **Behavior:** on scroll past hero, fade to Bone bg + 1px Stone bottom border, shrink height.
- **Mobile:** wordmark + hamburger; full-screen Ink menu with oversized Fraunces links + CTA.

### 8.2 Hero — with the Squeegee Wipe
- **Layout:** asymmetric. Oversized Display headline overlapping a full-bleed image on the right that bleeds off-screen. Headline sits left on ~6 columns.
- **Image:** light-filled room; the **squeegee wipe** reveals the bright "after" over a dimmer "before."
- **Copy:**
  - Eyebrow (mono): `PREMIUM CLEANING · NOW IN [12] CITIES`
  - H1 (Display): **"The clean you feel the moment you walk in."**
  - Sub (Body L): "Lustra is a premium cleaning service for considered spaces — vetted professionals, eco-considered products, booked in sixty seconds."
  - **Primary CTA (pill, citrus):** "Get an instant quote"
  - **Secondary (text + arrow):** "See transformations →"
- **Motion:** headline wipe-in; squeegee auto-wipes once, then is draggable; subtle image parallax.

### 8.3 Trust bar
- Thin Ink strip directly under hero. Mono, evenly spaced, with hairline separators:
  `INSURED & BONDED · BACKGROUND-CHECKED PROS · 4.9/5 ACROSS [40,000+] CLEANS · 24-HOUR RE-CLEAN GUARANTEE`
- On mobile: slow auto-marquee.

### 8.4 Services — as a "menu," not cards
- **Layout:** an editorial **typographic list** (like a fine-dining menu), each row: large Fraunces service name left, one-line description center (Inter), price-from + arrow right. Hairline dividers. Row hover → row bg flips to Ink/Bone, a thumbnail image fades in on the right.
- **Content:**

| Service | One-liner | From |
|---|---|---|
| Home Clean | "Your everyday sanctuary, kept." | [$XX] |
| Deep Clean | "A reset — down to the grout." | [$XXX] |
| Move In / Move Out | "Leave nothing but light." | [$XXX] |
| Short-Let Turnaround | "Guest-ready, every time." | [$XX] |
| Studio & Office | "A workspace that breathes." | "Tailored" |

- Section eyebrow: `01 / SERVICES`. Heading: "What we do."

### 8.5 Transformations — pinned horizontal gallery
- **Layout:** pin the section; scroll moves a horizontal track of full-bleed before/after frames (each with its own mini squeegee or a clean split).
- **Caption (mono):** `LIVING ROOM · LISBON` / `KITCHEN · TOKYO`.
- Eyebrow `02 / PROOF`. Heading: "Seeing is believing." CTA at end: "View all transformations →".

### 8.6 How it works — oversized numerals
- **Layout:** three steps, each anchored by a huge Fraunces numeral (01–03) with short copy. Asymmetric stagger, not three equal columns.
- **Content:**
  - **01 — Tell us about your space.** "A few details. Sixty seconds. An instant, honest price."
  - **02 — Choose a time that suits.** "Pick your slot. One-off or recurring — you're in control."
  - **03 — We arrive, and transform.** "A vetted Lustra professional does the rest. You just walk back in."
- Eyebrow `03 / HOW IT WORKS`.

### 8.7 Why Lustra — differentiators (Ink section)
- **Layout:** flip to **Ink background, Bone text** for drama. Left: H2 "Why Lustra." Right: a tight list with thin citrus tick marks.
- **Content:**
  - Vetted, trained, fairly paid professionals.
  - Eco-considered, fragrance-light products.
  - Flat, transparent pricing — no surprises.
  - **The Lustra Guarantee** — not delighted? We re-clean within 24 hours, free.
  - One account, every city.
- Eyebrow `04 / WHY US`.

### 8.8 Pricing teaser
- **Layout:** an editorial price table (see §9.2), not 3 cards. Show "from" prices by home size and a frequency toggle (one-off / weekly / biweekly / monthly) that updates numbers with the savings shown.
- CTA: "Get your exact price →" (opens quote).
- Eyebrow `05 / PRICING`. Heading: "Honest pricing. No surprises."

### 8.9 Testimonials / social proof
- **Layout:** one large pull-quote in Fraunces at a time (carousel with quiet controls), name + city + star rating in mono. Optional small portrait.
- **Sample:**
  > "I've never written a review for a cleaning service. Then I met Lustra."
  > — Mara K., **Berlin** · ★★★★★
- Plus a row of press/partner logos (grayscale) if available.
- Eyebrow `06 / WORD OF MOUTH`.

### 8.10 Sustainability strip
- **Layout:** Sage-tinted section, image of refillable bottles / plant-based products (citrus object present).
- **Copy:** Heading "Clean shouldn't cost the earth." Body: "Plant-based, fragrance-light products. Refillable systems. Low-water methods. Carbon-considered routing." CTA: "Our commitments →".
- Eyebrow `07 / CONSCIENCE`.

### 8.11 Coverage — city marquee
- **Layout:** slow marquee of city names in large Fraunces, citrus underline on the cities "live now." Heading: "Now cleaning in [12] cities. More soon."
- CTA: "Find your city →".
- Eyebrow `08 / WHERE`.

### 8.12 Final CTA
- **Layout:** full Ink section, single oversized Display line, one citrus pill.
- **Copy:** "Your best space is sixty seconds away." · CTA: "Get an instant quote".

### 8.13 Footer
- As §7.3. Above footer: newsletter capture — "The Journal — notes on living well in a cared-for space." [email field + arrow].

---

## 9. Inner page specs

### 9.1 Services overview + detail
- **Overview (`/services`):** the menu from §8.4 expanded; each row links to detail.
- **Detail (`/services/[slug]`):** hero (service name + one-liner + "from" price + quote CTA), "what's included" checklist, "not included / add-ons," a transformation for that service, FAQ specific to it, price table, CTA. Consistent template across services.

### 9.2 Pricing (`/pricing`)
- **Editorial price table**, not card-walls. Rows = home size (Studio, 1–2 bed, 3–4 bed, 5+ / Home); columns = frequency (One-off, Monthly, Biweekly, Weekly) with weekly cheapest per visit. Frequency toggle highlights savings.
- **Add-ons** listed as a typographic menu (Inside oven, Inside fridge, Interior windows, Laundry & fold, Inside cabinets) with prices.
- **Guarantee + "what affects your price"** explainer. Multi-currency aware (auto + selector).
- CTA throughout: "Get your exact price" → quote flow.

### 9.3 How it works (`/how-it-works`)
- Expand §8.6 with detail: vetting process, what to expect on the day, products used, key handling/security, rescheduling, the guarantee. Reassurance-focused. CTA at the end.

### 9.4 Transformations (`/transformations`)
- Full gallery; filter by room + city. Each item is a before/after (squeegee or split). Lazy-loaded. Strong social-proof page; ends with CTA.

### 9.5 About (`/about`)
- Brand story (cleaning as craft + hospitality), the standard, **the people** (fair pay, training, respect), values, sustainability link. Editorial layout with real photography. Careers teaser.

### 9.6 Sustainability (`/sustainability`)
- Products, methods, packaging/refills, logistics, any certifications/targets. Honest and specific (avoid greenwashing; use real claims only).

### 9.7 Cities (`/cities`, `/cities/[city]`)
- **Index:** searchable list/map of covered cities.
- **City page:** localized hero ("Premium cleaning in [Lisbon]"), local currency/pricing, availability, local reviews, local FAQ, structured data (LocalBusiness). Primary SEO surface for "[city] cleaning service."

### 9.8 Contact / tailored quote (`/contact`)
- Two paths: **"Book online" (→ quote)** and **"Request a tailored quote"** (commercial/host) — a short form: name, company, property type, properties count, locations, frequency, message. Plus support email, phone, hours, and live-chat entry.

### 9.9 Legal
- Privacy, Terms, Cookies. Clean readable type; region-aware (GDPR/CCPA). Cookie consent banner (minimal, on-brand).

---

## 10. Component library

| Component | Notes / states |
|---|---|
| **Button — Primary** | Pill, Citrus bg / Ink text; hover → Ink bg / Citrus text; focus ring (2px Ink offset); disabled 40%. |
| **Button — Secondary** | Text + arrow, Ink; animated citrus underline on hover. |
| **Button — Ghost (on Ink)** | Bone outline → fills Bone on hover. |
| **Nav bar** | Transparent → solid-on-scroll; mobile full-screen overlay. |
| **Service row** | Name / desc / price / arrow; hover thumbnail + bg flip. |
| **Price table** | Editorial rows, frequency toggle, savings badge (citrus). |
| **Before/After (Squeegee)** | Drag handle + toggle fallback; reduced-motion static; lazy images. |
| **Quote stepper** | Progress bar, step dots (mono numbers), back/next, save-resume. |
| **Form inputs** | 2px radius, Stone border, Ink focus border + subtle citrus glow; label always visible; inline validation; clear error/success. |
| **Select / stepper (qty)** | For bedrooms/bathrooms; large tap targets. |
| **Date/time picker** | Calendar + slot grid; timezone-aware; disabled slots muted. |
| **Card (sparingly)** | Sharp corners, hairline border, used for reviews/journal only. |
| **Testimonial quote** | Fraunces pull-quote, mono attribution, quiet controls. |
| **Marquee** | Pauses on hover; reduced-motion → static wrap. |
| **Accordion (FAQ)** | Hairline rows, citrus + / − indicator, smooth height. |
| **Modal / drawer** | Booking + auth; `--shadow-float`; focus-trapped; ESC + overlay close. |
| **Toast** | Booking confirmed / errors; top-right; auto-dismiss. |
| **Currency/Lang switch** | Compact dropdown in nav + footer; persists choice. |
| **Cookie banner** | Minimal bottom bar; accept/manage. |

All interactive components: visible focus states, 44px min tap target, ARIA labels, keyboard operable.

---

## 11. Conversion & trust system

- **Two CTAs, one job:** "Get an instant quote" everywhere for residential/short-let; "Request a tailored quote" for commercial. Persistent CTA in nav + sticky mobile bar.
- **The Lustra Guarantee:** "Not delighted? We'll re-clean within 24 hours, free." Repeat near every price + CTA.
- **Transparent pricing:** show "from" prices early; never hide price behind a form. Instant exact price at end of quote.
- **Trust signals (distributed, not clustered):** insured & bonded, background-checked, ratings + count, real reviews, eco claims, cities served, cleans completed, press logos.
- **Risk reducers:** free rescheduling window, secure payment, "no lock-in" on subscriptions, clear cancellation.
- **Tasteful scarcity only:** real availability ("3 slots left this week in [city]") — never fake countdowns.
- **Social proof placement:** trust bar (top), reviews (mid), city/volume stats (lower), guarantee (near CTAs).

---

## 12. Functional requirements

### 12.1 Instant quote + booking flow (`/quote`) — core
Multi-step, one decision per screen, progress shown, **save & resume**, currency auto-detected.

1. **Service type** — Home / Deep / Move in-out / Short-let / Office(→ tailored).
2. **Property details** — bedrooms, bathrooms, approx size (sqft/sqm by locale), condition.
3. **Extras / add-ons** — oven, fridge, interior windows, laundry, cabinets (each priced).
4. **Frequency** — one-off / weekly / biweekly / monthly (show per-visit savings).
5. **Date & time** — calendar + slot grid, timezone-aware, earliest availability surfaced.
6. **Location & contact** — address (autocomplete), access notes, name, email, phone.
7. **Instant price + confirm** — itemized price, guarantee restated, account create optional, **pay (Stripe)** or **request callback** (commercial).
8. **Confirmation** — summary, calendar add, what-to-expect, manage link; transactional email/SMS.

**Requirements:** real-time pricing engine (size × service × frequency × add-ons × locale), inline validation, abandoned-quote save + email recovery (Phase 1), address autocomplete, mobile-first.

### 12.2 Other functional requirements
- **Payments:** Stripe (cards, Apple/Google Pay); multi-currency; subscriptions for recurring.
- **Scheduling:** availability by city/slot; reschedule/cancel within policy window.
- **Accounts (Phase 1):** bookings, invoices, saved addresses, payment methods, multi-property (hosts).
- **Notifications:** transactional email + optional SMS (confirm, reminder, completion, review request).
- **Reviews:** post-clean review capture; display verified reviews.
- **CMS:** services, pricing rules, testimonials, transformations, cities, journal editable without code (headless CMS).
- **Contact/commercial:** tailored-quote form → CRM/email; spam protection.
- **Newsletter:** capture → email platform.
- **Gift cards (Phase 1):** purchase + redeem.

---

## 13. Global / i18n requirements

- **Languages:** launch **EN**; Phase 1 add **ES, FR, DE** (then PT, JA, AR). **AR requires RTL** layout support — build layout direction-aware from day one.
- **Currency:** auto-detect by geo/locale + manual selector; localized price formatting and rounding; per-region price tables.
- **Formats:** dates, times, numbers, and **units (sqft vs sqm)** localized.
- **Scheduling:** timezone-aware per city.
- **Legal/compliance:** GDPR (EU), CCPA (US), cookie consent; region-specific terms.
- **Content:** translatable strings (no hard-coded copy); per-city landing pages for local SEO.
- **Performance for global:** CDN edge delivery; image optimization; minimal JS on first load.

---

## 14. Technical requirements

### 14.1 Recommended stack
- **Frontend:** Next.js (App Router) + TypeScript + React.
- **Styling:** Tailwind CSS configured with the §6 tokens (or vanilla CSS + custom properties). 
- **Motion:** Lenis (smooth scroll) + GSAP/ScrollTrigger (pins, reveals, squeegee) — or Framer Motion. Always gate on `prefers-reduced-motion`.
- **CMS:** headless — Sanity / Payload / Contentful.
- **Booking/pricing:** custom multi-step + pricing engine; **Stripe** for payments/subscriptions; scheduling via custom or Cal.com.
- **i18n:** `next-intl` or `i18next`.
- **Forms/email:** server actions/API + Resend/Postmark (transactional); hCaptcha (spam).
- **Hosting:** Vercel (or similar edge platform); images via `next/image` + CDN.
- **Analytics:** GA4 + privacy-friendly (Plausible/Fathom); event tracking (§15).

### 14.2 SEO
- SSR/SSG for all marketing pages; semantic HTML; unique title/meta/OG per page; canonical URLs; XML sitemap; robots.
- **Structured data (JSON-LD):** `LocalBusiness`/`Service` (per city), `Review`/`AggregateRating`, `FAQPage`, `BreadcrumbList`.
- Per-city landing pages targeting "[city] cleaning service" + service combinations.
- Fast, mobile-first, clean URLs (§7.1).

### 14.3 Accessibility (WCAG 2.2 AA)
- Color contrast per §5.2; visible focus states; full keyboard operability; logical heading order; alt text on all imagery; ARIA on custom widgets (squeegee, stepper, accordions, carousels); `prefers-reduced-motion` honored; forms with labels + clear errors; 44px tap targets; skip-to-content link.

### 14.4 Performance budgets (Core Web Vitals = "Good")
- **LCP < 2.5s**, **CLS < 0.1**, **INP < 200ms**.
- Preload fonts (subset; `font-display: swap`); lazy-load below-fold + gallery images; responsive `srcset`/AVIF/WebP; code-split heavy motion libs; defer non-critical JS; cap hero media weight.

### 14.5 Security & privacy
- HTTPS only; PCI handled via Stripe (no raw card data); secure auth (Phase 1) with hashing + rate limiting; GDPR/CCPA data handling + deletion; cookie consent; form spam protection.

---

## 15. Analytics & measurement
Track the funnel end-to-end:
- `cta_click` (location, label) · `quote_start` · `quote_step_complete` (step #) · `quote_price_shown` · `booking_complete` (value, service, frequency, currency) · `quote_abandon` (last step) · `tailored_quote_submit` · `newsletter_signup` · `currency_change` / `language_change` · `transformation_view`.
- Funnels: visitor → quote_start → booking_complete; per-city + per-device dashboards. Heatmaps (Clarity/Hotjar) on home + quote.

---

## 16. Build roadmap

**Phase 0 — MVP (launch):**
Home, Services (overview + detail), Pricing, How it works, Transformations, About, Sustainability, Contact, Quote→Booking (one market, one currency, EN), trust system, analytics, responsive, accessibility, SEO basics + structured data.

**Phase 1:**
Multi-currency + ES/FR/DE, per-city landing pages, accounts/dashboard + invoices, subscriptions management, reviews integration, abandoned-quote recovery, gift cards, Journal (blog).

**Phase 2:**
Host/commercial portal (multi-property, invoicing), referral + loyalty, full i18n incl. **RTL (AR)**, mobile app, advanced scheduling/route optimization.

---

## 17. Assumptions & open questions
1. **Launch cities + currencies?** (Drives i18n + pricing tables.)
2. **Cleaners = employees or marketplace?** (Affects vetting/legal claims + pricing.)
3. **Photography budget** — commissioned vs licensed vs AI-photoreal?
4. **Payment provider** — Stripe assumed; confirm regional support.
5. **Scheduling** — build vs Cal.com?
6. **Legal entity per region** — who holds liability/insurance claims?
7. **Real review source** — native capture or import (Trustpilot/Google)?
8. **Brand name final** — Lustra confirmed, or use an alternate?

---

## 18. Appendix

### 18.1 Copy bank (ready to use)
- **Hero:** "The clean you feel the moment you walk in."
- **Alt heroes:** "Clean, like it was never lived in." · "We don't cut corners. We clean them."
- **Sub:** "Premium cleaning for considered spaces — vetted professionals, eco-considered products, booked in sixty seconds."
- **Trust bar:** "Insured & bonded · Background-checked pros · 4.9/5 across [40,000+] cleans · 24-hour re-clean guarantee."
- **Guarantee:** "Not delighted? We'll re-clean within 24 hours, free."
- **Sustainability:** "Clean shouldn't cost the earth."
- **Pricing:** "Honest pricing. No surprises."
- **Final CTA:** "Your best space is sixty seconds away."
- **Newsletter:** "The Journal — notes on living well in a cared-for space."

### 18.2 FAQ content (starter)
- **What products do you use?** "Plant-based, fragrance-light products that are tough on grime and gentle on your home. Allergy-sensitive on request."
- **Do I need to be home?** "No. Most clients share secure access notes — your key and home are handled with care."
- **What's included in a standard clean?** "[List rooms/tasks]. Deep tasks (oven, windows, fridge) are add-ons so you only pay for what you need."
- **Can I reschedule?** "Yes — free up to [24h] before your slot."
- **Pets?** "We love them. Tell us about them in your access notes."
- **The guarantee?** "If anything's not right, tell us within 24 hours and we'll re-clean the area, free."
- **Are cleaners vetted?** "Every Lustra professional is background-checked, trained, insured, and fairly paid."

### 18.3 Asset checklist
- Logo (wordmark + mark) in Ink/Bone/Citrus, SVG + favicon + app icon.
- 6–10 hero/interior photos (with citrus motif), 8–12 before/after pairs (by room + city), team/people shots, sustainability shots.
- Fonts loaded (Fraunces, Inter, Space Mono).
- Press/partner logos (grayscale).
- City list + local imagery.
- Legal copy (privacy, terms, cookies).

---

_End of PRD v1.0 — Lustra. Build it bold._
