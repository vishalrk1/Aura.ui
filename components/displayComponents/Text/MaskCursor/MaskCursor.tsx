"use client";

import type React from "react";
import type { ReactNode } from "react";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import useMousePosition from "./useMousePosition"; // Ensure this is the correct relative path

interface MaskCursorProps {
  // children: ReactNode;
  hoverColor?: string;
  maskColor?: string;
  clasName?: string;
}
const MaskCursor: React.FC<MaskCursorProps> = ({
  // children,
  clasName,
  hoverColor,
  maskColor = "#A5FECB",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const maskX = useMotionValue(0);
  const maskY = useMotionValue(0);
  const size = isHovered ? 100 : 40;

  // Reference to the container to calculate offsets
  const containerRef = useRef<HTMLDivElement>(null);

  // Update mask position when the mouse moves
  useEffect(() => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      maskX.set(x - containerRect.left - size / 2);
      maskY.set(y - containerRect.top - size / 2);
    }
  }, [x, y, size, maskX, maskY]);

  // Smoothen the transformation for mask position using `framer-motion`
  const smoothMaskX = useTransform(maskX, (value) => `${value}px`);
  const smoothMaskY = useTransform(maskY, (value) => `${value}px`);

  return (
    <div
      className={twMerge("relative p-10 h-full w-full", clasName)}
      ref={containerRef}
    >
      <motion.div
        className={twMerge("absolute inset-0 text-4xl", `bg-[${maskColor}]`)}
        animate={{
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
        style={{
          WebkitMaskImage: "url('/black-circle.svg')",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: `${smoothMaskX.get()} ${smoothMaskY.get()}`,
          color: hoverColor ? hoverColor : "green",
        }}
      >
        <motion.p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="text-white-a12"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          minima! Officiis ratione quidem, odit voluptatum sit non est aliquam
          impedit, nobis earum eius animi cum ab nemo aliquid dignissimos quo.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MaskCursor;
