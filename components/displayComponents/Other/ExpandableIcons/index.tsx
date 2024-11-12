"use client";

import type React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  icons: {
    name: string;
    icon: JSX.Element;
  }[];
}

const ExpandableIcons: React.FC<Props> = ({ isOpen, setIsOpen, icons }) => {
  return (
    <motion.div
      className="bg-white-a12 cursor-pointer rounded-full p-3 flex items-center gap-4"
      layout
      initial={false}
      animate={{ width: isOpen ? "open" : "close" }}
      exit="close"
      variants={{
        open: {
          width: "auto",
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 100,
            duration: 0.1,
          },
        },
        close: {
          width: "40px",
          transition: {
            delay: 0.2 * icons.length,
            type: "spring",
            damping: 15,
            stiffness: 100,
          },
        },
      }}
      transition={{
        layout: {
          duration: 0.1,
          type: "spring",
          damping: 15,
          stiffness: 100,
        },
      }}
      onTransitionEnd={(e) => {
        console.log(e);
        console.log("Aniamtion Finished");
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {isOpen ? (
          <X className="w-8 h-8 text-gray-700" />
        ) : (
          <Menu className="w-8 h-8 text-gray-700" />
        )}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex items-center gap-4"
            layout
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                transition: {
                  delay: 0.3,
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                  staggerDirection: -1,
                },
              },
              closed: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: 0,
                },
              },
            }}
          >
            {icons.map((item, index) => (
              <motion.div
                exit="closed"
                animate="open"
                initial="closed"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.1,
                  },
                }}
                variants={{
                  open: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.2 * index,
                      stiffness: 300,
                      damping: 20,
                    },
                  },
                  closed: {
                    opacity: 0,
                    x: -20,
                    transition: {
                      delay: 0.2 * index,
                      stiffness: 300,
                      damping: 20,
                    },
                  },
                }}
                key={item.name}
              >
                <motion.div>{item.icon}</motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExpandableIcons;
