import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import AboutContent from "./AboutContent";

export const metadata = constructMetadata({
    title: "About Us | Qatar's Trusted Multi-Service Company",
    description: "Learn about Sankofa Global - a Qatar-based multi-service company. Discover our mission, vision, values, and commitment to professional cleaning, maintenance, contracting, and hospitality services across Qatar.",
    keywords: [
        "About Sankofa Global",
        "Cleaning Company Qatar",
        "Maintenance Company Doha",
        "Multi-Service Company Qatar",
        "Contracting Company Qatar",
        "Hospitality Services Qatar",
        "Trusted Service Provider Doha"
    ],
    canonical: "/about",
});

export default function AboutPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "About Us", url: `${COMPANY_INFO.website}/about` }
            ]} />
            <AboutContent />
        </>
    );
}
