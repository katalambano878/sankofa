import { Metadata } from "next";
import { COMPANY_INFO } from "./constants";
import { getCanonicalUrl } from "./schema-utils";

export interface MetadataProps {
    title: string;
    description: string;
    image?: string;
    noIndex?: boolean;
    keywords?: string[];
    authors?: { name: string; url?: string }[];
    canonical?: string;
    alternates?: {
        languages?: Record<string, string>;
    };
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
    video?: {
        url: string;
        type?: string;
        width?: number;
        height?: number;
        thumbnailUrl?: string;
    };
    twitterCard?: "summary" | "summary_large_image" | "app" | "player";
}

export function constructMetadata({
    title,
    description,
    image = "/og-image.png",
    noIndex = false,
    keywords = [],
    authors = [],
    canonical,
    alternates,
    type = "website",
    publishedTime,
    modifiedTime,
    section,
    tags,
    video,
    twitterCard = "summary_large_image",
}: MetadataProps): Metadata {
    const fullTitle = `${title} | Sankofa Global`;
    const metadataBase = new URL(COMPANY_INFO.website);
    const canonicalUrl = canonical ? getCanonicalUrl(canonical) : undefined;

    const metadata: Metadata = {
        title: fullTitle,
        description,
        keywords: keywords.length > 0 ? keywords : undefined,
        authors: authors.length > 0 ? authors : undefined,
        metadataBase,
        alternates: {
            canonical: canonicalUrl,
            languages: alternates?.languages,
        },
        openGraph: {
            title: fullTitle,
            description,
            url: canonicalUrl || COMPANY_INFO.website,
            siteName: COMPANY_INFO.name,
            locale: "en_QA",
            type: type,
            images: [
                {
                    url: image.startsWith("http") ? image : `${COMPANY_INFO.website}${image}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...(type === "article" && {
                publishedTime,
                modifiedTime,
                section,
                tags,
                authors: authors.map(a => a.name),
            }),
            ...(video && {
                videos: [
                    {
                        url: video.url,
                        type: video.type,
                        width: video.width,
                        height: video.height,
                        secureUrl: video.url.startsWith("https") ? video.url : undefined,
                    },
                ],
            }),
        },
        twitter: {
            card: twitterCard,
            title: fullTitle,
            description,
            images: [image.startsWith("http") ? image : `${COMPANY_INFO.website}${image}`],
            ...(video && {
                player: {
                    url: video.url,
                    width: video.width,
                    height: video.height,
                },
                image: video.thumbnailUrl || image,
            }),
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };

    return metadata;
}
