import Section from "@/components/ui/section";
import { constructMetadata } from "@/lib/seo";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = constructMetadata({
    title: "Privacy Policy",
    description: "Privacy Policy for Sankofa Global. Learn how we collect, use, and protect your personal data.",
    keywords: ["Privacy Policy", "Data Protection", "Sankofa Global Privacy", "Personal Data Protection"],
    canonical: "/privacy",
});

export default function PrivacyPage() {
    return (
        <Section className="pt-32 pb-20">
            <div className="max-w-3xl mx-auto prose prose-blue">
                <h1 className="text-3xl font-bold text-sankofa-navy mb-8">Privacy Policy</h1>
                <p>Last updated: January 2026</p>

                <p className="text-sm text-muted-foreground not-prose">
                    {COMPANY_INFO.legalName} · {COMPANY_INFO.address}
                </p>

                <h3>1. Information We Collect</h3>
                <p>We collect information you provide directly to us when you request a quote, fill out a form, or communicate with us — such as your name, phone number, email, service required, and project location.</p>

                <h3>2. How We Use Your Information</h3>
                <p>We use your information to respond to enquiries, prepare quotes, schedule and deliver services, provide customer support, and communicate with you about Sankofa Global services.</p>

                <h3>3. Data Security</h3>
                <p>We implement appropriate security measures to protect your personal information against unauthorised access, alteration, or disclosure.</p>

                {/* Placeholder for legal text */}
                <p className="text-muted-foreground italic">[Full privacy policy to be inserted here]</p>
            </div>
        </Section>
    );
}
