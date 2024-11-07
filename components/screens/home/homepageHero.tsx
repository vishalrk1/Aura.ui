import * as FadeIn from "@/components/motion/staggers/fade";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const HomepageHero = () => {
  return (
    <div className="flex justify-between">
      <FadeIn.Item>
        <div className="flex items-start justify-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
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
      <div className="h-full w-1/2 ">
        <FadeIn.Item>
          <div className="flex h-full w-full items-center justify-center gap-2">
            <div className="flex h-[400px] flex-1 flex-col items-center justify-center gap-2">
              <div className="flex h-full w-full flex-1 items-center justify-center rounded-md">
                <video
                  src="/framer-card.mp4"
                  loop
                  autoPlay
                  muted
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="flex h-full w-full flex-1 items-center justify-center rounded-lg bg-gray-4">
                video-2
              </div>
            </div>
            <div className="flex h-[400px] flex-1 flex-col items-center justify-center rounded-lg bg-gray-4">
              verticle video
            </div>
          </div>
        </FadeIn.Item>
      </div>
    </div>
  );
};

export default HomepageHero;
