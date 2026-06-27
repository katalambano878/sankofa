import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Contact Us",
    description: "Get in touch with Sankofa Global for service enquiries, quotes, and support across Qatar. Reach us by phone, WhatsApp, or email.",
    keywords: [
        "Contact Sankofa Global",
        "Service Enquiry Qatar",
        "Cleaning Company Contact Doha",
        "Maintenance Company Contact Qatar"
    ],
    canonical: "/contact",
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

