import HomeCategory from "@/components/home-category/HomeCategory";
import * as FadeIn from "@/components/motion/staggers/fade";

import HomepageHero from "./homepageHero";
import GetStartedPreview from "@/components/home-category/HomeComponentPreview";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export interface GradientPosition {
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
}

export interface GradientSize {
  height: number | string;
  width: number | string;
}

export interface GradientProps {
  position: GradientPosition;
  color: string;
  size: GradientSize;
  blur: number;
}

export interface GradientContainerProps {
  children: React.ReactNode;
}

export const GradientContainer: React.FC<GradientContainerProps> = ({
  children,
}) => {
  return <div className="relative z-10 pointer-events-none">{children}</div>;
};

export const Gradient: React.FC<GradientProps> = ({
  position,
  color,
  size,
  blur,
}) => {
  const styles: GradientPosition = {
    top: typeof position.top === "number" ? `${position.top}px` : position.top,
    right:
      typeof position.right === "number"
        ? `${position.right}px`
        : position.right,
    bottom:
      typeof position.bottom === "number"
        ? `${position.bottom}px`
        : position.bottom,
    left:
      typeof position.left === "number" ? `${position.left}px` : position.left,
  };

  return (
    <div
      className="absolute"
      style={{
        ...styles,
        height:
          typeof size.height === "number" ? `${size.height}px` : size.height,
        width: typeof size.width === "number" ? `${size.width}px` : size.width,
        backgroundColor: color,
        opacity: 0.4,
        filter: `blur(${blur}px)`,
      }}
    />
  );
};

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
