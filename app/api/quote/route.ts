import { NextRequest, NextResponse } from "next/server";
import { quoteRequestSchema } from "@/lib/forms";
import { sendSubmissionEmails } from "@/lib/email";
import { z } from "zod";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const validatedData = quoteRequestSchema.parse(body);

        await sendSubmissionEmails({
            kind: "quote",
            name: validatedData.name,
            email: validatedData.email,
            fields: {
                Name: validatedData.name,
                Phone: validatedData.phone,
                Email: validatedData.email,
                "Service Required": validatedData.service,
                "Project Location": validatedData.location,
                Message: validatedData.message,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: "Quote request submitted successfully",
                data: {
                    id: `QUOTE-${Date.now()}`,
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

        console.error("Quote submission error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}
