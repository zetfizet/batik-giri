# Batik Giri — Next.js + TypeScript

Static multi-page site for the Batik Giri educational tourism program, built with Next.js App Router and TypeScript. `next build` exports the site to `out/` for static hosting.

## Run locally

1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL shown in the terminal.

## Build static site

Run `npm run build`. Upload the generated `out/` directory to Cloudflare Pages, Netlify, Vercel, or another static host.

## Content updates

Site contact and map settings are in `src/data/site.json`. Add the official WhatsApp number in international format without a leading plus (format: 62XXXXXXXXXX). Keep it empty until approved; WhatsApp buttons then lead to the contact page.

Motifs, packages, activities, facilities, and gallery labels live in their corresponding JSON files under `src/data/`. Update those files instead of editing page components. Keep unverified culture content marked for review. Motif stories currently display “Segera hadir” until confirmed. Photos use a neutral CSS placeholder until approved local images and publication permissions are available.

Before publishing, replace `batikgiri.example` in `app/layout.tsx`, `public/robots.txt`, and `public/sitemap.xml` with the final domain. Add official social links, image assets, operating information, and partner-approved credits.
