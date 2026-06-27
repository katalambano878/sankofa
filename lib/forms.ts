import { z } from "zod";

export const serviceCategories = [
    "Cleaning & Facility Services",
    "Maintenance Services",
    "Renovation & Interior Works",
    "Solar Cleaning & Energy Solutions",
    "Equipment & Material Supply",
    "Hospitality & Staffing Support",
    "Other",
] as const;

// Request a Quote — fields per company brief:
// Name, Phone Number, Email, Service Required, Project Location, Message
export const quoteRequestSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(7, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    service: z.enum(serviceCategories),
    location: z.string().min(2, "Project location is required"),
    message: z.string().min(10, "Please provide at least 10 characters"),
});

export type QuoteRequest = z.infer<typeof quoteRequestSchema>;

export const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    phone: z.string().min(7, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactRequest = z.infer<typeof contactSchema>;
