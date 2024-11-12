"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface HoverButtonProps {
  expandText: string;
  buttonText: string;
  icon: string | JSX.Element;
  onClick?: () => void;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  buttonText,
  icon,
  expandText,
  onClick,
}) => {
  const [expand, setExapnd] = useState(false);
  return (
    <motion.button
      layout
      onHoverStart={() => setExapnd(true)}
      onHoverEnd={() => setExapnd(false)}
      onClick={onClick}
      className="flex w-56 items-center gap-2 overflow-hidden rounded-full border-2 border-[#292d2e] bg-[#191e1f] p-1"
    >
      <motion.div layout className="flex w-full items-center">
        <motion.div
          layout
          animate={{
            width: expand ? "100%" : "40%",
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className={twMerge(
            "flex h-full items-center justify-center gap-3 rounded-full py-2",
            "bg-gradient-to-r from-[#9ae1ff] to-[#c8f4db]",
          )}
        >
          <motion.p
            variants={{
              initial: {
                opacity: 0,
                x: -30,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
              animate: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
            initial="initial"
            animate={expand ? "animate" : "initial"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={twMerge(
              "whitespace-nowrap font-semibold text-lg text-black-a12",
              expand ? "block" : "hidden",
            )}
          >
            {expandText}
          </motion.p>
          <motion.div layout>{icon}</motion.div>
        </motion.div>
        <motion.div
          layout
          animate={{
            width: expand ? "0%" : "60%",
            padding: expand ? "0px" : "6px",
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className={twMerge(
            "flex items-center justify-center rounded-full bg-white py-2.5 text-black-a12",
            !expand && "mx-1 px-2",
          )}
        >
          <motion.h1
            variants={{
              initial: { x: -20, opacity: 0 },
              animate: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
              exit: {
                opacity: [1, 0.2, 0],
                x: 30,
                transition: { duration: 0.5, ease: "easeInOut" },
              },
            }}
            initial="initial"
            animate={expand ? "exit" : "animate"}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="relative font-semibold text-white-a12 "
          >
            {buttonText}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default HoverButton;
