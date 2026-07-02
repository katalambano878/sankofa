import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({
    className,
    onClick,
    size = "default",
}: {
    className?: string;
    onClick?: () => void;
    /** @deprecated Kept for compatibility; logo asset is used for all contexts */
    variant?: "light" | "dark";
    size?: "default" | "compact";
}) {
    const heightClass = size === "compact" ? "h-9 md:h-10" : "h-11 md:h-14";

    return (
        <Link
            href="/"
            onClick={onClick}
            aria-label="Sankofa Global — Home"
            className={cn("group inline-flex items-center relative z-50", className)}
        >
            <Image
                src="/logo.png"
                alt="Sankofa Global"
                width={583}
                height={428}
                priority
                className={cn(
                    heightClass,
                    "w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                )}
            />
        </Link>
    );
}
