import type { Metadata } from 'next';
import Section from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { constructMetadata } from "@/lib/seo";
import CTA from "@/components/sections/CTA";
import { SchemaFAQ, SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = constructMetadata({
    title: "Frequently Asked Questions",
    description: "Answers to common questions about Sankofa Global's cleaning, maintenance, contracting, energy, and hospitality services in Qatar.",
    keywords: [
        "Cleaning Company FAQ Qatar",
        "Maintenance Services Questions Doha",
        "Sankofa Global Help",
        "Service Quote Qatar",
        "Facility Services FAQ",
        "Renovation Contractor Questions Qatar"
    ],
    canonical: "/faqs",
});

const faqs = [
    {
        category: "Services & Scope",
        items: [
            { q: "What services does Sankofa Global offer?", a: "We are a multi-service company providing cleaning & facility services, maintenance, renovation & interior works, solar cleaning & energy solutions, equipment & material supply, and hospitality & staffing support." },
            { q: "Do you handle both one-time jobs and ongoing contracts?", a: "Yes. We offer one-off services as well as scheduled and contract-based maintenance and facility management tailored to your needs." },
            { q: "Can I get more than one service from you?", a: "Absolutely. As a single trusted partner, we can combine multiple services — for example cleaning, maintenance, and renovation — under one coordinated arrangement." },
        ]
    },
    {
        category: "Booking & Service Delivery",
        items: [
            { q: "How do I request a service or quote?", a: "Simply use our Request a Quote form, call us, or message us on WhatsApp. Tell us the service you need, your location, and any specific requirements." },
            { q: "How quickly can you respond?", a: "We pride ourselves on fast response and efficient scheduling. For urgent maintenance and emergency repairs, we prioritise rapid turnaround." },
            { q: "Do you provide your own staff and equipment?", a: "Yes. Our skilled, trained personnel arrive fully equipped with the tools and materials required to complete the job to a high standard." }
        ]
    },
    {
        category: "Quality, Safety & Coverage",
        items: [
            { q: "How do you ensure quality and safety?", a: "We follow strict quality-assurance processes and adhere to operational safety standards and industry best practices on every job." },
            { q: "Which areas in Qatar do you serve?", a: "We provide services across Qatar, covering Doha and surrounding areas for residential, commercial, industrial, and hospitality clients." },
            { q: "Which sectors do you work with?", a: "We serve residential villas and apartments, commercial offices, hotels and hospitality facilities, restaurants and cafes, retail, construction companies, property management firms, and industrial facilities." },
            { q: "How is pricing determined?", a: "Pricing depends on the service, scope, and location. Share your requirements and we'll prepare a clear, competitive, cost-effective quote." }
        ]
    }
];

export default function FAQPage() {
    // Flatten FAQs for schema
    const faqItems = faqs.flatMap(cat =>
        cat.items.map(item => ({
            question: item.q,
            answer: item.a
        }))
    );

    return (
        <div>
            <SchemaFAQ faqs={faqItems} />
            <SchemaBreadcrumb
                items={[
                    { name: "Home", url: COMPANY_INFO.website },
                    { name: "FAQs", url: `${COMPANY_INFO.website}/faqs` },
                ]}
            />
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300">
                        Everything you need to know about working with us.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="max-w-3xl mx-auto space-y-12">
                    {faqs.map((cat, i) => (
                        <div key={i}>
                            <h2 className="text-2xl font-bold text-sankofa-navy mb-6">{cat.category}</h2>
                            <Accordion type="single" collapsible className="w-full">
                                {cat.items.map((faq, j) => (
                                    <AccordionItem key={j} value={`item-${i}-${j}`}>
                                        <AccordionTrigger className="text-left font-medium text-lg">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </Section>

            <CTA />
        </div>
    );
}
