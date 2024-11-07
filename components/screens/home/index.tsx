import HomeCategory from "@/components/home-category/HomeCategory";
import * as FadeIn from "@/components/motion/staggers/fade";

import HomepageHero from "./homepageHero";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <HomepageHero />
      <FadeIn.Item>
        <HomeCategory />
      </FadeIn.Item>
      <Spacer />
    </FadeIn.Container>
  );
}
