import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Our Services",
    description: "Comprehensive multi-service solutions including cleaning, maintenance, renovation, solar cleaning, energy solutions, equipment supply, and hospitality staffing across Qatar.",
    keywords: [
        "Cleaning Services Qatar",
        "Maintenance Services Doha",
        "Renovation & Interior Works",
        "Solar Cleaning Qatar",
        "Equipment Supply Qatar",
        "Hospitality Staffing Qatar",
        "Facility Management Qatar"
    ],
    canonical: "/services",
});

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

