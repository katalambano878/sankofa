import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/forms";
import { z } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the data
        const validatedData = contactSchema.parse(body);

        // TODO: In production, you would:
        // 1. Save to database
        // 2. Send email notification to support team
        // 3. Send auto-reply confirmation to customer
        // 4. Create ticket in support system (if applicable)

        // For now, we'll just log it and return success
        console.log("Contact Form Submitted:", {
            timestamp: new Date().toISOString(),
            ...validatedData,
        });

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 500));

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully",
                data: {
                    id: `CONTACT-${Date.now()}`,
                    submittedAt: new Date().toISOString(),
                },
            },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation error",
                    errors: error.issues,
                },
                { status: 400 }
            );
        }

        console.error("Contact form submission error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}

