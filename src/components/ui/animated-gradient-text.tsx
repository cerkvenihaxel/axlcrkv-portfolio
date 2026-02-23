"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#00ff88] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
