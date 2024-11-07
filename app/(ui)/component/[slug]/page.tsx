import type { ComponentArticle } from "@/types/component";

import { ArticleLayout } from "@/components/screens/article";
import { getComponentArticles } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import { notFound } from "next/navigation";

const route = "component";

export async function generateStaticParams() {
  const componentArticles = await getComponentArticles();
  return componentArticles.map((article: ComponentArticle) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const componentArticles = getComponentArticles();
  const article = componentArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      ...OpenGraph,
      title: "Component Not Found",
    };
  }

  const title = article.title;
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const componentArticles = await getComponentArticles();
  const article = componentArticles.find(
    (a: ComponentArticle) => a.slug === params.slug,
  );

  if (!article) {
    notFound();
  }

  return <ArticleLayout article={article} route={route} />;
}
