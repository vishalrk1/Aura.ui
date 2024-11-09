"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface AnimatedBorderProps {
  className?: string;
}

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({ className }) => {
  return (
    <motion.div
      layout
      initial="closed"
      animate="open"
      exit="closed"
      variants={{
        open: {
          scaleX: 1,
          originX: 0,
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
        closed: {
          scaleX: 0,
          originX: 0,
          transition: {
            delay: 0,
            type: "spring",
            stiffness: 100,
            damping: 20,
          },
        },
      }}
      className={twMerge("w-full border-white/10 border-t-2", className)}
    />
  );
};

export default AnimatedBorder;
