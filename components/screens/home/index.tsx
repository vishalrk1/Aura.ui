import HomeCategory from "@/components/home-category/HomeCategory";
import * as FadeIn from "@/components/motion/staggers/fade";

import HomepageHero from "./homepageHero";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export interface GradientSize {
  height: number | string;
  width: number | string;
}

export interface GradientProps {
  position: string;
  color: string;
  size: GradientSize;
  blur: number;
}

export interface GradientCanvasProps {
  children: React.ReactNode;
}

export const GradientCanvas: React.FC<GradientCanvasProps> = ({ children }) => {
  return <div className="fixed inset-0 pointer-events-none">{children}</div>;
};

export const Gradient: React.FC<GradientProps> = ({
  position,
  color,
  size,
  blur,
}) => {
  const height =
    typeof size.height === "number" ? `${size.height}px` : size.height;
  const width = typeof size.width === "number" ? `${size.width}px` : size.width;

  return (
    <div
      className={`absolute ${position}`}
      style={{
        height,
        width,
        backgroundColor: color,
        opacity: 0.5,
        filter: `blur(${blur}px)`,
      }}
    />
  );
};

const Home: React.FC = () => {
  return (
    <>
      <GradientCanvas>
        <Gradient
          position="top-10 -left-80"
          color="#A5FECB"
          size={{ height: 250, width: "25%" }}
          blur={200}
        />
        <Gradient
          position="top-80 -right-80"
          color="#A5FECB"
          size={{ height: 400, width: "20%" }}
          blur={200}
        />
      </GradientCanvas>

      <FadeIn.Container>
        <div className="relative flex w-full flex-row items-center gap-2">
          <HomepageHero />
        </div>
        <FadeIn.Item>
          <HomeCategory />
        </FadeIn.Item>
        <Spacer />
      </FadeIn.Container>
    </>
  );
};

export default Home;
