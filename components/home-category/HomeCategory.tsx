import * as FadeIn from "@/components/motion/staggers/fade";

import { Link as NextViewTransition } from "next-view-transitions";

import GradientText from "../displayComponents/Text/GradientText/GradientText";

interface HomeRoute {
  title: string;
  description?: string;
  path: string;
}

const HomeCategory = () => {
  const homeData: HomeRoute[] = [
    {
      title: "Get Started with Aura",
      path: "/component/getting-started",
      description:
        "Start building with Aura today! Copy components directly into your project and get seamless integration for all animation needs.",
    },
    {
      title: "Explore Components",
      path: "/component",
      description:
        "Discover our ever-growing library of components. each crafted with care to blend stunning visuals with ease of use.",
    },
    {
      title: "Showcase Your Creations",
      path: "/showcase",
      description:
        "Share your Aura-enhanced projects with the world. Check out our showcase to see how other creators have transformed their websites with Aura.",
    },
    {
      title: "Contact Us",
      path: "/contact",
      description:
        "Have a specific animation in mind or need custom UI components crafted just for your project? We’re here to help! Reach out to discuss your unique animation needs",
    },
  ];
  return (
    <div className="flex w-full flex-col items-center justify-start py-12">
      <GradientText
        text="Perfect Your Projects With Aura"
        className="mt-6 mb-2 text-3xl sm:text-5xl capitalize"
      />
      <h2 className="hidden sm:block text-center w-[60%] mb-8">
        Aura is your ultimate toolkit for beautiful, functional animations. Our
        ready-to-use components let you add style and clarity to your web
        projects in seconds. With Aura, simply copy, paste, and transform your
        website into a visually stunning experience.
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-6 w-[90%] sm:w-[80%] my-6">
        {homeData.map((item) => {
          return (
            <FadeIn.Item>
              <NextViewTransition href={item.path} key={item.title}>
                <div className="hover:-translate-y-1 flex h-full cursor-pointer flex-col items-start justify-center rounded-lg p-4 sm:px-8 transition-all duration-300 ease-in-out hover:bg-[#191e1f]/40 hover:shadow-lg">
                  <h1 className="font-light text-xl sm:text-3xl">{item.title}</h1>
                  <p className="text-white-a7 text-xs sm:text-base">{item.description}</p>
                </div>
              </NextViewTransition>
            </FadeIn.Item>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCategory;
