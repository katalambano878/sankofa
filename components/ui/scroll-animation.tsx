"use client";

import { motion, useInView, UseInViewOptions, Variant } from "framer-motion";
import { useRef } from "react";

type ScrollAnimationProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "fade" | "slideUp" | "slideRight" | "slideLeft" | "scale";
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
};

export function ScrollAnimation({
    children,
    className = "",
    variant = "slideUp",
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-50px" },
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, viewport);

    const variants = {
        hidden: { opacity: 0, y: variant === "slideUp" ? 20 : 0, x: variant === "slideRight" ? -20 : variant === "slideLeft" ? 20 : 0, scale: variant === "scale" ? 0.95 : 1 },
        visible: { opacity: 1, y: 0, x: 0, scale: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};
