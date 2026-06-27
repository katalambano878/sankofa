import { COMPANY_INFO } from "@/lib/constants";

interface SchemaProductProps {
    productName: string;
    description: string;
    category?: string;
    offers?: {
        price?: string;
        priceCurrency?: string;
        availability?: string;
        priceValidUntil?: string;
        url?: string;
    };
    brand?: string;
    image?: string;
    sku?: string;
}

export default function SchemaProduct({
    productName,
    description,
    category = "Services",
    offers,
    brand = COMPANY_INFO.name,
    image,
    sku
}: SchemaProductProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productName,
        "description": description,
        "brand": {
            "@type": "Brand",
            "name": brand
        },
        "category": category,
        "image": image || `${COMPANY_INFO.website}/logo.png`,
        "sku": sku || productName.toLowerCase().replace(/\s+/g, "-"),
        "offers": offers ? {
            "@type": "Offer",
            "price": offers.price,
            "priceCurrency": offers.priceCurrency || "QAR",
            "availability": offers.availability || "https://schema.org/InStock",
            "priceValidUntil": offers.priceValidUntil,
            "url": offers.url || COMPANY_INFO.website,
            "seller": {
                "@type": "Organization",
                "name": COMPANY_INFO.name
            }
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

