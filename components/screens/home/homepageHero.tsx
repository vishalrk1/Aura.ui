import * as FadeIn from "@/components/motion/staggers/fade";

import React from "react";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const HomepageHero = () => {
  return (
    <div className="flex justify-between">
      <FadeIn.Item>
        <div className="flex items-start justify-start">
          <div className="flex flex-col">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl xl:text-7xl font-bold">
              Make you website <br /> looks 100x better <br /> with Aura
            </h1>
          </div>
        </div>
        <Spacer />
        <FadeIn.Item>
          <h2 className="text-sm md:text-lg lg:text-xl">
            Copy paste the most trending components and use them in your <br />
            websites without having to worry about styling and animations.
          </h2>
        </FadeIn.Item>
      </FadeIn.Item>
      <div className="w-1/2 h-full ">
        <FadeIn.Item>
          <div className="w-full h-full flex gap-2 items-center justify-center">
            <div className="flex flex-1 flex-col gap-2 items-center justify-center h-[400px]">
              <div className="w-full h-full flex flex-1 items-center justify-center rounded-md">
                <video
                  src="/framer-card.mp4"
                  loop
                  autoPlay
                  muted
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="bg-gray-4 w-full h-full flex flex-1 items-center justify-center rounded-lg">
                video-2
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center bg-gray-4 h-[400px] rounded-lg">
              verticle video
            </div>
          </div>
        </FadeIn.Item>
      </div>
    </div>
  );
};

export default HomepageHero;
