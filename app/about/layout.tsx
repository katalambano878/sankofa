import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "About Sankofa Global",
    description: "Learn about Sankofa Global - Qatar's trusted multi-service company. Our mission, vision, values, and commitment to professional service delivery.",
    keywords: [
        "About Sankofa Global",
        "Qatar Service Company",
        "Cleaning & Maintenance Company Qatar",
        "Contracting Company Doha"
    ],
    canonical: "/about",
});

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

