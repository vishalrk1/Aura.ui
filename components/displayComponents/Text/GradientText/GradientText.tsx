import React from "react";
import { twMerge } from "tailwind-merge";

interface TextProps {
  startColor?: string;
  endColor?: string;
  text: string;
  className?: string;
}

const GradientText: React.FC<TextProps> = ({
  startColor = "#666666",
  endColor = "#ffffff",
  text,
  className,
}) => {
  return (
    <h1
      className={twMerge("text-5xl font-bold text-center", className)}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </h1>
  );
};

export default GradientText;
