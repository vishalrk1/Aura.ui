"use client";

import type { ComponentArticle } from "@/types/component";

import * as FadeIn from "@/components/motion/staggers/fade";
import { ComponentCategories } from "@/types/component";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
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
    <FadeIn.Container className="mr-4 hidden w-[30%] md:w-[20%] border-r p-4 md:block">
      {ComponentCategories.map((category) => (
        <FadeIn.Item key={category}>
          <div className="my-4 mb-2">
            <h1 className="mx-4 font-semibold text-lg capitalize">
              {category}
            </h1>
            <ul className="my-1 list-none">
              {groupedArticles[category].map((article) => (
                <motion.li
                  key={article.slug}
                  className={twMerge(
                    "my-0 py-1",
                    article.slug === slug &&
                      "rounded-r-md border-white-a12 border-l-2 bg-white-a2 py-2",
                  )}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{
                    opacity: article.slug === slug ? 1 : 0.8,
                    scale: article.slug === slug ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <div onClick={() => onSelectArticle(article.slug)}>
                    <h2
                      className={twMerge(
                        "mx-4 cursor-pointer text-black-a6 text-sm lg:text-base",
                        article.slug === slug
                          ? "font-semibold text-white-a12"
                          : "hover:text-black-a8 dark:text-white-a6 dark:hover:text-white-a8",
                      )}
                    >
                      {article.title}
                    </h2>
                  </div>
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
