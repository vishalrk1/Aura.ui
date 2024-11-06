"use client";

import * as FadeIn from "@/components/motion/staggers/fade";
import { ComponentArticle, ComponentCategories } from "@/types/component";

import React from "react";

interface SidebarProps {
  onSelectArticle: (slug: string) => void;
  articles: ComponentArticle[];
}

const Sidebar = ({ onSelectArticle, articles }: SidebarProps) => {
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
            <h1 className="text-lg font-semibold capitalize">{category}</h1>
            <ul className="mt-0 list-none">
              {groupedArticles[category].map((article) => (
                <li key={article.slug} className="mb-1 ml-4">
                  <h2
                    onClick={() => onSelectArticle(article.slug)}
                    className="cursor-pointer text-black-a6 dark:text-white-a6 hover:text-black-a8 dark:hover:text-white-a8"
                  >
                    {article.title}
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn.Item>
      ))}
    </FadeIn.Container>
  );
};

export default Sidebar;
