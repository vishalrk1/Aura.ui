'use client'; // Mark this file as a Client Component

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './useMousePosition'; // Ensure this is the correct relative path

interface Mask {
  x: number;
  y: number;
}

const MaskCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  
  // Set the size of the mask (adjust size as needed)
  const size = isHovered ? 100 : 40;

  // Calculate the offset of the mask based on the cursor position
  // The mask position needs to be adjusted so that it aligns correctly with the cursor
  const maskOffsetX = x - size * 4.9;  // Center the mask on the cursor's X position
  const maskOffsetY = y - size * 3.8;  // Center the mask on the cursor's Y position

  return (
    <main className="relative p-10">
      {/* Mask */}
      <motion.div
        className="absolute w-full h-full bg-[#A5FECB] text-4xl"
        animate={{
          WebkitMaskPosition: `${maskOffsetX}px ${maskOffsetY}px`, // Center mask on cursor
          WebkitMaskSize: `${size}px`, // Set mask size
        }}
        transition={{ type: 'tween', ease: 'backOut' }}
        style={{
          maskImage: "url('Ellipse1.svg')",
          maskRepeat: "no-repeat",
          maskPosition: "20%",
          color: "black",
          WebkitMaskImage:
            "url('https://www.svgrepo.com/show/137222/black-circle.svg')", // for Safari compatibility
        }}
      >
        <p onMouseEnter={() => { setIsHovered(!isHovered); }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          minima! Officiis ratione quidem, odit voluptatum sit non est aliquam
          impedit, nobis earum eius animi cum ab nemo aliquid dignissimos quo.
        </p>
      </motion.div>

      {/* Body */}
      <div className="text-4xl">
        <p>
          Necessitatibus voluptatibus!
          <span className="text-[#A5FECB]">Voluptates mollitia</span>
          aspernatur, ipsum consequatur blanditiis dolor obcaecati at eaque ipsa
          vitae dignissimos temporibus sequi fugiat magni facilis.
        </p>
      </div>
    </main>
  );
};

export default MaskCursor;
