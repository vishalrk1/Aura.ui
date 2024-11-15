"use client";

import type { Variants } from "framer-motion";
import type React from "react";
import type { ReactNode } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { SegmentedLoader } from "../../Other/Progress";

interface ProgressCardProps {
  steps: ReactNode[];
}

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const ProgressCard: React.FC<ProgressCardProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);

  const handleNext = (): void => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = (): void => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <motion.div 
      layout
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mx-auto w-full max-w-lg rounded-xl bg-[#111111] shadow-lg flex flex-col overflow-hidden"
    >
      <div className="p-4">
        <SegmentedLoader
          currentStep={currentStep}
          totalSteps={steps.length}
          height="h-2"
        />
      </div>
      <motion.div 
        layout 
        className="relative overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            layout
            key={currentStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              layout: {
                duration: 0.3,
                ease: "easeInOut"
              },
              x: { type: "spring", stiffness: 300, damping: 30, duration: 0.1 },
              opacity: { duration: 0.1 },
            }}
            className="w-full top-0 left-0"
          >
            {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div 
        layout
        className="flex justify-between border-[#222222] border-t-2 bg-[#0f0f0f] p-4"
      >
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={twMerge(
            `relative w-max rounded-xl border-0 px-4 py-3 text-sm z-0 flex items-center justify-center gap-2 overflow-hidden bg-[#191e1f] border-[#292d2e] font-semibold capitalize text-white-a12 transition-transform duration-300
            disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95`,
          )}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className={twMerge(
            `relative w-max rounded-xl border-0 px-4 py-3 text-sm z-0 flex items-center justify-center gap-2 overflow-hidden bg-[#191e1f] border-[#292d2e] font-semibold capitalize text-white-a12 transition-transform duration-300
            disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95`,
          )}
        >
          Next
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProgressCard;