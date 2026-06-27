import type { Metadata } from 'next';
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import RequestQuoteContent from "./RequestQuoteContent";

export const metadata = constructMetadata({
    title: "Request a Quote | Get Service Pricing",
    description: "Request a competitive quote for cleaning, maintenance, renovation, solar cleaning, equipment supply, or hospitality services in Qatar. Fast response from Sankofa Global.",
    keywords: [
        "Service Quote Qatar",
        "Cleaning Price Quote Doha",
        "Maintenance Quote Request",
        "Renovation Quote Qatar",
        "Facility Services Pricing",
        "Hospitality Staffing Quote",
        "Solar Cleaning Quote Qatar"
    ],
    canonical: "/request-quote",
});

export default function RequestQuotePage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Request Quote", url: `${COMPANY_INFO.website}/request-quote` }
            ]} />
            <RequestQuoteContent />
        </>
    );
}
