"use client";

import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";

interface Route {
  name: string;
  path: string;
}

const routes: Route[] = [
  {
    name: "Components",
    path: "/component",
  },
  {
    name: "Showcase",
    path: "#",
  },
  {
    name: "About",
    path: "/about",
  },
];

const menuVariants = {
  closed: {
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "afterChildren",
    },
  },
  open: {
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      className="fixed top-0 z-50 w-full bg-black-a6 bg-opacity-100 py-2 backdrop-blur-sm"
    >
      <div className="flex h-[40px] items-center justify-between px-6 pl-12 md:h-[60px] md:px-32">
        <a
          href="/"
          className="max-w-screen-xl font-semibold text-2xl text-white-a12 hover:text-white-a12 md:text-4xl"
        >
          Aura.ui
        </a>
        <div className="hidden items-center space-x-8 md:flex">
          {routes.map((item, index) => (
            <motion.a
              transition={{
                delay: index * 0.1,
                ease: "easeInOut",
                duration: 0.2,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              href={item.path}
              key={`${item.path}-${index}`}
              className="font-light text-white text-xl transition-all duration-200 ease-in hover:opacity-50"
            >
              {item.name}
            </motion.a>
          ))}

          <motion.a
            transition={{
              delay: 0.4,
              ease: "easeInOut",
              duration: 0.2,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            href="https://github.com/vishalrk1/Aura.ui"
            target="_blank"
          >
            <GitHubLogoIcon className="h-8 w-8" />
          </motion.a>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden"
          aria-label="Toggle menu"
        >
          <HamburgerMenuIcon className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="overflow-hidden md:hidden"
          >
            <motion.div className="flex flex-col items-center space-y-4 bg-white bg-opacity-40 py-4">
              {routes.map((item, index) => (
                <motion.a
                  key={`${item.path}-${index}`}
                  href={item.path}
                  variants={itemVariants}
                  className="font-light text-lg text-white transition-all duration-200 ease-in hover:opacity-50"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                variants={itemVariants}
                href="https://github.com/rainasaxena/Aura.ui"
                target="_blank"
                className="inline-block"
              >
                <GitHubLogoIcon className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
