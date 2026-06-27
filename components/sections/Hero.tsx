"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { ArrowRight, Phone } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]); // Reduced range for smoother feel
    const textY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);

    return (
        <section ref={ref} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-sankofa-navy">
            {/* Background with Gradient/Image Overlay */}
            <motion.div
                className="absolute inset-0 z-0 will-change-transform" // Added will-change hint
                style={{ y: backgroundY }}
            >
                {/* Hero Background Image - Optimized with Next.js Image */}
                {/* Desktop Image */}
                <Image
                    src={IMAGES.hero.main}
                    alt="Sankofa Global professional services team in Qatar"
                    fill
                    className="object-cover opacity-100 md:opacity-20 md:mix-blend-overlay hidden md:block"
                    priority
                    quality={75}
                    sizes="100vw"
                />
                {/* Mobile Image */}
                <Image
                    src={IMAGES.hero.mobile}
                    alt="Sankofa Global professional services team in Qatar"
                    fill
                    className="object-cover opacity-100 md:hidden"
                    priority
                    quality={75}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-sankofa-navy/80 md:bg-gradient-to-r md:from-sankofa-navy md:from-10% md:via-sankofa-navy/95 md:to-sankofa-navy/60"></div>
                {/* Animated decorative blob */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sankofa-gold/10 rounded-full blur-3xl animate-pulse"></div>
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    style={{ y: textY }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        Building Excellence<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sankofa-gold via-white to-sankofa-gold bg-[length:200%_auto] animate-shine">
                            Through Service.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mx-auto lg:mx-0">
                        Qatar's trusted <strong>multi-service company</strong> for cleaning, maintenance, contracting, renovation, solar cleaning, energy solutions, equipment supply and hospitality staffing — <strong>one partner</strong> for every business need across Doha and beyond.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button asChild size="xl" variant="cta" className="sm:w-auto w-full shadow-sankofa-gold/20 shadow-lg">
                                <Link href="/request-quote" className="flex items-center justify-center gap-2">
                                    Request a Quote <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button asChild size="xl" variant="outline" className="sm:w-auto w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white">
                                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5" /> Call Now
                                </a>
                            </Button>
                        </motion.div>
                    </div>

                    <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-8 text-sm text-gray-400 max-w-md mx-auto lg:mx-0">
                        <div className="text-center lg:text-left group">
                            <span className="block text-2xl font-bold text-white group-hover:text-sankofa-gold transition-colors duration-300">8+</span>
                            <span>Service Divisions</span>
                        </div>
                        <div className="text-center lg:text-left group">
                            <span className="block text-2xl font-bold text-white group-hover:text-sankofa-gold transition-colors duration-300">24/7</span>
                            <span>Fast Response</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Element / Abstract Representation */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="hidden lg:block relative h-[600px] w-full"
                >
                    {/* Abstract Composition using CSS/Shapes or placeholders */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [3, 1, 3]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-sankofa-gold/20 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm p-4 transform rotate-3"
                    >
                        <div className="relative h-full w-full rounded-xl overflow-hidden opacity-80 shadow-2xl">
                            <Image
                                src={IMAGES.hero.main}
                                alt="Sankofa Global service excellence"
                                fill
                                className="object-cover"
                                loading="lazy"
                                quality={75}
                                sizes="(max-width: 1024px) 0vw, 50vw"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
