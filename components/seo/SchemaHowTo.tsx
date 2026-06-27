import { COMPANY_INFO } from "@/lib/constants";

interface HowToStep {
    name: string;
    text: string;
    image?: string;
    url?: string;
}

interface SchemaHowToProps {
    name: string;
    description: string;
    steps: HowToStep[];
    totalTime?: string;
    image?: string;
}

export default function SchemaHowTo({
    name,
    description,
    steps,
    totalTime,
    image
}: SchemaHowToProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": name,
        "description": description,
        "image": image || `${COMPANY_INFO.website}/logo.png`,
        "totalTime": totalTime,
        "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name,
            "text": step.text,
            "image": step.image,
            "url": step.url
        }))
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

