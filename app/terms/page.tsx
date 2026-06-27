import Section from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = constructMetadata({
    title: "Terms and Conditions",
    description: "Terms and Conditions for using Sankofa Global services and website. Read our service agreement terms.",
    keywords: ["Terms and Conditions", "Service Agreement", "Legal Terms", "Sankofa Global Terms"],
    canonical: "/terms",
});

export default function TermsPage() {
    return (
        <Section className="pt-32 pb-20">
            <div className="max-w-3xl mx-auto prose prose-blue">
                <h1 className="text-3xl font-bold text-sankofa-navy mb-8">Terms and Conditions</h1>
                <p>Last updated: January 2026</p>

                <h3>1. Introduction</h3>
                <p>
                    Welcome to {COMPANY_INFO.name}. These Terms and Conditions govern your use of our website and services.
                    {COMPANY_INFO.legalName} operates in {COMPANY_INFO.address}.
                </p>

                <h3>2. Service Agreement</h3>
                <p>All services are subject to a specific service agreement or purchase order terms agreed upon between Sankofa Global and the Client. Quotes are valid for the period stated and subject to confirmation of scope.</p>

                <h3>3. Service Delivery & Safety</h3>
                <p>We adhere to strict safety standards. Clients must ensure that work sites are safe and accessible. We reserve the right to pause or decline work if safety protocols are compromised.</p>

                <h3>4. Payment Terms</h3>
                <p>Payment terms are defined in individual contracts and quotations. Late payments may attract interest as stipulated in the invoice.</p>

                {/* Placeholder for legal text */}
                <p className="text-muted-foreground italic">[Full legal terms to be inserted here by legal counsel]</p>
            </div>
        </Section>
    );
}
