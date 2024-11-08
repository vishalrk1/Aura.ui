<<<<<<< HEAD
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TextProps{
    startColor : string,
    endColor : string,
    text : string,
    className?: string
}

const GradientText: React.FC<TextProps> = ({startColor="#666666", endColor="#ffffff", text, className}) => {
  return (
    <h1
      className={twMerge("text-5xl font-bold text-center",className)}
      style={{
        backgroundImage: `linear-gradient(to bottom, ${startColor}, ${endColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      {text}
    </h1>
  )
}
=======
import React from "react";

const GradientText = () => {
  return <div>GradientText</div>;
};
>>>>>>> e72448abccbb3199524f63f14d1c1f3f95ee8b5c

export default GradientText;
