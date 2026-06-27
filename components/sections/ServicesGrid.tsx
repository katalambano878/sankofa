"use client";

import Link from "next/link";
import Image from "next/image"; // Added import
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Section from "@/components/ui/section";
import { Sparkles, Wrench, PaintRoller, Sun, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { IMAGES } from "@/lib/images";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
    {
        title: "Cleaning & Facility Services",
        description: "Residential, commercial, deep, office, and post-construction cleaning plus full facility support — delivered to the highest standards.",
        icon: Sparkles,
        href: "/services",
        image: IMAGES.services.cleaning,
    },
    {
        title: "Maintenance Services",
        description: "Electrical, plumbing, AC maintenance & cleaning, handyman works, preventive maintenance, and rapid emergency repairs.",
        icon: Wrench,
        href: "/services",
        image: IMAGES.services.maintenance,
    },
    {
        title: "Renovation & Interior Works",
        description: "Painting, gypsum & ceiling works, tiling & flooring, partitions, residential renovation, and complete interior fit-out.",
        icon: PaintRoller,
        href: "/services",
        image: IMAGES.services.renovation,
    },
    {
        title: "Solar Cleaning & Energy",
        description: "Solar panel cleaning, solar maintenance support, energy-efficiency solutions, and smart energy consultation.",
        icon: Sun,
        href: "/services",
        image: IMAGES.services.solar,
    },
];

export default function ServicesGrid() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <Section className="bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="services">
            {/* Subtle mesh pattern background with parallax */}
            <motion.div 
                style={{ y }}
                className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"
            ></motion.div>

            <ScrollAnimation className="text-center max-w-2xl mx-auto mb-16 relative z-10">
                <span className="text-sankofa-gold font-semibold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                <h2 className="text-3xl md:text-5xl font-bold text-sankofa-navy mb-6 tracking-tight">
                    Comprehensive <span className="relative inline-block">
                        Service Solutions
                        <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="absolute bottom-1 left-0 h-2 bg-sankofa-gold/20 -z-10 rounded-sm"
                        ></motion.span>
                    </span>
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
                    One trusted partner for cleaning, maintenance, contracting, energy, and hospitality solutions across Qatar.
                </p>
            </ScrollAnimation>

            <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {services.map((service, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1} variant="scale" className="h-full">
                        <motion.div 
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="h-full"
                        >
                            <Card className="h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white hover:border-sankofa-gold/30 flex flex-col">
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image 
                                        src={service.image} 
                                        alt={service.title} 
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-sankofa-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                                <CardHeader className="space-y-4 pt-6 relative">
                                    <div className="absolute -top-10 left-6 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10 border border-gray-100">
                                        <service.icon className="h-7 w-7 text-sankofa-navy group-hover:text-sankofa-gold transition-colors" />
                                    </div>
                                    <div className="pt-2">
                                        <CardTitle className="text-xl font-bold group-hover:text-sankofa-navy transition-colors">{service.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <CardDescription className="text-base text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </CardDescription>
                                    <Link href={service.href} className="text-sm font-bold text-sankofa-navy hover:text-sankofa-gold inline-flex items-center group/link transition-all">
                                        Learn more <motion.span className="ml-1" whileHover={{ x: 5 }}><ArrowRight className="w-4 h-4" /></motion.span>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </ScrollAnimation>
                ))}
            </div>

            <ScrollAnimation variant="slideUp" delay={0.4} className="text-center mt-16 relative z-10">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" size="lg" className="border-sankofa-navy text-sankofa-navy hover:bg-sankofa-navy hover:text-white transition-all duration-300 font-semibold px-8 shadow-sm hover:shadow-md">
                        <Link href="/services">View All Services</Link>
                    </Button>
                </motion.div>
            </ScrollAnimation>
        </Section>
    );
}
