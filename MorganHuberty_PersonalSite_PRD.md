# Product Requirements Document (PRD)

## Project: Morgan Huberty – Personal Website
**Author / Dev Team:** Morgan Huberty (solo) + Cursor AI assistant  
**Target Launch:** **15 May 2025**

---

## 1. Purpose & Vision

> *"Morgan Huberty’s hub for research, projects, ideas, and more in computer engineering."*

This website will serve as a polished, searchable portfolio and contact gateway, designed primarily for **industry recruiters** and **research advisors**. Secondary audiences—such as peers and podcast listeners—should also find the content valuable and engaging. The primary objective is to drive career-related outreach and visibility.

---

## 2. Success Metrics

| Goal                    | KPI                                                        |
|-------------------------|-------------------------------------------------------------|
| Recruiter / PI interest | ≥ 3 qualified inquiries in the first 3 months               |
| Research collaboration  | ≥ 1 lab or project invitation by Fall 2025                 |
| Content engagement      | ≥ 2 min average session duration, ≤ 60 % bounce rate        |
| SEO                     | First‑page ranking for ≥ 3 target keywords within 6 months  |
| Newsletter growth       | ≥ 50 new sign‑ups in the first 6 months                    |

---

## 3. Personas

1. **Hardware Hiring Manager** – Reviews projects and resume, downloads PDF, and sends outreach quickly.  
2. **University PI** – Reviews research content and blog posts to assess thought leadership.  
3. **Curious Peer** – Explores projects and blog, follows social links, and joins the newsletter.

---

## 4. Scope (MVP)

| Section              | Key Features                                                                                                                       |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| **Home**             | Hero headline; CTA "View Projects"; opalescent gradient background; dark-space toggle.                                              |
| **About / Bio**      | 900-word bio; professional headshot; quick-stats grid (education, skills, interests).                                               |
| **Projects**         | Card grid (shadcn) rendered from `/data/projects.ts`; placeholder state until real content is added.                                |
| **Research**         | List of papers and posters with citation export; links to datasets or GitHub repositories.                                          |
| **Blog**             | Substack embed (RSS → JSON → static render); "Read on Substack" CTA; **site-wide RSS feed** available at `/rss.xml` (daily update). |
| **Newsletter**       | Embedded Substack subscribe form or POST API integration with inline validation and success toast.                                  |
| **Resume**           | Downloadable PDF (`MorganHuberty_Resume.pdf`); mobile-friendly inline PDF viewer.                                                   |
| **Contact & Social** | Interactive icon buttons (GitHub, LinkedIn, Twitter, Email) that open in new tabs.                                                 |
| **Global**           | Responsive navigation bar; dark-mode toggle; scroll-to-top arrow.                                                                   |

*Out of scope (v1):* Comment system, AI chatbot, multi-language support, headless CMS.

---

## 5. Functional Requirements

| ID   | Requirement                                                                                           |
|------|--------------------------------------------------------------------------------------------------------|
| F‑01 | Persist user-selected dark-mode preference using `localStorage`.                                       |
| F‑02 | Substack blog posts refresh daily via **Vercel Cron (03:00 UTC)** using ISR for `/` and `/blog`.       |
| F‑03 | Social icons open external profiles in new tabs with `rel="noopener"`.                                 |
| F‑04 | Resume download uses `Content-Disposition: attachment`.                                                |
| F‑05 | Projects list supports individual MDX pages with slug-based routing.                                   |
| F‑06 | Newsletter form performs client-side validation, POSTs to Substack API, and shows user feedback.       |
| F‑07 | Generate and serve **RSS feed** (`/rss.xml`) from site blog during daily build process.                |
| F‑08 | Add **JSON-LD `BlogPosting` structured data** to each blog post page for SEO-rich snippets.            |

---

## 6. Non-Functional Requirements

| Category        | Specification                                                                                                                                                                                                                 |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Performance     | ≤ 2 s LCP on 4G networks; ≤ 250 kB total JS payload (gzipped) for initial load.                                                                                                                                                |
| Accessibility   | Compliant with WCAG 2.1 AA standards—semantic HTML, accessible contrast, keyboard navigation, and focus outlines.                                                                                                             |
| SEO             | Per-page `<title>` and meta descriptions; OpenGraph tags; structured data for `Organization`, `Person`, and `BlogPosting`; focus keywords include: Johns Hopkins University, robotics, AI, hardware, software engineering. |
| Analytics       | Optional Google Analytics v4 with IP anonymization; cookie consent banner only if GA is enabled; custom events for newsletter signups.                                                                                       |
| Security        | All outbound links use `https`; Content Security Policy headers enforced via Next.js; honeypot or rate-limiting enabled for newsletter forms.                                                                                 |
| Maintainability | Site content stored in MDX or JSON files; adding new content does not require code changes to components.                                                                                                                     |

---

## 7. Information Architecture

```
/
├─ /projects/[slug]
├─ /research
├─ /blog        – Substack feed
├─ /newsletter  – Signup form
├─ /rss.xml     – Daily-generated RSS feed
├─ /resume
└─ /contact
```

---

## 8. Tech Stack & Tooling

| Layer      | Choice                       | Rationale                                          |
|------------|------------------------------|----------------------------------------------------|
| Framework  | **Next.js 14 (App Router)**  | Modern routing, ISR, Vercel-native support         |
| UI         | **shadcn/ui** + TailwindCSS  | Robust styling and customizable component set      |
| Icons      | Lucide                       | Minimalist, scalable line icon system              |
| Content    | MDX & RSS fetch              | Static build with dynamic content capabilities     |
| Hosting    | **Vercel**                   | Integrated CI/CD, Cron jobs, and preview builds    |
| Dev Assist | Cursor                       | Assisted code generation and testing               |
| VCS        | GitHub                       | Version control with `main` auto-deploy to Vercel  |

---

## 9. Design System

1. **Light Theme** – Off-white base with subtle opalescent pastel overlays.  
2. **Dark Theme** – Space-black background (#050514) with neon accent colors.  
3. **Typography** – `Inter` for body text and `Space Grotesk` for headings using a 1.25× modular scale.  
4. **UI Components** – shadcn-based buttons with inner or outer glow effects depending on theme.  
5. **Motion** – 200 ms ease-out transitions; GPU-optimized parallax starfield background in dark mode.

Design tokens and theme configurations are maintained in `tailwind.config.ts` for easy customization.

---

## 10. Timeline (Back-Planned from 15 May Launch)

| Date       | Task                                                                      | Owner           |
|------------|---------------------------------------------------------------------------|-----------------|
| 7 May      | PRD finalization                                                          | Morgan          |
| 8–9 May    | Project scaffold; shadcn integration; light theme design                  | Morgan + Cursor |
| 10–11 May  | Dark theme and hero design; resume section                                | Morgan          |
| 12 May     | Substack feed integration; newsletter form; daily Cron job implementation | Morgan          |
| 13 May     | Generate RSS feed; inject JSON-LD; accessibility audit                    | Morgan          |
| 14 May     | SEO meta tags; domain mapping; Vercel deployment QA                       | Morgan          |
| 15 May     | Final polish and **Go Live**                                              | Morgan          |

*One‑day buffer for any unexpected blockers.*

---

## 11. Risks & Mitigations

| Risk                      | Likelihood | Impact | Mitigation                                           |
|---------------------------|------------|--------|------------------------------------------------------|
| Substack API limits       | Low        | Medium | Cache results; allow manual rebuild if needed        |
| Starfield performance lag | Medium     | Medium | Use static assets or off‑main‑thread canvas          |
| Newsletter spam           | Medium     | Low    | Add client-side validation and double opt‑in         |
| RSS build failure         | Low        | Low    | Validate during CI; alert via email or Slack         |
| Feature creep pre‑launch  | High       | High   | Freeze MVP scope; push extras to post‑launch backlog |

---

## 12. Open Questions

- Should project additions auto-trigger a deployment (e.g., via GitHub Actions)?  
- Should Cron/job failures or RSS issues trigger Slack/email alerts?  
- Preferred timezone for analytics reporting?

---

## 13. Future Enhancements (Post‑v1 Backlog)

1. Headless CMS (e.g., Sanity) for content management without code edits.  
2. AI chat widget for site-based Q&A (“Ask about my projects”).  
3. Automatic theme switching based on user's system preferences.

---

## ✅ Sign-Off

**Sleek, space‑vibey, recruiter‑ready — with daily content sync, SEO‑friendly feeds, and structured data baked in.**
