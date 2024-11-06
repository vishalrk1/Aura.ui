"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Props {
  text: string[];
  delay: number;
}


const FadeUpText = () => {
  const texts = ["Aura", "Creative", "Animated"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 relative flex items-center justify-center perspective-500">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={texts[currentIndex]}
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
          className="absolute text-white text-4xl font-bold"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default FadeUpText;
