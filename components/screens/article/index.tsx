import type { ComponentArticle } from "@/types/component";

import * as FadeIn from "@/components/motion/staggers/fade";
import { TableOfContents } from "@/components/on-this-page";
import { formatter } from "@/lib/formatter";
import { MDX } from "@/mdx-components";

import React from "react";

interface Props {
  article: ComponentArticle;
  route: string;
}

export const ArticleLayout = ({ article, route }: Props) => {
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
          </div>
        </FadeIn.Item>
        <FadeIn.Item>
          <MDX source={article.content} />
        </FadeIn.Item>
        {/* <PostNavigation posts={componentArticles} /> */}
        <TableOfContents />
      </FadeIn.Container>
    </React.Fragment>
  );
};
