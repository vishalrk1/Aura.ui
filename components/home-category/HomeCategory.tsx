import { formatter } from "@/lib/formatter";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface HomeCategory {

}

interface HomeRoute {
  title: string;
  description?: string;
  path: string;
  time: {
    created: string;
  };
}

const HomeRoutes: HomeRoute[] = [
  {
    title: "Getting Started",
    description: "See how to get stared to use Aura UI",
    path: "component/getting-started",
    time: {
      created: Date.now().toString(),
    },
  },
  {
    title: "Explore",
    description: "Explore our components catelog",
    path: "component/getting-started",
    time: {
      created: Date.now().toString(),
    },
  },
  {
    title: "Tamplets",
    description: "Explore different creative templates made with Aura",
    path: "tamplets",
    time: {
      created: Date.now().toString(),
    },
  },
];

const HomeCategory: React.FC<HomeCategory> = ({ }) => {
  const Seperator = () => <div className="border-border border-t" />;

  return (
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-start w-full gap-4 cursor-pointer">
        {HomeRoutes.map((post) => (
          <NextViewTransition key={post.path} href={`/${post.path}`}>
            <div className="w-[300px] h-[100px] flex flex-col items-start justify-center bg-gray-4 px-3 py-6 rounded-md">
              <h1 className="text-xl">{post.title}</h1>
              <p className="mt-0.5 text-base">{post?.description}</p>
            </div>
          </NextViewTransition>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
