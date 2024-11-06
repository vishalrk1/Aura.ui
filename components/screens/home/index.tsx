import HomeCategory from "@/components/home-category/HomeCategory";
import * as FadeIn from "@/components/motion/staggers/fade";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <div className="flex items-center justify-between">
        <FadeIn.Item>
          <div className="flex items-center justify-start">
            <div className="flex flex-col">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl xl:text-7xl font-bold">
                Make you website <br /> looks 100x better <br /> with Aura
              </h1>
            </div>
          </div>
          <Spacer />
          <FadeIn.Item>
            <h2 className="text-sm md:text-lg lg:text-xl">
              Copy paste the most trending components and use them in your{" "}
              <br />
              websites without having to worry about styling and animations.
            </h2>
          </FadeIn.Item>
        </FadeIn.Item>
      </div>
      <FadeIn.Item>
        <HomeCategory />
      </FadeIn.Item>
      <Spacer />
    </FadeIn.Container>
  );
}
