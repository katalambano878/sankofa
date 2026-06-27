import { COMPANY_INFO } from "./constants";

/**
 * Generate canonical URL for a given path
 */
export function getCanonicalUrl(path: string): string {
    const baseUrl = COMPANY_INFO.website;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}

/**
 * Calculate reading time in minutes based on word count
 */
export function calculateReadingTime(wordCount: number): number {
    const wordsPerMinute = 200;
    return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Extract word count from HTML content
 */
export function extractWordCount(html: string): number {
    // Remove HTML tags and get text content
    const text = html.replace(/<[^>]*>/g, " ");
    // Split by whitespace and filter out empty strings
    const words = text.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

/**
 * Generate breadcrumb items from path segments
 */
export function generateBreadcrumbs(path: string): Array<{ name: string; url: string }> {
    const segments = path.split("/").filter(Boolean);
    const breadcrumbs: Array<{ name: string; url: string }> = [
        { name: "Home", url: COMPANY_INFO.website }
    ];

    let currentPath = "";
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const name = segment
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        breadcrumbs.push({
            name,
            url: `${COMPANY_INFO.website}${currentPath}`
        });
    });

    return breadcrumbs;
}

/**
 * Format date for schema.org (ISO 8601)
 */
export function formatSchemaDate(date: string | Date): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toISOString();
}

/**
 * Generate hreflang tags for alternate languages
 */
export function generateHreflangTags(
    path: string,
    languages: string[] = ["en-GH"]
): Array<{ hreflang: string; href: string }> {
    return languages.map(lang => ({
        hreflang: lang,
        href: `${COMPANY_INFO.website}${path}`
    }));
}

