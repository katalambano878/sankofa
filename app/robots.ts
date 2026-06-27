import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/private/", "/api/"],
                crawlDelay: 0,
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/private/", "/api/"],
                crawlDelay: 0,
            },
            {
                userAgent: "Google-Extended",
                allow: "/",
                disallow: ["/private/", "/api/"],
            },
            {
                userAgent: "GPTBot",
                allow: "/",
                disallow: ["/private/", "/api/"],
            },
            {
                userAgent: "CCBot",
                allow: "/",
                disallow: ["/private/", "/api/"],
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: ["/private/", "/api/"],
                crawlDelay: 1,
            },
        ],
        sitemap: `${COMPANY_INFO.website}/sitemap.xml`,
    };
}
