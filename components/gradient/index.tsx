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
