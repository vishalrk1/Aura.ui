import HomeCategory from "@/components/home-category/HomeCategory";
import * as FadeIn from "@/components/motion/staggers/fade";

import HomepageHero from "./homepageHero";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <HomepageHero />
      <div className="gap-2 relative flex flex-row items-center h-[600px] w-full ">
        <div className="absolute -left-80 top-2 w-1/4 h-[250px] bg-[#A5FECB] blur-[200px] opacity-30">ABC</div>
      
        <div className="absolute h-[400px] -right-80 w-1/4 bg-[#A5FECB] blur-[200px] opacity-30">GHI</div>
      </div>
      <FadeIn.Item>
        <HomeCategory />
      </FadeIn.Item>
      <Spacer />
    </FadeIn.Container>
  );
}
