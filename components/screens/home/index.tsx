import HomeCategory from "@/components/home-category/HomeCategory";
import * as FadeIn from "@/components/motion/staggers/fade";
import { GradientContainer, Gradient } from "@/components/gradient";
import HomepageHero from "./homepageHero";
import GetStartedPreview from "@/components/home-category/HomeComponentPreview";

const Spacer = () => <div style={{ marginTop: "24px" }} />;


const Home: React.FC = () => {
  return (
    <>
      <GradientContainer>
        <Gradient
          position={{ top: 300, left: "-250px" }}
          color="#f4faa7"
          size={{ height: 250, width: "25%" }}
          blur={200}
        />
        <Gradient
          position={{ top: "100px", right: "-400px" }}
          color="#A5FECB"
          size={{ height: 400, width: "25%" }}
          blur={200}
        />

        <Gradient
          position={{ top: 1200, left: "-250px" }}
          color="#71f5e5"
          size={{ height: 200, width: "120%" }}
          blur={250}
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
