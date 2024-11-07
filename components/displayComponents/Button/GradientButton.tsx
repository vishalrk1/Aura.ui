"use client";

import type React from "react";

import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  startColor: string;
  endColor: string;
  middleColor?: string;
}

const GradientButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  startColor,
  middleColor,
  endColor,
}) => {
  return (
    <div
      className={`rounded-lg p-1 ${className}`}
      style={{
        background: `linear-gradient(to right, ${startColor}${middleColor ? `, ${middleColor}` : ""}, ${endColor})`,
      }}
    >
      <button
        onClick={onClick}
        className="h-full w-full rounded-md bg-white-a12 px-4 py-2 text-black-a12 dark:bg-black-a12 dark:text-white-a12"
      >
        <motion.span whileHover={{ scale: 1.5 }} className="">
          {text}
        </motion.span>
      </button>
    </div>
  );
};

export default GradientButton;
