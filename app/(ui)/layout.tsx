"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import FadeUpText from "@/components/displayComponents/Text/FadeUpText";
import { ComponentElement } from "@/components/elements";
import Sidebar from "@/components/sidebar";
import { getComponentArticles } from "@/lib/mdx";
import { ComponentArticle } from "@/types/component";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<ComponentArticle[]>([]);
  const [selectedArticle, setSelectedArticle] =
    useState<string>("getting-started");
  const router = useRouter();

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/getArticles");
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  const handleSelectArticle = (slug: string) => {
    setSelectedArticle(slug);
    router.push(`/component/${slug}`);
  };

  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="flex">
        <Sidebar articles={articles} onSelectArticle={handleSelectArticle} />
        <main className="flex-grow max-w-[80%] p-4">
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}
