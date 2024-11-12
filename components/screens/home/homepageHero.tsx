import HoverButton from "@/components/displayComponents/Button/HoverButton/HoverButton";
import HoverFillButton from "@/components/displayComponents/Button/HoverFillButton/HoverFillButton";
import { HomeFadeUpText } from "@/components/displayComponents/Text/Fadeup/example";
import * as FadeIn from "@/components/motion/staggers/fade";

import Image from "next/image";
import Link from "next/link";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const HomepageHero = () => {
  return (
    <div className="relative flex h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-transparent text-white md:h-[70vh]">
      <div className="absolute inset-0 overflow-hidden opacity-80">
        <Image
          src="/hero-image3.svg"
          alt="Background"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          className="absolute scale-120 opacity-30"
        />
      </div>
      <div className="absolute inset-0 mt-[60px] w-full bg-gradient-to-t from-black via-transparent to-black px-12 md:mt-0">
        <div className="mx-auto flex h-full flex-col items-center justify-center">
          <FadeIn.Item>
            <h1 className="text-center font-bold text-2xl leading-[1.5] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Make your website looks
            </h1>
            <h1 className="mt-1 text-center font-bold text-2xl leading-[1.5] sm:text-4xl md:mt-2 md:text-5xl lg:text-6xl xl:text-7xl">
              100x <HomeFadeUpText /> with Aura
            </h1>
          </FadeIn.Item>
          <Spacer />
          <FadeIn.Item>
            <h2 className="max-w-4xl font-light text-center text-sm text-white-a9 md:text-lg lg:text-2xl">
              Copy paste the most trending components and use them in your
              websites without having to worry about styling and animations.
            </h2>
          </FadeIn.Item>
          <FadeIn.Item>
            <div className="mt-4 flex w-full flex-col items-center justify-center gap-6 sm:flex-row">
              <Link href="/component">
                <HoverButton
                  buttonText="Components"
                  expandText="Start Building"
                  icon="😎"
                />
              </Link>
              <Link href="/">
                <HoverFillButton>Browse template</HoverFillButton>
              </Link>
            </div>
          </FadeIn.Item>
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;
