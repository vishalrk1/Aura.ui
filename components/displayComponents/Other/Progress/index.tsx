"use client";

import { motion } from "framer-motion";

interface SegmentedLoaderProps {
  currentStep: number;
  totalSteps: number;
  height?: string;
}

interface StepLoaderProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function SegmentedLoader({
  currentStep,
  totalSteps,
  height = "h-2",
}: SegmentedLoaderProps) {
  return (
    <div className="w-full">
      <div className="flex gap-1">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={`progress-${index}`}
            className={`flex-1 ${height} overflow-hidden rounded-full bg-[#222222]`}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{
                width: index <= currentStep ? "100%" : "0%",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="h-full bg-gray-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function StepLoader({
  currentStep,
  totalSteps,
  className = "",
}: StepLoaderProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <div className={`p-4 ${className}`}>
      <div className="relative">
        <div className="-translate-y-1/2 absolute top-1/2 left-0 h-0.5 w-full bg-white" />
        <div
          className="-translate-y-1/2 absolute top-1/2 left-0 h-0.5 bg-white-a4 transition-all duration-300"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        />
        <div className="relative flex justify-between">
          {steps.map((index) => (
            <div
              key={index}
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                index <= currentStep
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black-a11"
              }transition-colors duration-300`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
