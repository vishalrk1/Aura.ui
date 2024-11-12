"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
};

function Container({
  children,
  className,
  animateOnView = true,
}: React.HTMLProps<HTMLDivElement> & { animateOnView?: boolean }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef);

  return (
    <motion.div
      ref={containerRef}
      variants={container}
      initial="hidden"
      animate={animateOnView ? (isInView ? "show" : "hidden") : "show"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Item({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export { Container, Item };
