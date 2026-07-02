import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: COMPANY_INFO.legalName,
        short_name: "Sankofa Global",
        description: COMPANY_INFO.description,
        start_url: "/",
        display: "standalone",
        background_color: "#FBF8F1",
        theme_color: "#071B35",
        icons: [
            { src: "/icon-32.png", sizes: "32x32", type: "image/png" },
            { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
            { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
    };
}
