"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/section";
import { Building2, Home, Hotel, UtensilsCrossed, ShoppingBag, HardHat } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/lib/images";

const industries = [
    { name: "Residential Villas & Apartments", icon: Home },
    { name: "Commercial Offices", icon: Building2 },
    { name: "Hotels & Hospitality", icon: Hotel },
    { name: "Restaurants & Cafes", icon: UtensilsCrossed },
    { name: "Retail Establishments", icon: ShoppingBag },
    { name: "Construction & Industrial", icon: HardHat },
];

export default function IndustriesGrid() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.05]); // Reduced scale range
    const imageY = useTransform(smoothProgress, [0, 1], [30, -30]); // Reduced movement range

    // Parallax for text content
    const textY = useTransform(smoothProgress, [0, 1], [0, 50]);
    
    // Parallax for the small grid items
    const gridY = useTransform(smoothProgress, [0, 1], [0, -30]);

    return (
        <Section background="navy" className="overflow-hidden"> {/* Added overflow-hidden to contain parallax */}
            <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div style={{ y: textY }} className="relative z-10 will-change-transform"> {/* Wrapped in motion.div for text parallax */}
                    <ScrollAnimation variant="slideRight">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Serving Every Sector Across Qatar
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            From private villas to commercial towers, hotels, and industrial facilities, Sankofa Global delivers dependable, high-quality services tailored to the unique needs of every sector we serve.
                        </p>

                        <motion.div style={{ y: gridY }} className="grid sm:grid-cols-2 gap-4 will-change-transform"> {/* Added parallax to grid */}
                            {industries.map((ind, i) => (
                                <motion.div 
                                    key={i} 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 cursor-default backdrop-blur-sm"
                                >
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.2 }}
                                        className="text-sankofa-gold"
                                    >
                                        <ind.icon className="h-5 w-5" />
                                    </motion.div>
                                    <span className="font-medium text-gray-100">{ind.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-10">
                            <Link href="/industries" className="text-sankofa-gold font-semibold hover:text-white transition-colors underline underline-offset-4 group flex items-center gap-2">
                                Explore our industry expertise <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }}>&rarr;</motion.span>
                            </Link>
                        </div>
                    </ScrollAnimation>
                </motion.div>

                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group mt-8 lg:mt-0">
                    <motion.div style={{ y: imageY }} className="will-change-transform">
                        <Image
                            src={IMAGES.industries.feature}
                            alt="Sankofa Global serving industries across Qatar"
                            width={1200}
                            height={900}
                            className="w-full h-auto object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-sankofa-navy/80 to-transparent opacity-60 hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            </div>
            
            {/* Decorative background element for more depth */}
            <motion.div 
                style={{ y: imageY }} 
                className="absolute -right-20 -bottom-20 w-96 h-96 bg-sankofa-gold/5 rounded-full blur-3xl pointer-events-none"
            />
        </Section>
    );
}
