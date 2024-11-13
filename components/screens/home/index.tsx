import { Gradient, GradientContainer } from "@/components/gradient";
import HomeCategory from "@/components/home-category/HomeCategory";
import GetStartedPreview from "@/components/home-category/HomeComponentPreview";
import * as FadeIn from "@/components/motion/staggers/fade";

import HomepageHero from "./homepageHero";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

const Home: React.FC = () => {
  return (
    <>
      <GradientContainer>
        <Gradient
          position={{ top: 60, left: "-250px" }}
          color="#A5FECB"
          size={{ height: 250, width: "25%" }}
          blur={200}
        />
        <Gradient
          position={{ top: "500px", right: "-400px" }}
          color="#A5FECB"
          size={{ height: 400, width: "25%" }}
          blur={200}
        />
      </GradientContainer>

      <FadeIn.Container animateOnView>
        <div className="relative flex flex-row items-center gap-2 overflow-hidden">
          <HomepageHero />
        </div>
        <FadeIn.Item>
          <HomeCategory />
        </FadeIn.Item>
        <Spacer />
        <FadeIn.Item>
          <GetStartedPreview />
        </FadeIn.Item>
      </FadeIn.Container>
    </>
  );
};

export default Home;
