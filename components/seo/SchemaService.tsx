import { COMPANY_INFO } from "@/lib/constants";

interface SchemaServiceProps {
    serviceType: string;
    serviceName: string;
    description: string;
    areaServed?: string[];
    serviceOutput?: {
        name: string;
        description: string;
    };
    provider?: {
        name: string;
        url: string;
    };
}

export default function SchemaService({
    serviceType,
    serviceName,
    description,
    areaServed = ["Qatar"],
    serviceOutput,
    provider = {
        name: COMPANY_INFO.name,
        url: COMPANY_INFO.website
    }
}: SchemaServiceProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceType,
        "name": serviceName,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": provider.name,
            "url": provider.url
        },
        "areaServed": areaServed.map(area => ({
            "@type": "Country" as const,
            "name": area
        })),
        "serviceOutput": serviceOutput ? {
            "@type": "Product",
            "name": serviceOutput.name,
            "description": serviceOutput.description
        } : undefined,
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": provider.url,
            "servicePhone": COMPANY_INFO.phone
        }
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

