import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SchemaOrganization } from "@/components/seo";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Sankofa Global | Cleaning, Maintenance & Contracting in Qatar",
        template: "%s | Sankofa Global",
    },
    description: "Sankofa Global - a Qatar-based multi-service company providing professional cleaning, maintenance, contracting, renovation, solar cleaning, energy solutions, equipment supply, and hospitality staffing across Doha and Qatar.",
    keywords: [
        // Brand signals
        "Sankofa Global", "Sankofa Global Qatar", "Sankofa Global Trading & Contracting",
        "Sankofa Global Services", "Sankofa Cleaning Qatar",
        // Primary service terms
        "Cleaning Company Qatar", "Maintenance Company Doha", "Hospitality Services Qatar",
        "Renovation Contractor Qatar", "Solar Cleaning Qatar", "Facility Management Qatar",
        // Industry-specific
        "Deep Cleaning Qatar", "AC Maintenance Doha", "Interior Fit-Out Qatar",
        // Location-based
        "Cleaning Services Doha", "Office Cleaning Qatar", "Equipment Supply Qatar",
        // Long-tail
        "Best Cleaning Company Qatar", "Reliable Maintenance Services Doha", "Energy Solutions Qatar"
    ],
    metadataBase: new URL('https://sankofaglobal.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Sankofa Global | Building Excellence Through Service",
        description: "A Qatar-based multi-service company for cleaning, maintenance, contracting, renovation, energy, and hospitality solutions.",
        url: 'https://sankofaglobal.com',
        siteName: 'Sankofa Global',
        locale: 'en_QA',
        type: 'website',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Sankofa Global - Building Excellence Through Service',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Sankofa Global",
        description: "Building Excellence Through Service in Qatar.",
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
            { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ScrollProgress />
                <SchemaOrganization />
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
