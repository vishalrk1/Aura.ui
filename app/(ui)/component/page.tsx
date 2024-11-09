import type { Post } from "@/types";
import type { ComponentArticle } from "@/types/component";

import * as FadeIn from "@/components/motion/staggers/fade";
import { getComponentArticles } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface PageProps {
  params: Post;
}

interface CategoryGroup {
  category: string;
  articles: ComponentArticle[];
}

const organizeCategorizedArticles = (
  articles: ComponentArticle[],
): CategoryGroup[] => {
  const categorizedArticles = articles.reduce<
    Record<string, ComponentArticle[]>
  >((acc, article) => {
    const category = article.category || "uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(article);
    return acc;
  }, {});

  return Object.entries(categorizedArticles).map(
    ([category, articles]): CategoryGroup => ({
      category,
      articles: articles.sort(
        (a, b) =>
          new Date(b.time.created).getTime() -
          new Date(a.time.created).getTime(),
      ),
    }),
  );
};

function getChunks(array: CategoryGroup[], size = 3): CategoryGroup[][] {
  const chunks: CategoryGroup[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export function generateMetadata({ params }: PageProps) {
  const title = "Components";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
  };
}

export default function Page({ params }: PageProps) {
  const articles = getComponentArticles();
  const categorizedArticles = organizeCategorizedArticles(articles);
  const chunks = getChunks(categorizedArticles);

  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <h1 className="text-3xl mb-3 font-semibold">Explore Components</h1>
      </FadeIn.Item>
      <div className="flex flex-col">
        {chunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="flex flex-wrap">
            <div className="flex w-full gap-3 py-2 xl:w-[70%]">
              {chunk.length === 3 ? (
                <div
                  className={twMerge(
                    "flex h-[200px] w-full items-stretch gap-3",
                    chunkIndex % 2 !== 0 ? "flex-row-reverse" : "flex-row",
                  )}
                >
                  <div className="flex w-[60%] flex-col gap-3">
                    <Link
                      href={`component/${chunk[0].articles[0].slug}`}
                      className="block flex-1 hover:scale-102"
                    >
                      <FadeIn.Item className="flex h-full w-full items-center justify-center rounded-xl bg-[#191e1f] p-4 font-semibold text-base capitalize sm:text-xl">
                        {chunk[0].category}
                      </FadeIn.Item>
                    </Link>
                    <Link
                      href={`component/${chunk[1].articles[0].slug}`}
                      className="block flex-1"
                    >
                      <FadeIn.Item className="flex h-full w-full items-center justify-center rounded-xl bg-[#191e1f] p-4 font-semibold text-base capitalize sm:text-xl">
                        {chunk[1].category}
                      </FadeIn.Item>
                    </Link>
                  </div>
                  <Link
                    href={`component/${chunk[2].articles[0].slug}`}
                    className="block w-[40%]"
                  >
                    <FadeIn.Item className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-[#191e1f] p-4 font-semibold capitalize sm:text-xl">
                      {chunk[2].category}
                    </FadeIn.Item>
                  </Link>
                </div>
              ) : (
                chunk.map((item) => (
                  <Link
                    key={item.category}
                    href={`component/${item.articles[0].slug}`}
                    className="block flex-1"
                  >
                    <FadeIn.Item className="flex h-[120px] w-full items-center justify-center rounded-xl bg-[#191e1f] p-4 font-semibold capitalize sm:text-xl">
                      {item.category}
                    </FadeIn.Item>
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </FadeIn.Container>
  );
}
