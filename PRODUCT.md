# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally. Neither one is secondary.

- **Hiring side:** recruiters and engineering managers deciding whether to interview King for a full-time remote role. They usually arrive from a résumé, LinkedIn, or an application link and skim fast. They are checking seniority, stack fit, and whether the experience is real.
- **Freelance side:** founders and small businesses deciding whether to hire King for a build. They want to know he can take a product from idea to shipped across web, backend, and mobile, and how to reach him.

Both visitors are trying to answer the same question: "Can this person ship what I need?" Both finish by getting in touch, or by downloading the résumé to pass along.

## Product Purpose

This is the personal portfolio of King Joshua Montayre, a **Full Stack Developer** with 7+ years of professional experience (since 2018), based in Cebu City, Philippines, and working remotely. It turns his professional record and personal projects into enough evidence for a visitor to start a conversation by email, on LinkedIn, or by taking the résumé.

Success means a qualified visitor from either audience reaches out, or leaves with the résumé, after a short visit.

## Positioning

He is a full stack developer whose record shows four things together. A generic React developer's portfolio could not truthfully claim this combination:

1. **High-stakes real products.** A mobile app for an HIV prevention clinical study (NCT05111119). A rehabilitation incentive app that uses geofencing to verify attendance and prevent incentive fraud. A browser-based compliance application that replaced an Excel workflow (Lanturn). hivetracks.com, a hive management platform for beekeepers, where he built both frontend and backend. He has shipped across healthcare, fintech, e-commerce, and SaaS.
2. **Migrations and rebrands.** At Full Scale he scoped the AngularJS-to-React migration and trained developers who had never used React. At MountainDev he migrated a legacy React Native app to Expo SDK 52. He executed the Expertise.com full-site rebrand and is currently leading the GoRuck web rebrand (the Sandlot platform).
3. **Growth-aware frontend.** At Expertise.com: SEO-driven URL routing, Contentful page templating, A/B testing (he led the migration from Google Optimize to GrowthBook), and multi-step "journey" flows built for conversion. He contributed frontend engineering that supported Expertise.com's Forbes Advisor content partnership.
4. **Web plus mobile range.** One person covering frontend, backend (Node.js, REST, Prisma/PostgreSQL), and mobile (React Native/Expo), with DevOps fundamentals (CI/CD, Vercel, AWS).

## Operating Context

- Visitors usually arrive with the résumé or LinkedIn profile already open, so the site and the résumé are read side by side and must agree.
- The résumé PDF is a working artifact: hiring visitors download it to forward internally.
- Freelance visitors judge partly by live links. Every personal project has a deployed URL, and most have a public GitHub repo.
- Background with Japanese enterprise clients (Alliance Software, 2018–2020) and US-market companies shows he works across time zones and cultures.

## Capabilities and Constraints

- **Current stack (keep unless explicitly changed):** Vite, React 18, TypeScript, Tailwind CSS 3, and react-router-dom with a single `/` route. Deployed on Vercel with `@vercel/analytics`.
- **Contact (confirmed 2026-11-13):** there is no contact form. The owner removed it along with EmailJS. Visitors reach King by email at kmontayre07@gmail.com or on LinkedIn. The contact@montayrekj.dev mailbox is not in use and must not appear anywhere.
- **Résumé download:** `public/resume.pdf`, imported in the Hero.
- **Theme:** the site currently has a dark/light toggle stored in `localStorage`. This is existing behavior, not a binding commitment.
- **Title change (confirmed):** the site must lead with **Full Stack Developer** to match the résumé. "Frontend Developer" still appears in `index.html` `<title>`, the Header, the Hero, and About, and all of these are stale.
- **Unmerged exploration:** two git stashes named "animations" hold an earlier Three.js particle-network and GSAP revamp. It was never merged to `main`. It has no authority over future direction.
- **Terminology:** he is one person. Copy should say "I" or "me", never "we". The current contact success message says "We'll reach out", which is wrong.
- **Undecided:** which personal projects to feature and in what order, how professional work appears on the site (format and depth), and whether the dark/light toggle stays.

## Brand Commitments

- **Name:** King Joshua Montayre. "King" works in conversational copy.
- **Site and contact:** montayrekj.dev (site). Contact is kmontayre07@gmail.com and linkedin.com/in/king-joshua-montayre. github.com/montayrekj for code.
- **Voice:** first person singular. The current code-syntax wordplay (`Problem solver <coder>`, `My {dev} projects`) is **not binding**, and future work may replace it.
- **Existing marks:** `src/assets/logo.png`, `logo2.png`, and `mini-logo.png` are in use. They are not declared binding.

## Evidence on Hand

- **Résumé:** `public/resume.pdf` (2 pages). This is the source of truth for employment history. Roles: Full Stack Developer at MountainDev (Sep 2024–present), Frontend Developer at Expertise.com (May 2023–Sep 2024), Frontend Developer at Lanturn Pte Ltd (2021–May 2023), React Developer at Full Scale (2020–2021), Full Stack Developer at Alliance Software Inc. (2018–2020). Education: BS Computer Science, Cebu Institute of Technology – University, 2014–2018.
- **Professional work cleared to name at résumé level:** hivetracks.com, the HIV prevention clinical study app, the geofenced rehab incentive app, the Expo SDK 52 migration, the GoRuck/Sandlot rebrand, the Expertise.com SEO work, A/B testing, journey flows, the rebrand, and the Forbes Advisor partnership, the Lanturn compliance app, the Full Scale shopping-cart component library (private NPM and CDN) and AngularJS-to-React migration, and Alliance Software's Japanese enterprise projects.
- **Personal projects:** `src/constants/projects.ts` has 9 projects with screenshots in `src/assets/`: TopFrame (AI Instagram curator, Claude + Ollama), Dink Up (offline pickleball scoring PWA), TaraTakbo (running-route mapper, Google Maps/Mapbox/Turf.js), CTherapies, Let's Chat! (Firebase), Sample Ecommerce, React MUI, Dark Mode Toggle (CodePen), and Aesthetic Clock (CodePen). All have live links, and most have GitHub repos.
- **Portraits:** `src/assets/king-portrait.png` and `src/assets/king-portrait-outline.png`.
- **Tech icons:** `src/assets/languages/`.
- **Absences:** future work must not fabricate any of these.
  - There are no screenshots of professional or client work. Do not mock up private apps.
  - There are no testimonials, client quotes, or recommendations.
  - There are no quantified metrics beyond the résumé's own wording. The résumé says "100% client satisfaction rate" and "measurably improved organic search rankings", with no figures. Do not invent percentages, traffic numbers, or user counts.
  - There are no client logos or permission to use company brand marks.
  - There are no press mentions or talks.

## Product Principles

1. **Proof over adjectives.** Every claim on the site must trace back to the résumé, a live link, or a public repo. Specifics like the clinical study, geofenced anti-fraud, and AngularJS-to-React do the persuading. Generic skill praise does not.
2. **Two readers, one pass.** A hiring manager and a freelance client should both reach "yes, contact him" without the site choosing one of them and burying the other.
3. **Professional record is the main case.** Shipped work at real companies is the strongest evidence. Personal projects show range, initiative, and current curiosity, such as AI tooling and PWAs.
4. **Range told as one story.** Full stack, mobile, growth engineering, and migrations should read as one developer's range, not as an inventory of tech logos.
5. **The site is a work sample.** For someone selling frontend craft, the portfolio's own performance, responsiveness, and accessibility count as evidence too.
