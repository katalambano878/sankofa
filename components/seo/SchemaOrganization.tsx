import { COMPANY_INFO } from "@/lib/constants";

interface SchemaOrganizationProps {
    additionalType?: string[];
    foundingDate?: string;
    numberOfEmployees?: string;
    slogan?: string;
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
}

export default function SchemaOrganization({
    additionalType,
    foundingDate,
    numberOfEmployees,
    slogan = COMPANY_INFO.tagline,
    aggregateRating
}: SchemaOrganizationProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${COMPANY_INFO.website}#organization`,
        "name": COMPANY_INFO.name,
        "legalName": COMPANY_INFO.legalName,
        "alternateName": COMPANY_INFO.alternateName,
        "url": COMPANY_INFO.website,
        "logo": `${COMPANY_INFO.website}/logo.png`,
        "slogan": slogan,
        "description": COMPANY_INFO.description,
        "knowsAbout": [
            "Cleaning Services",
            "Cleaning Company Qatar",
            "Maintenance Services Qatar",
            "Facility Management Qatar",
            "Renovation & Interior Works",
            "Solar Panel Cleaning",
            "Energy Solutions",
            "Equipment Supply",
            "Hospitality Staffing",
            "Contracting Services",
            "Deep Cleaning",
            "AC Maintenance",
            "Plumbing Services",
            "Electrical Maintenance"
        ],
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Cleaning & Facility Services",
                    "description": "Residential, commercial, deep, office, and post-construction cleaning plus facility support across Qatar"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Maintenance Services",
                    "description": "Electrical, plumbing, AC maintenance, handyman, preventive maintenance, and emergency repairs in Qatar"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Renovation & Interior Works",
                    "description": "Painting, gypsum, tiling, partitions, renovation, and interior fit-out works in Qatar"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Solar Cleaning & Energy Solutions",
                    "description": "Solar panel cleaning, maintenance support, and energy-efficiency solutions in Qatar"
                }
            }
        ],
        "foundingDate": foundingDate,
        "numberOfEmployees": numberOfEmployees,
        "additionalType": additionalType || ["https://schema.org/ProfessionalService", "https://schema.org/GeneralContractor"],
        "sameAs": [
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.instagram
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_INFO.phone,
            "contactType": "customer service",
            "email": COMPANY_INFO.email,
            "areaServed": {
                "@type": "Country",
                "name": "Qatar"
            },
            "availableLanguage": ["English", "Arabic"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address,
            "addressLocality": "Doha",
            "addressCountry": "QA"
        },
        "aggregateRating": aggregateRating ? {
            "@type": "AggregateRating",
            "ratingValue": aggregateRating.ratingValue,
            "reviewCount": aggregateRating.reviewCount,
            "bestRating": "5",
            "worstRating": "1"
        } : undefined
    };

    // Remove undefined fields
    const cleanedJsonLd = JSON.parse(JSON.stringify(jsonLd));

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanedJsonLd) }}
        />
    );
}

