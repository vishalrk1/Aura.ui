import type { ComponentArticle } from "@/types/component";
import type { Post } from "@/types/post";

import { ComponentCategories } from "@/types/component";

import fs from "fs";
import path from "path";

import matter from "gray-matter";

function readFile(filePath: string): Post | null {
  try {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);

    const slug = path.basename(filePath, path.extname(filePath));

    return {
      ...data,
      slug,
      content,
    } as Post;
  } catch (error) {
    console.error(`Failed to read or parse the file at ${filePath}:`, error);
    return null;
  }
}

function getFiles(dir: string): string[] {
  try {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  } catch (error) {
    console.error(`Failed to read directory at ${dir}:`, error);
    return [];
  }
}

export function getPosts(directory: string): Post[] {
  const files = getFiles(
    path.join(process.cwd(), "app", "(posts)", directory, "posts"),
  );
  return files
    .map((file) =>
      readFile(
        path.join(process.cwd(), "app", "(posts)", directory, "posts", file),
      ),
    )
    .filter((post): post is Post => post !== null);
}

export function getComponentArticles(directory?: string): ComponentArticle[] {
  const componentDirectory = directory
    ? path.join(process.cwd(), "app", "(ui)", "component", directory)
    : path.join(process.cwd(), "app", "(ui)", "component");

  let content: ComponentArticle[] = [];

  if (!directory) {
    for (const category of ComponentCategories) {
      const dir = path.join(componentDirectory, category);
      const files = getComponentFiles(dir);
      content = [
        ...content,
        ...files
          .map((file) => readComponentFile(path.join(dir, file), category))
          .filter((article): article is ComponentArticle => article !== null),
      ];
    }
  } else {
    const files = [...getComponentFiles(componentDirectory)];
    content = files
      .map((file) =>
        readComponentFile(path.join(componentDirectory, file), undefined),
      )
      .filter((article): article is ComponentArticle => article !== null);
  }

  return content;
}

function getComponentFiles(directory: string): string[] {
  return fs.readdirSync(directory);
}

function readComponentFile(
  filePath: string,
  category?: string,
): ComponentArticle | null {
  try {
    const { data, content } = matter.read(filePath);
    return {
      slug: path.basename(filePath, path.extname(filePath)),
      title: data.title,
      content,
      category,

      // Optional fields from data frontmatter
      tags: data.tags,
      summary: data.summary,

      // Author information
      author: {
        name: data.author?.name,
        link: data.author?.link,
        handle: data.author?.handle,
      },

      // Time information
      time: {
        created: data.time?.created,
        updated: data.time?.updated,
      },

      // Media information
      media: {
        image: data.media?.image,
        video: data.media?.video,
        audio: data.media?.audio,
      },

      // Categorization information
      categorization: {
        readingTime: data.categorization?.readingTime,
      },

      // SEO information
      seo: {
        title: data.seo?.title,
        description: data.seo?.description,
        keywords: data.seo?.keywords,
      },

      // Audience metrics
      audience: {
        likes: data.audience?.likes,
        views: data.audience?.views,
        comments: data.audience?.comments,
      },

      // Related content
      related: {
        media: data.related?.media,
        links: data.related?.links,
        posts: data.related?.posts,
      },

      // Social media links
      social: {
        twitter: data.social?.twitter,
        facebook: data.social?.facebook,
        linkedin: data.social?.linkedin,
        instagram: data.social?.instagram,
        youtube: data.social?.youtube,
        pinterest: data.social?.pinterest,
        others: data.social?.others,
      },
    };
  } catch (err) {
    console.error(`Error reading file: ${filePath}`, err);
    return null;
  }
}
