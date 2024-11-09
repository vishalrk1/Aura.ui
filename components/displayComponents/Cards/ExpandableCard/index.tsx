"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ExpandableCardWrapperProps {
  children: ReactNode;
  isOpen: boolean;
  width: string;
}

export const ExpandableCardWrapper: React.FC<ExpandableCardWrapperProps> = ({
  children,
  isOpen,
  width,
}) => (
  <motion.div
    layout
    className="group relative flex cursor-pointer flex-col gap-4 overflow-hidden rounded-2xl bg-[#1A1A1A] p-4 shadow-inner transition-shadow ease-out hover:shadow-md"
    initial="close"
    animate={isOpen ? "open" : "close"}
    variants={{
      open: {
        width: width,
        transition: { type: "spring", damping: 15, stiffness: 100 },
      },
      close: {
        width: "200px",
        transition: { delay: 0.3, type: "spring", damping: 15, stiffness: 100 },
      },
    }}
  >
    {children}
  </motion.div>
);

interface ExpandableCardHeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string | ReactNode;
  children: ReactNode;
}

export const ExpandableCardHeader: React.FC<ExpandableCardHeaderProps> = ({
  isOpen,
  setIsOpen,
  title,
  children,
}) => {
  return (
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-4"
    >
      <motion.div
        layout
        className="flex flex-row items-center justify-between w-full"
      >
        <motion.div className="flex-grow">{title}</motion.div>
        {isOpen && (
          <motion.div className="bg-[#0DFFC5] p-1 rounded-full">
            <X className="w-5 h-5 text-background" />
          </motion.div>
        )}
      </motion.div>
      <motion.div layout className="flex flex-col gap-1">
        {children}
      </motion.div>
    </motion.div>
  );
};

interface ExpandableCardBodyProps {
  children: ReactNode;
  isOpen: boolean;
}

export const ExpandableCardBody: React.FC<ExpandableCardBodyProps> = ({
  children,
  isOpen,
}) => (
  <>
    {isOpen && (
      <motion.div
        layout
        initial="closed"
        animate="open"
        exit="closed"
        variants={{
          open: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.3,
            },
          },
          closed: {
            transition: {
              staggerChildren: 0.05,
              staggerDirection: -1,
            },
          },
        }}
        className="flex flex-col items-start gap-2"
      >
        {children}
      </motion.div>
    )}
  </>
);
