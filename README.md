# WasteCure Limited Company Website

A professional multi-page website for WasteCure Limited Company, a Ghanaian waste management and recycling startup operating in Kwabre East Municipality, Kumasi.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York)
- **Database**: Prisma ORM (SQLite for dev, Turso/Postgres for production)
- **AI Chatbot**: z-ai-web-dev-sdk (streaming responses)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services preview, stats, featured blog |
| `/about` | Company story, timeline, team |
| `/services` | 4 service lines, process steps, waste types guide |
| `/sustainability` | Environmental commitment, impact stats, comparison table |
| `/blog` | Blog listing with category filter |
| `/blog/[slug]` | Individual article pages with sources |
| `/get-involved` | Volunteer signup form |
| `/contact` | Contact form, pickup request wizard, Google Map |

## Features

- Multi-page architecture with dropdown navigation
- AI chatbot with streaming responses (Z.AI SDK)
- Multi-step pickup request wizard
- Volunteer signup with dedicated API
- Admin dashboard (password protected) with 7 tabs
- In-app notification system for staff
- English / Twi language toggle
- Dark mode toggle
- Cookie consent banner
- Privacy Policy and Terms of Service dialogs
- Print-friendly styles
- SEO: sitemap.xml, robots.txt, manifest.webmanifest, JSON-LD structured data
- Blog with 8 authentic, well-referenced articles

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | GET, POST | Contact form submissions |
| `/api/pickup` | GET, POST | Pickup request management |
| `/api/volunteer` | GET, POST | Volunteer signups |
| `/api/newsletter` | GET, POST | Newsletter subscriptions |
| `/api/notifications` | GET, PATCH | Staff notification system |
| `/api/chat` | GET, POST | AI chatbot (non-streaming) |
| `/api/chat-stream` | POST | AI chatbot (streaming SSE) |
| `/api/gallery` | GET | Gallery images |
| `/api/instagram` | GET | Instagram feed (cached) |

## Local Development

### Prerequisites

- Node.js 18+ or Bun
- npm / bun / pnpm

### Setup

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd wastecure-website
   bun install  # or npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set your `ZAI_API_KEY` (get it from your Z.AI dashboard or the `.z-ai-config` file).

3. **Set up the database:**
   ```bash
   bun run db:push
   ```

4. **Run the development server:**
   ```bash
   bun run dev
   ```
   Open http://localhost:3000

## Production Deployment on Vercel

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: WasteCure website"
git branch -M main
git remote add origin https://github.com/yourusername/wastecure-website.git
git push -u origin main
```

### Step 2: Set Up Database (Turso - recommended)

SQLite does not work on Vercel's serverless platform. Use Turso (SQLite-compatible):

1. **Create a Turso account** at https://turso.tech (free tier available)

2. **Install Turso CLI:**
   ```bash
   curl -sSfL https://get.tur.so/install.sh | bash
   ```

3. **Authenticate:**
   ```bash
   turso auth login
   ```

4. **Create a database:**
   ```bash
   turso db create wastecure
   ```

5. **Get the database URL:**
   ```bash
   turso db show wastecure --url
   ```

6. **Create an auth token:**
   ```bash
   turso db tokens create wastecure
   ```

7. **Update Prisma schema** - change the datasource in `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "libsql"
     url      = env("DATABASE_URL")
   }
   ```

8. **Push the schema:**
   ```bash
   turso db shell wastecure
   # Or run locally with the Turso URL set in .env:
   bun run db:push
   ```

### Step 3: Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub

2. Click **"Add New Project"** and select your `wastecure-website` repository

3. Vercel auto-detects Next.js - keep the default settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `bun install` or `npm install`

4. **Add Environment Variables** (critical step):
   Go to Settings > Environment Variables and add:

   | Key | Value |
   |-----|-------|
   | `DATABASE_URL` | `libsql://wastecure-xxx.turso.io` (from Step 2.5) |
   | `DATABASE_AUTH_TOKEN` | (from Step 2.6, Turso token) |
   | `ZAI_API_KEY` | Your Z.AI API key |
   | `ZAI_BASE_URL` | `https://api.chatglm.cn` |
   | `RESEND_API_KEY` | Your Resend API key (see Email Delivery below) |
   | `EMAIL_FROM` | `WasteCure Website <noreply@wastecure.org>` |
   | `EMAIL_TO` | `wastecureltd@gmail.com` |

5. Click **Deploy**

6. Wait for the build to complete (2-3 minutes)

7. Your site is live at `https://wastecure-website.vercel.app` (or your custom domain)

### Step 4: Custom Domain

1. In Vercel dashboard, go to **Settings > Domains**
2. Add `wastecure.org` (the client's confirmed domain)
3. Update DNS records as instructed by Vercel
4. The `metadataBase` URL in `src/app/layout.tsx` is already set to `https://wastecure.org`

## Email Delivery (contact/pickup/volunteer/newsletter forms)

Form submissions are always saved to the database and visible in the admin
dashboard's Notifications tab. To also have them emailed to staff:

1. Create a free account at https://resend.com
2. Verify your sending domain (e.g. `wastecure.org`) under Resend's Domains
   settings, or use `onboarding@resend.dev` for quick testing
3. Create an API key in Resend and set `RESEND_API_KEY` in your environment
4. Set `EMAIL_FROM` (must be on the verified domain) and `EMAIL_TO`
   (where submissions should land - defaults to `STAFF_EMAIL`/`SITE.email`)

Without `RESEND_API_KEY` set, the site still works fully - submissions just
won't trigger an email, only the in-app notification.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | Database connection string (SQLite path for dev, Turso URL for prod) |
| `DATABASE_AUTH_TOKEN` | Prod only | Turso auth token (production only) |
| `ZAI_API_KEY` | Yes | Z.AI API key for the chatbot |
| `ZAI_BASE_URL` | No | Z.AI API base URL (defaults to https://api.chatglm.cn) |
| `RESEND_API_KEY` | No | Enables real email delivery for form submissions (see above) |
| `EMAIL_FROM` | No | Sender address for outgoing emails |
| `EMAIL_TO` / `STAFF_EMAIL` | No | Where form notifications are sent (defaults to `SITE.email`) |

## Admin Dashboard

- **URL**: Click "Staff" in the footer
- **Password**: `wastecure2024` (change in `src/components/site/admin-dashboard.tsx`)
- **Tabs**: Overview (stats), Enquiries, Pickups, Volunteers, Newsletter, Notifications, Chat

## Content Management

- **Services**: Edit in `src/lib/site-data.ts` (SERVICES array)
- **Blog articles**: Edit in `src/lib/articles.ts` (ARTICLES array)
- **Milestones**: Edit in `src/lib/site-data.ts` (MILESTONES array)
- **Team**: Edit in `src/lib/site-data.ts` (TEAM array)
- **Contact info**: Edit in `src/lib/site-data.ts` (SITE object)
- **Images**: Replace URLs in `src/lib/site-data.ts` (IMAGES object)

## Design Rules

- No em dashes (use regular hyphens)
- No emojis
- No kicker labels (small uppercase text above headings)
- No icon badges (colored circles containing icons)
- Brand colors: forest green / leaf green (no blue/indigo)
- All images are real photographs (no AI-generated images)

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run db:push` | Push Prisma schema to database |
| `bun run db:generate` | Generate Prisma client |

## License

(c) 2024 WasteCure Limited Company. All rights reserved.
