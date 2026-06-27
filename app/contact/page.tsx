import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb, SchemaLocalBusiness } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import ContactContent from "./ContactContent";

export const metadata = constructMetadata({
    title: "Contact Us | Get in Touch",
    description: "Contact Sankofa Global for cleaning, maintenance, contracting, and hospitality service enquiries, quotes, and support in Qatar. Reach us by phone, WhatsApp, or email.",
    keywords: [
        "Contact Sankofa Global",
        "Cleaning Company Contact Qatar",
        "Maintenance Services Contact Doha",
        "Service Quote Qatar",
        "Sankofa Global Phone Number",
        "WhatsApp Cleaning Company Qatar",
        "Facility Services Enquiry Qatar"
    ],
    canonical: "/contact",
});

export default function ContactPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Contact", url: `${COMPANY_INFO.website}/contact` }
            ]} />
            <SchemaLocalBusiness
                geo={{ latitude: 25.2854, longitude: 51.5310 }}
            />
            <ContactContent />
        </>
    );
}
