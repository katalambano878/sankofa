"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { ArrowRight, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { motion } from "framer-motion";

export default function CTA() {
    return (
        <Section background="navy-dark" className="py-24 text-center">
            <ScrollAnimation variant="scale" className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    Ready to Experience Excellence?
                </h2>
                <p className="text-xl text-gray-400">
                    Get a competitive quote today. Professional service, quality workmanship, and reliable support guaranteed.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild size="xl" variant="cta" className="shadow-lg shadow-sankofa-gold/10 transition-all duration-300">
                            <Link href="/request-quote" className="flex items-center gap-2">
                                Request a Quote <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild size="xl" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white transition-all duration-300">
                            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <MessageCircle className="h-5 w-5 text-green-400" /> Chat on WhatsApp
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </ScrollAnimation>
        </Section>
    );
}
