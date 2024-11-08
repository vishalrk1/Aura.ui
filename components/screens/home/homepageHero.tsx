import { HomeFadeUpText } from "@/components/displayComponents/Text/Fadeup/example";
import * as FadeIn from "@/components/motion/staggers/fade";

import Image from "next/image";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const HomepageHero = () => {
  return (
    <div className="relative flex h-[30vh] w-full flex-col items-center justify-center overflow-hidden bg-black-a12 text-white sm:h-[50vh] md:h-[80vh]">
      <div className="absolute inset-0 overflow-hidden opacity-80">
        <Image
          src="/hero-2.svg"
          alt="Background"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          className="absolute scale-125 opacity-50"
        />
      </div>
      <div className="absolute inset-0 w-full bg-gradient-to-t from-black via-transparent to-black px-12">
        <div className="mx-auto flex h-full flex-col items-center justify-center">
          <FadeIn.Item>
            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-[1.5]">
              Make your website looks
            </h1>
            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mt-1 md:mt-2 leading-[1.5]">
              100x <HomeFadeUpText /> with Aura
            </h1>
          </FadeIn.Item>
          <Spacer />
          <FadeIn.Item>
            <h2 className="text-sm md:text-lg lg:text-2xl max-w-4xl text-center">
              Copy paste the most trending components and use them in your
              websites without having to worry about styling and animations.
            </h2>
          </FadeIn.Item>
        </div>
      </div>
      <div className="relative flex h-[600px] w-full flex-row items-center gap-2 ">
        <div className="-left-80 absolute top-10 h-[250px] w-1/4 bg-[#A5FECB] opacity-20 blur-[200px]" />
        <div className="-right-80 absolute h-[400px] w-1/4 bg-[#A5FECB] opacity-20 blur-[200px]" />
      </div>
    </div>
  );
};

export default HomepageHero;
