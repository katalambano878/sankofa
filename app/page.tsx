import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Section from "@/components/ui/section";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { SchemaLocalBusiness, SchemaHowTo } from "@/components/seo";

export const metadata = constructMetadata({
    title: "Cleaning, Maintenance & Contracting Company in Qatar",
    description: "Sankofa Global is a Qatar-based multi-service company providing professional cleaning, maintenance, contracting, renovation, solar cleaning, energy solutions, equipment supply, and hospitality staffing in Doha and across Qatar. Request a quote today.",
    keywords: [
        // Primary service terms
        "Cleaning Company Qatar", "Maintenance Company Doha", "Hospitality Services Qatar",
        "Renovation Contractor Qatar", "Solar Cleaning Qatar",
        // Brand terms
        "Sankofa Global", "Sankofa Global Qatar", "Sankofa Global Trading & Contracting",
        // Specific services
        "Deep Cleaning Qatar", "AC Maintenance Doha", "Facility Management Qatar",
        "Interior Fit-Out Qatar", "Handyman Services Doha",
        // Industry terms
        "Commercial Cleaning Doha", "Office Cleaning Qatar", "Post Construction Cleaning Qatar",
        "Equipment Supply Qatar", "Housekeeping Services Qatar",
        // Long-tail
        "Best Cleaning Company Qatar", "Reliable Maintenance Services Doha", "Energy Solutions Qatar"
    ],
    canonical: "/",
});

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <SchemaLocalBusiness
                geo={{ latitude: 25.2854, longitude: 51.5310 }}
            />
            <SchemaHowTo
                name="How to Request a Service from Sankofa Global"
                description="Step-by-step guide to booking professional services with Sankofa Global in Qatar"
                steps={[
                    {
                        name: "Request",
                        text: "Submit your enquiry via our online quote form or WhatsApp. Tell us the service you need, your location, and any specific requirements.",
                    },
                    {
                        name: "Assess",
                        text: "Our team reviews your requirements, arranges a site visit if needed, and prepares a clear, competitive quote.",
                    },
                    {
                        name: "Schedule",
                        text: "Once approved, we schedule skilled, fully-equipped personnel at a time that suits your operations.",
                    },
                    {
                        name: "Deliver",
                        text: "We complete the work to the highest standards of quality and safety, with follow-up support to ensure your satisfaction.",
                    },
                ]}
                totalTime="PT24H"
            />
            <Hero />
            <TrustBar />
            <ServicesGrid />
            <IndustriesGrid />
            <HowItWorks />

            {/* FAQ Preview */}
            <Section>
                <ScrollAnimation variant="slideUp" className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-sankofa-navy">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Which areas in Qatar do you serve?</AccordionTrigger>
                            <AccordionContent>
                                We provide our services across Qatar, covering Doha and surrounding areas for residential, commercial, industrial, and hospitality clients.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Do you offer one-time and contract-based services?</AccordionTrigger>
                            <AccordionContent>
                                Yes. We handle one-off jobs as well as ongoing maintenance and facility contracts tailored to your schedule and budget.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can you provide a single partner for multiple services?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely. As a multi-service company, Sankofa Global is your single trusted partner for cleaning, maintenance, renovation, energy, equipment supply, and staffing.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="text-center mt-8">
                        <Link href="/faqs" className="text-sankofa-navy underline underline-offset-4 hover:text-sankofa-gold font-medium">
                            View all FAQs
                        </Link>
                    </div>
                </ScrollAnimation>
            </Section>

            <CTA />
        </div>
    );
}
