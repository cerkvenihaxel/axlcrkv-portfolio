"use client";

import { motion } from "framer-motion";

export function BorderBeam({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 rounded-lg pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-[#00ff88] via-[#00ccff] to-[#00ff88] bg-clip-border animate-gradient bg-[length:200%_auto]" />
    </motion.div>
  );
}
