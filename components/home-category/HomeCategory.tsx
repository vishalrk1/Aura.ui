import { Link as NextViewTransition } from "next-view-transitions";

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

const HomeCategory = () => {
  return (
    <div className="mt-6 flex flex-col px-6 sm:16px xl:px-24">
      <div className="flex w-full cursor-pointer flex-wrap items-center justify-center gap-4 xl:justify-start">
        {HomeRoutes.map((post) => (
          <NextViewTransition key={post.path} href={`/${post.path}`}>
            <div className="flex h-[100px] w-[300px] flex-col items-start justify-center rounded-md bg-gray-4 px-3 py-6">
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
