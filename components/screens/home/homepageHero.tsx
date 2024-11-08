import { HomeFadeUpText } from "@/components/displayComponents/Text/Fadeup/example";
import * as FadeIn from "@/components/motion/staggers/fade";

import Image from "next/image";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const HomepageHero = () => {
  return (
    <div className="relative flex h-[30vh] w-full flex-col items-center justify-center overflow-hidden bg-transparent text-white sm:h-[50vh] md:h-[80vh]">
      <div className="absolute inset-0 overflow-hidden opacity-80">
        <Image
          src="/hero-image3.svg"
          alt="Background"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          className="absolute scale-150 opacity-30"
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
    </div>
  );
};

export default HomepageHero;
