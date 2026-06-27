import type { Metadata } from 'next';
import Image from "next/image";
import Section from "@/components/ui/section";
import CTA from "@/components/sections/CTA";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { constructMetadata } from "@/lib/seo";
import { SchemaBreadcrumb } from "@/components/seo";
import { COMPANY_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata = constructMetadata({
    title: "Industries We Serve | Residential, Commercial, Hospitality & More",
    description: "Sankofa Global serves residential villas, commercial offices, hotels, restaurants, retail, construction, property management, and industrial facilities across Qatar with tailored multi-service solutions.",
    keywords: [
        "Cleaning Services Residential Qatar",
        "Commercial Office Cleaning Doha",
        "Hotel Cleaning Services Qatar",
        "Restaurant Cleaning Qatar",
        "Retail Maintenance Qatar",
        "Construction Site Cleaning Qatar",
        "Property Management Services Qatar",
        "Industrial Facility Maintenance Qatar",
        "Facility Services Doha",
        "Hospitality Support Qatar"
    ],
    canonical: "/industries",
});

const industries = [
    {
        name: "Residential Villas & Apartments",
        desc: "Cleaning, maintenance, and renovation services that keep private homes and apartments pristine, comfortable, and well-maintained.",
        image: IMAGES.industries.residential
    },
    {
        name: "Commercial Offices",
        desc: "Reliable office cleaning, facility support, and maintenance that create a professional, healthy environment for your team and clients.",
        image: IMAGES.industries.commercial
    },
    {
        name: "Hotels & Hospitality Facilities",
        desc: "Housekeeping, hospitality personnel, and maintenance support that uphold the high standards your guests expect.",
        image: IMAGES.industries.hotel
    },
    {
        name: "Restaurants & Cafes",
        desc: "Deep cleaning, hygiene, and maintenance solutions that keep kitchens and dining areas safe, spotless, and compliant.",
        image: IMAGES.industries.restaurant
    },
    {
        name: "Retail & Property Management",
        desc: "Scheduled cleaning, maintenance, and facility services for retail spaces and managed properties of every size.",
        image: IMAGES.industries.retail
    },
    {
        name: "Construction & Industrial Facilities",
        desc: "Post-construction cleaning, renovation, equipment supply, and preventive maintenance for construction sites and industrial plants.",
        image: IMAGES.industries.construction
    }
];

export default function IndustriesPage() {
    return (
        <>
            <SchemaBreadcrumb items={[
                { name: "Home", url: COMPANY_INFO.website },
                { name: "Industries", url: `${COMPANY_INFO.website}/industries` }
            ]} />
            <div>
                <Section background="hero-image" className="pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
                        <p className="text-xl text-gray-300">
                            Tailored multi-service solutions for every sector across Qatar.
                        </p>
                    </div>
                </Section>

                <Section>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((ind, i) => (
                            <Card key={i} className="hover:shadow-lg transition-shadow border-t-4 border-t-sankofa-gold overflow-hidden group">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={ind.image}
                                        alt={ind.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-sankofa-navy">{ind.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {ind.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Section>


                <CTA />
            </div>
        </>
    );
}
