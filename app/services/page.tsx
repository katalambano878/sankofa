import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb, SchemaService } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import ServicesContent from "./ServicesContent";

export const metadata = constructMetadata({
    title: "Services | Cleaning, Maintenance, Contracting & More in Qatar",
    description: "Sankofa Global offers professional cleaning, maintenance, renovation & interior works, solar cleaning & energy solutions, equipment supply, and hospitality staffing across Doha and Qatar.",
    keywords: [
        // Primary service terms
        "Cleaning Services Qatar", "Maintenance Services Doha", "Renovation Contractor Qatar",
        "Solar Cleaning Qatar", "Facility Management Qatar",
        // Brand
        "Sankofa Global Services", "Sankofa Global Qatar",
        // Specific services
        "Deep Cleaning Qatar", "AC Maintenance Doha", "Interior Fit-Out Qatar",
        "Equipment Supply Qatar", "Housekeeping Services Qatar",
        "Plumbing Services Doha", "Painting Works Qatar",
        // Location-based
        "Cleaning Company Doha", "Maintenance Company Qatar", "Hospitality Staffing Qatar"
    ],
    canonical: "/services",
});

export default function ServicesPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Services", url: `${COMPANY_INFO.website}/services` }
            ]} />
            <SchemaService
                serviceType="Facility & Maintenance Services"
                serviceName="Multi-Service Solutions Qatar - Sankofa Global"
                description="Qatar-based multi-service company providing cleaning, maintenance, contracting, renovation, solar cleaning, energy solutions, equipment supply, and hospitality staffing for residential, commercial, industrial, and hospitality sectors."
                areaServed={["Qatar", "Doha", "Al Rayyan", "Al Wakrah", "Lusail"]}
                serviceOutput={{
                    name: "Professional Multi-Service Solutions",
                    description: "Cleaning, maintenance, renovation, solar cleaning, energy solutions, equipment supply, and hospitality staffing across Qatar"
                }}
            />
            <ServicesContent />
        </>
    );
}
