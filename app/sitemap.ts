import { MetadataRoute } from 'next'
import { COMPANY_INFO } from '@/lib/constants'

const baseUrl = COMPANY_INFO.website

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        { path: "", priority: 1.0, changeFrequency: "weekly" as const },
        { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
        { path: "/request-quote", priority: 0.9, changeFrequency: "monthly" as const },
        { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/faqs", priority: 0.7, changeFrequency: "monthly" as const },
        { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
        { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }))
}
