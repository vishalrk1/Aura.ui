import HomeCategory from "@/components/home-category/HomeCategory";
import * as FadeIn from "@/components/motion/staggers/fade";

import HomepageHero from "./homepageHero";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <HomepageHero />
      <div className="relative flex h-[600px] max-w-screen-xl flex-row items-center gap-2 ">
        <div className="-left-80 absolute top-10 h-[250px] w-1/4 bg-[#A5FECB] opacity-30 blur-[200px]" />
        <div className="-right-80 absolute h-[400px] w-1/4 bg-[#A5FECB] opacity-30 blur-[200px]" />
      </div>
      <FadeIn.Item>
        <HomeCategory />
      </FadeIn.Item>

      <div className="h-[800px]">Hey</div>
      <Spacer />
    </FadeIn.Container>
  );
}
