"use client";

import Section from "@/components/ui/section";
import { Award, Briefcase, Shield, Heart } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

const principles = [
    {
        icon: Award,
        title: "Excellence",
        desc: "The highest standards of quality and workmanship in every service.",
    },
    {
        icon: Briefcase,
        title: "Professionalism",
        desc: "Skilled, courteous teams committed to dependable service delivery.",
    },
    {
        icon: Shield,
        title: "Safety",
        desc: "Strict operational safety and industry best practices on every job.",
    },
    {
        icon: Heart,
        title: "Customer Satisfaction",
        desc: "Your success and satisfaction drive everything we do.",
    },
];

export default function TrustBar() {
    return (
        <Section className="py-12 md:py-16 border-b bg-white relative z-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {principles.map((feature, i) => (
                    <ScrollAnimation key={i} delay={i * 0.1} variant="fade">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center text-center space-y-3 px-2 group cursor-default"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-3 rounded-full bg-sankofa-navy/5 text-sankofa-navy mb-2 group-hover:bg-sankofa-navy group-hover:text-white transition-colors duration-300"
                            >
                                <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                            </motion.div>
                            <h3 className="font-bold text-sankofa-navy text-sm md:text-base group-hover:text-sankofa-gold transition-colors duration-300">{feature.title}</h3>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    </ScrollAnimation>
                ))}
            </div>
        </Section>
    );
}
