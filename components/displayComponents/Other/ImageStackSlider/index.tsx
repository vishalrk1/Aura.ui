"use client";

import type React from "react";
import type { CSSProperties } from "react";

import { motion } from "framer-motion";

interface ImageStackSliderProps {
  images: string[];
  delay?: number;
  slideDirection?: "left" | "right" | "up" | "down";
  overlapAmount?: number;
}

const ImageStackSlider: React.FC<ImageStackSliderProps> = ({
  images,
  delay = 0.1,
  slideDirection = "left",
  overlapAmount = 0.2,
}) => {
  const clampedOverlap = Math.max(0, Math.min(1, overlapAmount));
  const getSlideOffset = () => {
    switch (slideDirection) {
      case "right":
        return { x: 20 };
      case "up":
        return { y: -20 };
      case "down":
        return { y: 20 };
      default:
        return { x: -20 };
    }
  };

  const getStackedStyle = (index: number): CSSProperties => {
    const translate = `${index * 100 * (1 - clampedOverlap)}%`;

    return slideDirection === "up" || slideDirection === "down"
      ? {
          transform: `translateY(${translate})`,
          zIndex: images.length - index,
          position: "relative" as const,
        }
      : {
          transform: `translateX(${translate})`,
          zIndex: images.length - index,
          position: "relative" as const,
        };
  };

  return (
    <div
      className={`flex ${
        slideDirection === "up" || slideDirection === "down"
          ? "flex-col"
          : "flex-row"
      } relative`}
    >
      {images.map((imgSrc, index) => (
        <motion.div
          key={index}
          style={getStackedStyle(index)}
          className="rounded-full bg-white/10 transition-colors hover:bg-white/20"
          initial="closed"
          animate="open"
          variants={{
            open: {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              transition: {
                delay: index * delay,
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            },
            closed: {
              opacity: 0,
              ...getSlideOffset(),
              scale: 0.8,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            },
          }}
          whileHover={{
            scale: 1.1,
            translateY: -5,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
        >
          <img
            src={imgSrc}
            alt={`Image ${index}`}
            className="w-16 h-16 object-cover rounded-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageStackSlider;
