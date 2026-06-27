"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { COMPANY_INFO } from "@/lib/constants";
import { quoteRequestSchema, serviceCategories } from "@/lib/forms";
import Section from "@/components/ui/section";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Check, Loader2, MessageCircle } from "lucide-react";

type QuoteValues = z.infer<typeof quoteRequestSchema>;

export default function RequestQuoteContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitted, setSubmitted] = useState<QuoteValues | null>(null);

    const form = useForm<QuoteValues>({
        resolver: zodResolver(quoteRequestSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            location: "",
            message: "",
        },
    });

    const onSubmit = async (data: QuoteValues) => {
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            if (!res.ok) {
                throw new Error(result.message || "Failed to submit quote request");
            }
            setSubmitted(data);
            setIsSuccess(true);
            toast.success("Quote request submitted successfully!");
        } catch (error) {
            console.error("Error submitting quote:", error);
            toast.error(error instanceof Error ? error.message : "Failed to submit quote request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Section background="hero-image" className="pt-24 pb-16 md:pt-32 md:pb-20">
                <div className="max-w-4xl mx-auto text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                        {isSuccess ? "Request Received!" : "Request a Quote"}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        {isSuccess
                            ? "Thank you. Our team will be in touch shortly."
                            : "Tell us what you need and we'll prepare a competitive, tailored quote."}
                    </p>
                </div>
            </Section>

            <Section background="muted" className="relative z-10 -mt-8 md:-mt-10 pb-12 md:pb-20">
                <div className="container max-w-3xl mx-auto px-4">
                    {isSuccess ? (
                        <Card className="text-center p-6 md:p-8 shadow-lg">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                <Check className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-sankofa-navy mb-4">Submission Successful</h2>
                            <p className="text-muted-foreground mb-6 md:mb-8">
                                Our team will review your requirements and contact you at{" "}
                                <strong>{submitted?.email}</strong> or <strong>{submitted?.phone}</strong> shortly.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href="/">Back to Home</a>
                                </Button>
                                <Button asChild className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                                    <a
                                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                                            `Hi ${COMPANY_INFO.name}, I just submitted a quote request for ${submitted?.service}.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    ) : (
                        <Card className="border-t-4 border-t-sankofa-gold shadow-lg">
                            <CardHeader className="p-4 md:p-6">
                                <CardTitle>Project Details</CardTitle>
                                <CardDescription>
                                    Complete the form below and our team will respond within one business day.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <FormField control={form.control} name="name" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl><Input placeholder="Your full name" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="phone" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl><Input placeholder="+974 ..." {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <FormField control={form.control} name="email" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl><Input placeholder="you@company.com" {...field} /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <FormField control={form.control} name="service" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Service Required</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            {serviceCategories.map((s) => (
                                                                <SelectItem key={s} value={s}>{s}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                            <FormField control={form.control} name="location" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Project Location</FormLabel>
                                                    <FormControl><Input placeholder="e.g. West Bay, Doha" {...field} /></FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />
                                        </div>

                                        <FormField control={form.control} name="message" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us about your project, scope, and any specific requirements."
                                                        className="min-h-[120px]"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />

                                        <div className="flex justify-end pt-2">
                                            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                                                {isSubmitting ? (
                                                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</>
                                                ) : (
                                                    "Submit Request"
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </Section>
        </div>
    );
}
