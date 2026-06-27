"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/lib/forms";
import Section from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactContent() {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: z.infer<typeof contactSchema>) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || 'Failed to send message');
            }

            toast.success("Message sent successfully! We'll get back to you soon.");
            form.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
        }
    };

    return (
        <div>
            <Section background="hero-image" className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300"
                    >
                        Have a question or need a custom quote? We are here to help.
                    </motion.p>
                </div>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="prose prose-lg">
                            <h2 className="text-3xl font-bold text-sankofa-navy">Contact Information</h2>
                            <p className="text-muted-foreground">
                                Our team is ready to help with any service enquiry. Reach us by phone, WhatsApp, or email — we respond promptly, every day.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Phone, label: "Phone", value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone.replace(/\s/g, '')}` },
                                { icon: MessageCircle, label: "WhatsApp", value: COMPANY_INFO.phone, href: `https://wa.me/${COMPANY_INFO.whatsapp}` },
                                { icon: Mail, label: "Email", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
                                { icon: MapPin, label: "Office Address", value: COMPANY_INFO.address, href: null }
                            ].map((item, index) => (
                                <motion.div key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                    <Card className="border-l-4 border-l-sankofa-navy hover:border-l-sankofa-gold transition-colors">
                                        <CardContent className="flex items-center gap-4 p-6">
                                            <div className="w-12 h-12 rounded-full bg-sankofa-navy/5 flex items-center justify-center text-sankofa-navy group-hover:bg-sankofa-gold/10 transition-colors">
                                                <item.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-semibold">{item.label}</div>
                                                {item.href ? (
                                                    <a href={item.href} className="text-muted-foreground hover:text-sankofa-navy transition-colors">{item.value}</a>
                                                ) : (
                                                    <p className="text-muted-foreground">{item.value}</p>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* General Inquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-6 md:p-8 rounded-2xl border shadow-lg relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sankofa-gold/10 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
                        <h2 className="text-2xl font-bold text-sankofa-navy mb-6 relative z-10">Send us a Message</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your phone number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="email@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea className="min-h-[150px]" placeholder="How can we help you?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full text-lg h-12 bg-sankofa-navy hover:bg-sankofa-navy/90"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </motion.div>

                </div>
            </Section>
        </div>
    );
}
