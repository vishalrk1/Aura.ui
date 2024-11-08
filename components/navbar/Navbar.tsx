"use client";

import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
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
    path: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      layout
      className="fixed top-0 w-full overflow-hidden z-50 bg-transparent bg-opacity-40 backdrop-blur-sm bg-white transition-all duration-300"
    >
      <div className="px-4 flex justify-between items-center h-[40px] md:h-[80px] md:px-32">
        <a
          href="/"
          className="text-xl md:text-4xl font-semibold text-white-a12 max-w-screen-xl hover:text-white-a12"
        >
          Aura.ui
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {routes.map((item, index) => (
            <a
              href={item.path}
              key={`${item.path}-${index}`}
              className="text-xl font-light text-white hover:opacity-50 transition-all duration-200 ease-in"
            >
              {item.name}
            </a>
          ))}

          <a href="https://github.com/rainasaxena/Aura.ui" target="_blank">
            <GitHubLogoIcon className="h-8 w-8" />
          </a>
        </div>
        <div className="">
          <HamburgerMenuIcon
            onClick={() => setIsOpen(!isOpen)}
            className="h-6 w-6 cursor-pointer block md:hidden"
          />
        </div>
      </div>
      {isOpen && (
        <motion.div
          layout
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0, transition: { duration: 0.3 } }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            delayChildren: 1,
            staggerChildren: 0.2,
          }}
          className="flex w-full items-center flex-col gap-2"
        >
          <motion.p>A</motion.p>
          <motion.p>B</motion.p>
          <motion.p>A</motion.p>
          <motion.p>B</motion.p>
          <motion.p>A</motion.p>
          <motion.p>B</motion.p>
          <motion.p>A</motion.p>
          <motion.p>B</motion.p>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
