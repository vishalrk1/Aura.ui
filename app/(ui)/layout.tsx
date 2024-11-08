"use client";

import type { ComponentArticle } from "@/types/component";

import { Breadcrumb } from "@/components/breadcrumb";
import Sidebar from "@/components/sidebar";

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
      <div className="mt-24 px-4 lg:px-24">
        <Breadcrumb />
        <div className="mx-auto flex min-w-xl">
          <Sidebar articles={articles} onSelectArticle={handleSelectArticle} />
          <main className="flex-grow p-4 md:max-w-[80%]">{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
}
