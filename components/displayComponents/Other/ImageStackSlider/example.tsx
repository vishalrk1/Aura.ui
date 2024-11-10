import ImageStackSlider from ".";

export function ImageStackSliderExample() {
  return (
    <ImageStackSlider
      images={["/pfp1.jpeg", "/pfp2.jpeg", "/pfp3.jpeg"]}
      overlapAmount={0.5}
    />
  );
}
