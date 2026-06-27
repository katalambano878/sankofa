# Sankofa Global Website

A premium corporate website for **Sankofa Global Trading Contracting & Hospitality Services W.L.L.**, a Qatar-based multi-service company (cleaning, maintenance, contracting, renovation, solar cleaning, energy solutions, equipment supply, and hospitality staffing). Built with Next.js, Tailwind CSS, and Shadcn UI.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

-   `app/`: App Router pages and layouts.
-   `components/`: Reusable UI components and sections.
    -   `ui/`: Shadcn UI primitives.
    -   `layout/`: Navbar, Footer.
    -   `sections/`: Specific page sections (Hero, TrustBar, etc.).
-   `lib/`: Utilities, constants, form schemas, seo helpers.
-   `public/`: Static assets.

## Key Features

-   **Quote Request Form**: Located at `/request-quote` (Name, Phone, Email, Service Required, Project Location, Message).
-   **WhatsApp Integration**: Floating button + inline links across the site.
-   **SEO Optimized**: Metadata, Sitemap, JSON-LD Schema (localized for Qatar).
-   **Premium Design**: Custom Tailwind colors (Deep Navy & Gold), Glassmorphism, Animations.

## Branding

-   **Colors** live in `tailwind.config.ts` (`sankofa.*` tokens) and `app/globals.css` (CSS variables).
    -   Gold `#C8A15A`, Metallic Gold `#D8B36A`, Deep Navy `#071B35`, Midnight Blue `#0D2748`.
-   **Logo**: A text wordmark placeholder lives in `components/layout/Logo.tsx`. When the official logo
    is provided, drop the asset into `public/` (e.g. `public/logo.png`) and swap the inner markup of
    `Logo.tsx` for a `next/image`. The schema files already reference `/logo.png`.

## Configuration

### Company Details
Edit `lib/constants.ts` to update:
-   Company Name
-   Phone Number / WhatsApp
-   Email
-   Address / CR Number
-   Social Links (Facebook, Instagram)

### Environment Variables
Create a `.env.local` file for production keys:

```bash
# Google Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Search Console Verification (Optional)
NEXT_PUBLIC_GSC_VERIFICATION=your-verification-code
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
