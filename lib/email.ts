import { Resend } from "resend";
import { COMPANY_INFO } from "@/lib/constants";

/**
 * Email delivery via Resend.
 *
 * Required env vars (set in .env.local and on the host):
 *   RESEND_API_KEY   – API key from https://resend.com
 *   CONTACT_EMAIL    – inbox that receives form submissions (defaults below)
 *   FROM_EMAIL       – verified sender, e.g. "Sankofa Global <noreply@sankofaglobaltrading.com>"
 *                      Until a domain is verified in Resend you may use
 *                      "Sankofa Global <onboarding@resend.dev>" for testing.
 *
 * If RESEND_API_KEY is missing, submissions are logged to the server console
 * instead of emailed, so local development works without a key.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "sankofaglobaltrading@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "Sankofa Global <onboarding@resend.dev>";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
    return `
        <tr>
            <td style="padding:8px 12px;font-weight:600;color:#071B35;background:#f5f5f5;border:1px solid #e5e5e5;white-space:nowrap;">${escapeHtml(label)}</td>
            <td style="padding:8px 12px;color:#333;border:1px solid #e5e5e5;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td>
        </tr>`;
}

function notificationHtml(title: string, fields: Record<string, string>): string {
    const rows = Object.entries(fields)
        .map(([label, value]) => row(label, value))
        .join("");
    return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#071B35;padding:20px 24px;border-radius:8px 8px 0 0;">
            <h2 style="color:#C8A15A;margin:0;font-size:18px;">${escapeHtml(title)}</h2>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
            ${rows}
        </table>
        <p style="color:#888;font-size:12px;margin-top:16px;">
            Sent from the ${escapeHtml(COMPANY_INFO.website.replace(/^https?:\/\//, ""))} website.
        </p>
    </div>`;
}

function autoReplyHtml(name: string, intro: string): string {
    return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#333;">
        <div style="background:#071B35;padding:24px;border-radius:8px 8px 0 0;text-align:center;">
            <h2 style="color:#C8A15A;margin:0;font-size:20px;">Sankofa Global</h2>
            <p style="color:#ffffff;margin:6px 0 0;font-size:13px;">Building Excellence Through Service</p>
        </div>
        <div style="padding:24px;border:1px solid #e5e5e5;border-top:none;border-radius:0 0 8px 8px;">
            <p style="font-size:15px;">Dear ${escapeHtml(name)},</p>
            <p style="font-size:15px;line-height:1.6;">${escapeHtml(intro)}</p>
            <p style="font-size:15px;line-height:1.6;">
                Our team will review your enquiry and get back to you shortly. For urgent matters,
                you can reach us on WhatsApp at ${escapeHtml(COMPANY_INFO.phone)}.
            </p>
            <p style="font-size:15px;margin-top:24px;">Warm regards,<br/><strong>The Sankofa Global Team</strong></p>
            <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;"/>
            <p style="font-size:12px;color:#888;">
                ${escapeHtml(COMPANY_INFO.legalName)} · ${escapeHtml(COMPANY_INFO.address)}<br/>
                ${escapeHtml(COMPANY_INFO.email)}
            </p>
        </div>
    </div>`;
}

export type SubmissionKind = "contact" | "quote";

interface SendArgs {
    kind: SubmissionKind;
    /** Customer name */
    name: string;
    /** Customer email for reply-to + auto-reply */
    email: string;
    /** Ordered fields to display in the notification email */
    fields: Record<string, string>;
}

export async function sendSubmissionEmails({ kind, name, email, fields }: SendArgs): Promise<void> {
    const subject =
        kind === "quote"
            ? `New Quote Request — ${name}`
            : `New Contact Enquiry — ${name}`;
    const title = kind === "quote" ? "New Quote Request" : "New Contact Enquiry";
    const autoReplyIntro =
        kind === "quote"
            ? "Thank you for requesting a quote from Sankofa Global. We've received your request and appreciate your interest in our services."
            : "Thank you for contacting Sankofa Global. We've received your message and appreciate you reaching out.";

    if (!resend) {
        console.warn(
            "[email] RESEND_API_KEY not set — submission logged instead of emailed:",
            { kind, name, email, fields }
        );
        return;
    }

    // Notification to the team
    await resend.emails.send({
        from: FROM_EMAIL,
        to: CONTACT_EMAIL,
        replyTo: email,
        subject,
        html: notificationHtml(title, fields),
    });

    // Auto-reply confirmation to the customer (best-effort)
    try {
        await resend.emails.send({
            from: FROM_EMAIL,
            to: email,
            subject: "We've received your message — Sankofa Global",
            html: autoReplyHtml(name, autoReplyIntro),
        });
    } catch (err) {
        console.error("[email] Auto-reply failed (notification still sent):", err);
    }
}
