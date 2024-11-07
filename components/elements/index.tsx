import type { ComponentArticle } from "@/types/component";

import { getComponentArticles } from "@/lib/mdx";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
}

export const ComponentElement = ({ category }: PostProps) => {
  const articles: ComponentArticle[] = getComponentArticles();
  const Seperator = () => <div className="border-border border-t" />;

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition
        href={`/${category}`}
        className="flex justify-between"
      >
        <h2 className="py-2 text-muted capitalize">
          {category} {articles.length > 0 && `(${articles.length})`}
        </h2>
      </NextViewTransition>

      {articles.map((article) => {
        return (
          <React.Fragment key={article.slug}>
            <Seperator />
            <NextViewTransition
              href={`/${category}/${article.slug}`}
              className="flex w-full justify-between py-2"
            >
              <p>{article.title}</p>
              {/* <p className="mt-0 text-muted">{formatter.date(new Date(post.time.created))}</p> */}
            </NextViewTransition>
          </React.Fragment>
        );
      })}
    </div>
  );
};
