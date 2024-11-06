"use client";
import {motion} from "framer-motion";
import React from "react";

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
      className={`p-1 rounded-lg ${className}`}
      style={{
        background: `linear-gradient(to right, ${startColor}${middleColor ? `, ${middleColor}` : ""}, ${endColor})`,
      }}
    >
      <button
        onClick={onClick}
        className="w-full h-full py-2 px-4 bg-white-a12 text-black-a12 rounded-md dark:bg-black-a12 dark:text-white-a12"
      >
        <motion.span whileHover={{scale:1.5}} className="">
          {text}
        </motion.span>
      </button>
    </div>
  );
};

export default GradientButton;
