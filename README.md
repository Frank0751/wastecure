# WasteCure website

Marketing site for WasteCure Limited Company (Kumasi, Ghana), live at
https://wastecure.org.

## Stack

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- Prisma with Supabase Postgres for form submissions and chat transcripts
- Resend for staff email notifications
- Z.ai (`glm-4.5-flash`) for the site assistant
- Cloudinary for photography; hosted on Vercel

## Run locally

```bash
npm install
cp .env.example .env   # then fill in the values
npm run dev
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | Yes | Supabase transaction pooler URL (port 6543, `?pgbouncer=true`) |
| `DIRECT_URL` | Yes | Supabase session pooler URL (port 5432), used for schema changes |
| `ADMIN_PASSWORD` | For the dashboard | Staff sign-in password, at least 8 characters. Unset means the dashboard stays closed. |
| `RESEND_API_KEY` | For email | Sends form notifications to staff |
| `EMAIL_FROM` | For email | Sender on a domain verified in Resend, e.g. `WasteCure Website <noreply@wastecure.org>` |
| `EMAIL_TO` | No | Recipient of notifications. Defaults to the address in `src/lib/site-data.ts` |
| `ZAI_API_KEY` | For the assistant | Without it the assistant replies with the phone number |

Supabase's direct connection host is IPv6-only and is not reachable from
Vercel; always use the pooler URLs.

## Where things live

- `src/lib/site-data.ts`: business details, services, team, statistics, gallery
- `src/lib/photos.ts`: the Cloudinary photo library. Every image on the site is
  WasteCure's own photography.
- `src/lib/articles.ts`: blog articles and their sources
- `src/app/api/*`: form endpoints. `POST` is public; `GET` (listing
  submissions) requires a staff session.
- `src/lib/admin-auth.ts`: staff sign-in (signed httpOnly cookie)

## Staff dashboard

Footer, "Staff sign-in". The password is checked on the server against
`ADMIN_PASSWORD`. Set a strong one in Vercel and share it only with staff.

## Database schema

Tables are defined in `prisma/schema.prisma`. After changing it:

```bash
npx prisma db push
```
