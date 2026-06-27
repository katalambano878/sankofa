"use client";

import Image from "next/image";
import Section from "@/components/ui/section";
import { CheckCircle2, Sparkles, Wrench, PaintRoller, Sun, PackageOpen, Users } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/images";

const services = [
    {
        title: "Cleaning & Facility Services",
        content: "Professional cleaning solutions for every environment, delivered by trained teams using safe, effective methods and equipment for spotless, hygienic spaces.",
        features: ["Residential & commercial cleaning", "Deep cleaning & office cleaning", "Post-construction cleaning", "Facility support services"],
        image: IMAGES.services.cleaning,
        icon: Sparkles
    },
    {
        title: "Maintenance Services",
        content: "Reliable maintenance to keep your property running smoothly, from routine upkeep to urgent repairs, handled by skilled technicians.",
        features: ["Electrical & plumbing services", "AC maintenance & cleaning", "Handyman & preventive maintenance", "Emergency repairs"],
        image: IMAGES.services.maintenance,
        icon: Wrench
    },
    {
        title: "Renovation & Interior Works",
        content: "Transform and refresh your spaces with quality finishing and fit-out works tailored to your vision and budget.",
        features: ["Painting, gypsum & ceiling works", "Tiling & flooring", "Partition installation", "Residential renovation & fit-out"],
        image: IMAGES.services.renovation,
        icon: PaintRoller
    },
    {
        title: "Solar Cleaning & Energy Solutions",
        content: "Maximise your solar output and energy efficiency with specialist cleaning, maintenance, and smart energy consultation.",
        features: ["Solar panel cleaning", "Solar maintenance support", "Energy efficiency solutions", "Smart energy consultation"],
        image: IMAGES.services.solar,
        icon: Sun
    },
    {
        title: "Equipment & Material Supply",
        content: "A dependable source for the materials, tools, and equipment your projects need, supplied promptly and at competitive prices.",
        features: ["Construction materials", "Cleaning & safety equipment", "Electrical materials & plumbing supplies", "Maintenance tools"],
        image: IMAGES.services.equipment,
        icon: PackageOpen
    },
    {
        title: "Hospitality & Staffing Support",
        content: "Skilled manpower and hospitality support to keep your operations and events running seamlessly.",
        features: ["Housekeeping services", "Hospitality personnel", "Event support staff", "General labour & cleaning manpower"],
        image: IMAGES.services.hospitality,
        icon: Users
    }
];

export default function ServicesContent() {
    const heroRef = useRef(null);
    const requirementsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: reqProgress } = useScroll({
        target: requirementsRef,
        offset: ["start end", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const reqImageY = useTransform(reqProgress, [0, 1], ["10%", "-10%"]);

    return (
        <div className="overflow-hidden">
            {/* Immersive Parallax Hero */}
            <div ref={heroRef} className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 will-change-transform">
                    <Image
                        src={IMAGES.services.hero}
                        alt="Sankofa Global professional services in Qatar"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-sankofa-navy/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-sankofa-navy to-transparent"></div>
                </motion.div>

                <div className="container relative z-10 px-4 text-center">
                    <motion.div style={{ y: textY }} className="max-w-4xl mx-auto will-change-transform">
                        <ScrollAnimation variant="slideUp">
                            <span className="text-sankofa-gold font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 block">Our Solutions</span>
                            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                Complete Service Solutions <br /> Under One Roof
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                                Professional cleaning, maintenance, contracting, energy, and hospitality services designed for reliability, quality, and peace of mind.
                            </p>
                        </ScrollAnimation>
                    </motion.div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 w-32 h-32 bg-sankofa-gold/10 rounded-full blur-3xl z-10"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-10 w-48 h-48 bg-sankofa-navy/30 rounded-full blur-3xl z-10"
                />
            </div>

            {/* Services Grid */}
            <Section className="relative z-20 -mt-20 pt-0 bg-transparent">
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1} variant="slideUp" className="h-full">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-sankofa-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    {/* Floating Icon */}
                                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-sankofa-navy group-hover:text-sankofa-gold transition-colors z-10">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="p-8 relative">
                                    {/* Subtle pattern on card bg */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>

                                    <h3 className="text-2xl font-bold text-sankofa-navy mb-4 group-hover:text-sankofa-gold transition-colors">{service.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {service.content}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                                <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </ScrollAnimation>
                    ))}
                </div>
            </Section>

            {/* Requirements Section */}
            <Section background="muted" className="relative overflow-hidden">
                <div ref={requirementsRef} className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto relative z-10">
                    <ScrollAnimation variant="slideRight">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <motion.div style={{ y: reqImageY }} className="absolute inset-0 h-[120%] -top-[10%]">
                                <Image
                                    src={IMAGES.about.team}
                                    alt="Sankofa Global site assessment and service planning"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-sankofa-navy/10"></div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="slideLeft">
                        <h2 className="text-3xl font-bold text-sankofa-navy mb-6">How We Get Started</h2>
                        <p className="text-muted-foreground mb-8">
                            To deliver an accurate quote and efficient service, we typically begin with the following:
                        </p>

                        <div className="space-y-4">
                            {[
                                "Understanding your service requirements",
                                "A site visit or assessment where needed",
                                "A clear, competitive written quote",
                                "A designated point of contact"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100 transition-all cursor-default"
                                >
                                    <div className="w-8 h-8 rounded-full bg-sankofa-navy/10 flex items-center justify-center text-sankofa-navy font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <span className="font-medium text-gray-700">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Decorative blob for requirements */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-sankofa-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            </Section>

            <CTA />
        </div>
    );
}
