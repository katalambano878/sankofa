"use client";

import Image from "next/image";
import Section from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import CTA from "@/components/sections/CTA";
import { CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import { COMPANY_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const principles = [
    { title: "Excellence", desc: "We pursue the highest standards of quality and workmanship in every service we deliver." },
    { title: "Professionalism", desc: "Skilled, courteous teams committed to service excellence and dependable results." },
    { title: "Safety", desc: "We uphold strict operational safety standards and industry best practices on every job." },
    { title: "Customer Satisfaction", desc: "Your success and satisfaction drive everything we do — from first contact to follow-up." },
];

export default function AboutContent() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="overflow-hidden">
            {/* Immersive Hero */}
            <div ref={heroRef} className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 will-change-transform">
                    <Image
                        src={IMAGES.about.team}
                        alt="About Sankofa Global - Qatar's trusted multi-service partner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-sankofa-navy/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-sankofa-navy to-transparent"></div>
                </motion.div>

                <div className="container relative z-10 px-4 text-center">
                    <motion.div style={{ y: textY }} className="max-w-4xl mx-auto will-change-transform">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                        >
                            About Sankofa Global
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-300"
                        >
                            A Qatar-based multi-service company building excellence through service.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Mission/Vision */}
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-sankofa-navy mb-4 relative inline-block">
                                Our Mission
                                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-sankofa-gold rounded-full"></span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To deliver professional, dependable services across cleaning, maintenance, contracting, energy, and hospitality — maintaining the highest standards of quality and safety, building long-term relationships through trust and performance, and providing cost-effective solutions that add value to every client.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-sankofa-navy mb-4 relative inline-block">
                                Our Vision
                                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-sankofa-gold rounded-full"></span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                To become one of Qatar's most trusted and respected service providers by delivering excellence, reliability, and innovative solutions across every sector we serve.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Abstract Image Composition */}
                        <div className="aspect-square rounded-2xl bg-gray-100 relative overflow-hidden shadow-xl group">
                            <Image
                                src={IMAGES.about.team}
                                alt="Sankofa Global professional team"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-sankofa-navy/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-10 -left-10 w-48 h-48 bg-sankofa-gold/20 rounded-full blur-3xl -z-10"
                        ></motion.div>
                    </motion.div>
                </div>
            </Section>

            {/* Values */}
            <Section background="muted">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-sankofa-navy"
                    >
                        Our Principles
                    </motion.h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-none shadow-sm">
                                <CardContent className="pt-8 pb-8">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-sankofa-navy/5 flex items-center justify-center text-sankofa-navy mb-6 group-hover:bg-sankofa-gold/20 transition-colors">
                                        <CheckCircle2 className="h-8 w-8" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-sankofa-navy">{val.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Stats/Credibility */}
            <Section className="overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                    {[
                        { label: "Service Divisions", value: "8+" },
                        { label: "Sectors Served", value: "8+" },
                        { label: "Fast Response", value: "24/7" },
                        { label: "Quality Commitment", value: "100%" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            className="p-4"
                        >
                            <div className="text-3xl md:text-5xl font-bold text-sankofa-gold mb-2">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Key Facts for AI & Quick Reference */}
            <Section className="bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-sankofa-navy mb-8 text-center">Company Snapshot</h3>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3 gap-4">
                            <span className="font-semibold text-gray-700 shrink-0">Company Name</span>
                            <span className="text-gray-900 text-right">{COMPANY_INFO.legalName}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-700">Headquarters</span>
                            <span className="text-gray-900">{COMPANY_INFO.address}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3 gap-4">
                            <span className="font-semibold text-gray-700 shrink-0">Primary Industry</span>
                            <span className="text-gray-900 text-right">Trading, Contracting & Hospitality</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-700">Service Area</span>
                            <span className="text-gray-900">Across Qatar</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3 gap-4">
                            <span className="font-semibold text-gray-700 shrink-0">Core Services</span>
                            <span className="text-gray-900 text-right">Cleaning, Maintenance, Contracting</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3 gap-4">
                            <span className="font-semibold text-gray-700 shrink-0">Client Types</span>
                            <span className="text-gray-900 text-right">Residential, Commercial, Industrial, Hospitality</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                            <span className="font-semibold text-gray-700">Response</span>
                            <span className="text-gray-900">24/7 Available</span>
                        </div>
                    </div>
                </div>
            </Section>

            <CTA />
        </div>
    );
}
