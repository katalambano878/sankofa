import Link from "next/link";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/layout/Logo";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const SERVICE_LINKS = [
    "Cleaning & Facility Services",
    "Maintenance Services",
    "Renovation & Interior Works",
    "Solar Cleaning & Energy",
    "Equipment & Material Supply",
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-sankofa-navy text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex justify-center md:justify-start">
                            <Logo variant="light" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            A Qatar-based multi-service company delivering professional cleaning, maintenance,
                            contracting, renovation, energy, and hospitality solutions. Building excellence through service.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <Link href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sankofa-gold transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="Facebook"><Facebook size={20} /></Link>
                            <Link href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sankofa-gold transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="Instagram"><Instagram size={20} /></Link>
                            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sankofa-gold transition-colors p-2 hover:bg-white/5 rounded-full" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base md:text-lg font-semibold text-sankofa-gold mb-4 md:mb-6">Company</h4>
                        <ul className="space-y-2 md:space-y-3">
                            {NAV_LINKS.map(link => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li><Link href="/faqs" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">FAQs</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base md:text-lg font-semibold text-sankofa-gold mb-4 md:mb-6">Our Services</h4>
                        <ul className="space-y-2 md:space-y-3">
                            {SERVICE_LINKS.map((label) => (
                                <li key={label}>
                                    <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm inline-block py-1">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center md:text-left">
                        <h4 className="text-base md:text-lg font-semibold text-sankofa-gold mb-4 md:mb-6">Contact Us</h4>
                        <ul className="space-y-3 md:space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400 justify-center md:justify-start">
                                <MapPin className="h-5 w-5 text-sankofa-gold shrink-0 mt-0.5" />
                                <span className="text-left">{COMPANY_INFO.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400 justify-center md:justify-start">
                                <Phone className="h-5 w-5 text-sankofa-gold shrink-0" />
                                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400 justify-center md:justify-start">
                                <Mail className="h-5 w-5 text-sankofa-gold shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">{COMPANY_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center">
                    <p className="text-gray-500 text-xs md:text-sm order-2 md:order-1">
                        &copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
                    </p>
                    <div className="text-gray-600 text-xs order-1 md:order-2">
                        {COMPANY_INFO.tagline}
                    </div>
                </div>
            </div>
        </footer>
    );
}
