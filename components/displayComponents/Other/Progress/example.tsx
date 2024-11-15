"use client";

import { useEffect, useState } from "react";

import { SegmentedLoader, StepLoader } from ".";

export const AutoStepProgressExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep === totalSteps - 1) {
          return 0;
        }
        return prevStep + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl">
      <StepLoader currentStep={currentStep} totalSteps={totalSteps} />
      <div className="mt-4 text-center">
        Current Step: {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};

export const SegmentedLoaderExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep === totalSteps - 1) {
          return 0;
        }
        return prevStep + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl">
      <SegmentedLoader currentStep={currentStep} totalSteps={totalSteps} />
      <div className="mt-4 text-center">
        Current Step: {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};
