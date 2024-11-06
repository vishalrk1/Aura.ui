"use client";

import * as FadeIn from "@/components/motion/staggers/fade";
import { ComponentArticle, ComponentCategories } from "@/types/component";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  onSelectArticle: (slug: string) => void;
  articles: ComponentArticle[];
}

const Sidebar = ({ onSelectArticle, articles }: SidebarProps) => {
  const { slug } = useParams();
  const groupedArticles = ComponentCategories.reduce(
    (acc, category) => {
      acc[category] = articles.filter(
        (article) => article.category === category,
      );
      return acc;
    },
    {} as Record<string, ComponentArticle[]>,
  );

  return (
    <FadeIn.Container className="p-4 border-r w-[20%] mr-4">
      {ComponentCategories.map((category) => (
        <FadeIn.Item key={category}>
          <div className="mb-2 my-4">
            <h1 className="text-lg font-semibold capitalize mx-4">
              {category}
            </h1>
            <ul className="my-1 list-none">
              {groupedArticles[category].map((article) => (
                <motion.li
                  key={article.slug}
                  className={twMerge(
                    "my-0 py-1",
                    article.slug === slug
                      ? "bg-white-a2 py-2 border-l-2 border-white-a12 rounded-r-md"
                      : "hover:bg-white-a2 hover:rounded-md",
                  )}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{
                    opacity: article.slug === slug ? 1 : 0.8,
                    scale: article.slug === slug ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h2
                    onClick={() => onSelectArticle(article.slug)}
                    className={twMerge(
                      "cursor-pointer mx-4 text-black-a6 ",
                      article.slug === slug
                        ? "font-semibold text-white-a12"
                        : "dark:text-white-a6 hover:text-black-a8 dark:hover:text-white-a8",
                    )}
                  >
                    {article.title}
                  </h2>
                </motion.li>
              ))}
            </ul>
          </div>
        </FadeIn.Item>
      ))}
    </FadeIn.Container>
  );
};

export default Sidebar;
