
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Request a Quote",
    description: "Get a customized quote for cleaning, maintenance, renovation, energy, or hospitality services. Fill out our simple form with your details and requirements.",
    keywords: [
        "Service Quote Qatar",
        "Cleaning Quote Doha",
        "Maintenance Quote Qatar",
        "Renovation Quote Qatar",
        "Request a Quote Sankofa Global",
        "Facility Services Quote",
        "Solar Cleaning Quote Qatar"
    ],
    canonical: "/request-quote",
});

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
