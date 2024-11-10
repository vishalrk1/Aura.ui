import type { ComponentArticle } from "@/types/component";

import { ComponentNavigation } from "@/components/component-navigation";
import * as FadeIn from "@/components/motion/staggers/fade";
import { TableOfContents } from "@/components/on-this-page";
import { formatter } from "@/lib/formatter";
import { getComponentArticles } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import { Dot } from "lucide-react";
import React from "react";

interface Props {
  article: ComponentArticle;
}

export const ArticleLayout = ({ article }: Props) => {
  const compArticles = article.category
    ? getComponentArticles(article.category)
    : getComponentArticles();

  const Separator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <div>Published {formatter.date(new Date())}</div>;
  };

  const Publishier = () => {
    return (
      <a
        className="cursor-pointer hover:text-white-a11 hover:underline"
        href={article?.author?.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        By {article.author?.name}
      </a>
    );
  };

  return (
    <React.Fragment>
      <FadeIn.Container>
        <div className="min-h-screen">
          <FadeIn.Item>
            <div className="flex flex-col">
              <div>
                <h1 className="mb-1 font-bold text-lg md:text-2xl lg:text-4xl">
                  {article.title}
                </h1>
              </div>
              <div className="my-1 flex gap-2 text-muted text-small">
                <PublishedTime />
                <Separator />
                <Publishier />
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-1 mb-2">
                {article.tags &&
                  article.tags.length > 0 &&
                  article.tags.map((tag) => {
                    return (
                      <div
                        key={tag}
                        className="flex items-center gap-1 bg-[#191e1f] border-[#292d2e] text-xs py-2 px-3 text-white-a10 rounded-full capitalize"
                      >
                        {tag}
                      </div>
                    );
                  })}
              </div>
            </div>
          </FadeIn.Item>
          <FadeIn.Item>
            <MDX source={article.content} />
          </FadeIn.Item>
        </div>
        <ComponentNavigation components={compArticles} />
        <TableOfContents />
      </FadeIn.Container>
    </React.Fragment>
  );
};
