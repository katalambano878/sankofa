import { COMPANY_INFO } from "@/lib/constants";

interface SchemaLocalBusinessProps {
    openingHours?: string[];
    priceRange?: string;
    paymentAccepted?: string[];
    servesCuisine?: string[];
    aggregateRating?: {
        ratingValue: number;
        reviewCount: number;
    };
    geo?: {
        latitude: number;
        longitude: number;
    };
}

// Qatar municipalities for service area
const QATAR_REGIONS = [
    "Doha",
    "Al Rayyan",
    "Al Wakrah",
    "Al Khor",
    "Umm Salal",
    "Al Daayen",
    "Lusail",
    "Al Shamal",
    "Al Shahaniya"
];

export default function SchemaLocalBusiness({
    openingHours = ["Mo-Fr 08:00-17:00"],
    priceRange = "$$",
    paymentAccepted = ["Cash", "Bank Transfer", "Credit Card"],
    aggregateRating,
    geo,
}: SchemaLocalBusinessProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${COMPANY_INFO.website}#localbusiness`,
        "name": COMPANY_INFO.name,
        "image": `${COMPANY_INFO.website}/logo.png`,
        "url": COMPANY_INFO.website,
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address,
            "addressLocality": "Doha",
            "addressCountry": "QA"
        },
        "geo": geo ? {
            "@type": "GeoCoordinates",
            "latitude": geo.latitude,
            "longitude": geo.longitude
        } : undefined,
        "openingHoursSpecification": openingHours.map(hours => {
            const [days, time] = hours.split(" ");
            const [open, close] = time.split("-");
            const [dayStart, dayEnd] = days.includes("-") ? days.split("-") : [days, days];
            
            return {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": dayEnd ? [
                    `https://schema.org/${dayStart}`,
                    `https://schema.org/${dayEnd}`
                ] : `https://schema.org/${dayStart}`,
                "opens": open,
                "closes": close
            };
        }),
        "priceRange": priceRange,
        "paymentAccepted": paymentAccepted,
        "currenciesAccepted": "QAR",
        "areaServed": QATAR_REGIONS.map(region => ({
            "@type": "City",
            "name": region,
            "containedIn": {
                "@type": "Country",
                "name": "Qatar"
            }
        })),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Multi-Service Solutions",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cleaning & Facility Services",
                        "description": "Residential, commercial, deep, office, and post-construction cleaning across Qatar"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Maintenance Services",
                        "description": "Electrical, plumbing, AC, handyman, preventive maintenance, and emergency repairs"
                    }
                }
            ]
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

