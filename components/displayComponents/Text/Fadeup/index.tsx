import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  className?: string;
}

const FadeUpText: React.FC<Props> = ({ text, className }) => {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
        key={text} 
        initial={{
          y: 40,
          opacity: 0,
          rotateX: -90,
          transformOrigin: "50% 100%",
        }}
        animate={{
          y: 0,
          opacity: 1,
          rotateX: 0,
          transformOrigin: "50% 100%",
        }}
        exit={{
          y: -40,
          opacity: [1, 0.5, 0],
          rotateX: 90,
          transformOrigin: "50% 0%",
          transition: {
            duration: 0.4,
            ease: [0.65, 0, 0.35, 1],
          },
        }}
        transition={{
          duration: 0.4,
          ease: [0.65, 0, 0.35, 1],
        }}
        className={twMerge("text-white text-base font-bold", className)}
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        {text}
      </motion.span>
    </AnimatePresence>
  );
};

export default FadeUpText;
