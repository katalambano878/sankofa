import { COMPANY_INFO } from "@/lib/constants";
import { ReactNode } from "react";

interface JsonLdProps {
    schemas?: Array<Record<string, any>>;
    children?: ReactNode;
}

/**
 * Enhanced JsonLd component that supports multiple schema types
 * Can be used to render multiple schemas or a single schema
 */
export default function JsonLd({ schemas, children }: JsonLdProps) {
    // If schemas prop is provided, render those
    if (schemas && schemas.length > 0) {
        return (
            <>
                {schemas.map((schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}
            </>
        );
    }

    // Default: render Organization schema (backward compatibility)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "url": COMPANY_INFO.website,
        "logo": `${COMPANY_INFO.website}/logo.png`,
        "sameAs": [
            COMPANY_INFO.social.facebook,
            COMPANY_INFO.social.instagram
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": COMPANY_INFO.phone,
            "contactType": "customer service",
            "areaServed": "QA",
            "availableLanguage": ["English", "Arabic"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": COMPANY_INFO.address,
            "addressLocality": "Doha",
            "addressCountry": "QA"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
