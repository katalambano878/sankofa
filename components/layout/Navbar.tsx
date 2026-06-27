"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
                    isScrolled || isOpen
                        ? "bg-sankofa-navy/95 backdrop-blur-md shadow-md py-3 border-b border-white/10"
                        : "bg-transparent py-4 lg:py-6"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Logo onClick={() => setIsOpen(false)} />

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-sankofa-gold",
                                    isScrolled ? "text-gray-200" : "text-white drop-shadow-sm"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* WhatsApp Icon Only */}
                        <a
                            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn("p-2 rounded-full transition-all hover:scale-110",
                                isScrolled ? "bg-white/10 text-green-400 hover:bg-green-500 hover:text-white" : "bg-white/20 text-green-400 backdrop-blur-sm hover:bg-green-500 hover:text-white"
                            )}
                            aria-label="Contact on WhatsApp"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </a>

                        <Button asChild variant="cta" className="shadow-lg relative overflow-hidden bg-gradient-to-r from-sankofa-gold via-white/50 to-sankofa-gold bg-[length:200%_auto] animate-shine text-sankofa-navy border-none hover:scale-105 transition-transform duration-300">
                            <Link href="/request-quote">Request a Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-white relative z-[60] focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Completely separate from header */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[55] lg:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="absolute inset-0 bg-sankofa-navy flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <nav className="flex flex-col gap-1 mb-8">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl md:text-2xl font-medium text-white hover:text-sankofa-gold transition-colors py-4 border-b border-white/10"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex flex-col gap-4 mt-auto">
                            <Button asChild variant="cta" className="w-full h-12 text-base">
                                <Link href="/request-quote" onClick={() => setIsOpen(false)}>
                                    Request a Quote
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="w-full h-12 text-base border-sankofa-gold text-sankofa-gold hover:bg-sankofa-gold hover:text-sankofa-navy bg-transparent">
                                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
                                </a>
                            </Button>
                        </div>

                        <div className="mt-6 flex justify-center text-gray-400">
                            <span className="text-xs">© {new Date().getFullYear()} {COMPANY_INFO.name}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
