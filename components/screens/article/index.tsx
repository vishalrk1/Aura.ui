import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getComponentArticles } from "@/lib/mdx";
import { MDX } from "@/mdx-components";
import { ComponentArticle } from "@/types/component";

import React from "react";
import { readingTime } from "reading-time-estimator";

interface Props {
  article: ComponentArticle;
  route: string;
}

export const ArticleLayout = ({ article, route }: Props) => {
  // const componentArticles = getComponentArticles(route);

  const Separator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <div>Published {formatter.date(new Date())}</div>;
  };

  const ReadingTime = () => {
    return <div>{article?.categorization?.readingTime ?? 0} minutes read</div>;
  };

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div>
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold mb-1">
            {article.title}
          </h1>
        </div>
        <div className="mt-1 flex gap-2 text-muted text-small">
          <PublishedTime />
          <Separator />
          <ReadingTime />
        </div>
      </div>

      <MDX source={article.content} />
      {/* <PostNavigation posts={componentArticles} /> */}
      <TableOfContents />
    </React.Fragment>
  );
};
