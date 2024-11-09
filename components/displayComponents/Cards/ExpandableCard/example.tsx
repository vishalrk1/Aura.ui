"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  ExpandableCardBody,
  ExpandableCardHeader,
  ExpandableCardWrapper,
} from ".";
import HoverFillButton from "../../Button/HoverFillButton/HoverFillButton";
import AnimatedBorder from "../../Other/AnimatedBorder";

export const ExapandedCardExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ExpandableCardWrapper width="400px" isOpen={isOpen}>
      <ExpandableCardHeader
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={
          <motion.div className="w-max rounded-full bg-[#0DFFC5]/5 px-3 py-1 font-medium font-sans text-[#0DFFC5] text-sm">
            Press On this card
          </motion.div>
        }
      >
        <motion.div layout className="flex flex-col pl-2">
          <motion.p
            layout
            className="select-none font-medium font-sans text-md text-white"
          >
            This Card Expands 🫡
          </motion.p>
          <motion.p
            layout
            key={isOpen ? "open" : "close"}
            className="mt-1.5 select-none font-sans text-sm text-white/70"
          >
            The card shifts its layou smoothly on tap
          </motion.p>
        </motion.div>
      </ExpandableCardHeader>
      <ExpandableCardBody isOpen={isOpen}>
        <AnimatedBorder />
        <div className="mt-4 flex w-full items-center justify-center">
          <HoverFillButton onClick={() => setIsOpen(false)}>
            Hover Here
          </HoverFillButton>
        </div>
      </ExpandableCardBody>
    </ExpandableCardWrapper>
  );
};
