# MorganHuberty Personal Website

[![Vercel](https://vercelbadge.vercel.app/api/morganhuberty/personal-site)](https://personal-site.vercel.app)

A sleek, space-vibey portfolio that showcases **Morgan Huberty’s** research, projects, and writing in computer engineering.
Built with **Next.js 14** and **shadcn/ui**, the site syncs daily with Morgan’s Substack, serves an RSS feed, and provides a one-click newsletter signup—everything recruiters and research advisers need in one place.

---

## ✨ Features

- **Hero Landing Page** with light/dark space theme toggle
- **About & Bio** (900-word professional profile)
- **Projects** grid with MDX detail pages
- **Research** section linking papers, posters, and datasets
- **Blog** mirrored from Substack + daily-generated RSS feed
- **Newsletter Signup** powered by Substack
- **PDF Resume** download & inline viewer
- **Daily Vercel Cron** for blog refresh and RSS build
- **SEO Optimized** (`JSON-LD BlogPosting`, OpenGraph, meta tags)

---

## 🛠 Tech Stack

| Layer       | Choice                                   |
|-------------|-------------------------------------------|
| Framework   | Next.js 14 (App Router)                  |
| UI & Style  | shadcn/ui · Tailwind CSS                 |
| Icons       | lucide-react                             |
| Content     | MDX · Substack RSS                       |
| Deploy      | Vercel (CI/CD, Cron, Preview URLs)       |
| Dev Assist  | Cursor AI                                |
| Lint/Test   | ESLint · TypeScript • next-strict-mode   |

---

## 📂 Project Structure

```
.
├─ app/                # Next.js app router pages
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ blog/
│  ├─ projects/
│  └─ …
├─ components/         # Reusable UI components
├─ data/               # Static JSON/TS data (projects list, etc.)
├─ lib/                # Helper utilities (RSS parser, Substack fetch)
├─ public/             # Static assets
├─ styles/             # Tailwind base & globals
├─ pages/api/          # Serverless functions (revalidate-blog, newsletter)
├─ .github/workflows/  # CI lint/build pipeline
├─ .env.example        # Environment variable template
└─ README.md
```

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/morganhuberty/personal-site.git
cd personal-site
pnpm install   # or npm install
```

### 2. Environment Vars

Copy `.env.example` to `.env.local` and fill in:

```bash
SUBSTACK_RSS_URL=
SUBSTACK_SIGNUP_ENDPOINT=
CRON_SECRET=
```

### 3. Development Server

```bash
pnpm dev   # http://localhost:3000
```

### 4. Lint, Type-Check, & Build

```bash
pnpm lint          # ESLint
pnpm type-check    # TypeScript
pnpm build         # Production build
```

---

## ⚙️ Deployment

The repo is **linked to Vercel**.

1. Push to **`main`** → Vercel deploys to Production.
2. Push to any other branch → Vercel creates a Preview URL in the GitHub PR.
3. A daily Cron job (`0 3 * * *`) hits `/api/revalidate-blog` to refresh the blog and rebuild `/rss.xml`.

> **Tip:** Enable branch protection + required status checks (`lint-test-build`) in GitHub for safer merges.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Credits

- [shadcn/ui](https://ui.shadcn.com) for elegant React components
- [Lucide](https://lucide.dev) for iconography
- [Cursor](https://cursor.so) for AI-powered pair programming

---

## 👋 Author

**Morgan Huberty** – [LinkedIn](https://linkedin.com/in/your-profile) · [GitHub](https://github.com/morganhuberty)
