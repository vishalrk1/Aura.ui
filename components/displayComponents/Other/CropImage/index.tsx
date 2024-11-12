import type React from "react";

import { ZoomIn, ZoomOut } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import HoverFillButton from "../../Button/HoverFillButton/HoverFillButton";

interface Position {
  x: number;
  y: number;
}

interface Bounds {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

interface DragStart {
  x: number;
  y: number;
}

interface ImageSize {
  width: number;
  height: number;
}

const ImageCropper: React.FC = () => {
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<DragStart>({ x: 0, y: 0 });
  const [bounds, setBounds] = useState<Bounds>({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [naturalImageSize, setNaturalImageSize] = useState<ImageSize | null>(
    null,
  );
  const [initialScale, setInitialScale] = useState<number>(1);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Handle initial image load and sizing
  useEffect(() => {
    const initializeImage = () => {
      if (!imageRef.current || !containerRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const img = imageRef.current;

      // Store natural image size
      setNaturalImageSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });

      // Calculate scale to fit image in container
      const containerAspectRatio = container.width / container.height;
      const imageAspectRatio = img.naturalWidth / img.naturalHeight;

      let calculatedInitialScale: number;
      if (containerAspectRatio > imageAspectRatio) {
        // Container is wider than image
        calculatedInitialScale = container.height / img.naturalHeight;
      } else {
        // Container is taller than image
        calculatedInitialScale = container.width / img.naturalWidth;
      }

      // Set initial scale
      setInitialScale(calculatedInitialScale);
      setScale(calculatedInitialScale);

      // Calculate initial position to center the image
      const scaledWidth = img.naturalWidth * calculatedInitialScale;
      const scaledHeight = img.naturalHeight * calculatedInitialScale;

      const centerX = (container.width - scaledWidth) / 2;
      const centerY = (container.height - scaledHeight) / 2;

      setPosition({ x: centerX, y: centerY });
    };

    // Initialize when image loads
    if (imageRef.current) {
      if (imageRef.current.complete) {
        initializeImage();
      } else {
        imageRef.current.onload = initializeImage;
      }
    }
  }, []);

  // Update bounds when scale changes
  useEffect(() => {
    if (imageRef.current && containerRef.current && naturalImageSize) {
      const container = containerRef.current.getBoundingClientRect();

      const scaledWidth = naturalImageSize.width * scale;
      const scaledHeight = naturalImageSize.height * scale;

      const minX = container.width - scaledWidth;
      const minY = container.height - scaledHeight;

      setBounds({
        left: Math.min(minX, 0),
        right: Math.max(-minX, 0),
        top: Math.min(minY, 0),
        bottom: Math.max(-minY, 0),
      });
    }
  }, [scale, naturalImageSize]);

  const clampPosition = (pos: Position): Position => ({
    x: Math.min(bounds.right, Math.max(bounds.left, pos.x)),
    y: Math.min(bounds.bottom, Math.max(bounds.top, pos.y)),
  });

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent): void => {
    e.preventDefault();
    setIsDragging(true);
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y,
    });
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent): void => {
    if (!isDragging) return;

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    const newPosition = {
      x: clientX - dragStart.x,
      y: clientY - dragStart.y,
    };

    setPosition(clampPosition(newPosition));
  };

  const handleDragEnd = (): void => {
    setIsDragging(false);
  };

  const handleZoom = (direction: "in" | "out"): void => {
    if (!containerRef.current || !naturalImageSize) return;

    const container = containerRef.current.getBoundingClientRect();
    const containerCenter = {
      x: container.width / 2,
      y: container.height / 2,
    };

    // Calculate current point under the center of the container
    const currentCenterX = (containerCenter.x - position.x) / scale;
    const currentCenterY = (containerCenter.y - position.y) / scale;

    // Calculate new scale
    const scaleFactor = 0.2;
    const newScale =
      direction === "in"
        ? Math.min(scale * (1 + scaleFactor), initialScale * 3)
        : Math.max(scale / (1 + scaleFactor), initialScale * 0.5);

    // Calculate new position to maintain the same point under the center
    const newPosition = {
      x: containerCenter.x - currentCenterX * newScale,
      y: containerCenter.y - currentCenterY * newScale,
    };

    setScale(newScale);
    setPosition(clampPosition(newPosition));
  };

  const generateCroppedImage = (): string | undefined => {
    if (!imageRef.current || !containerRef.current || !naturalImageSize) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = containerRef.current.getBoundingClientRect();

    canvas.width = container.width;
    canvas.height = container.height;

    const scaledWidth = naturalImageSize.width * scale;
    const scaledHeight = naturalImageSize.height * scale;

    ctx.drawImage(
      imageRef.current,
      -position.x / scale,
      -position.y / scale,
      naturalImageSize.width,
      naturalImageSize.height,
      0,
      0,
      scaledWidth,
      scaledHeight,
    );

    const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
    setPreviewUrl(dataUrl);
    return dataUrl;
  };

  const handleDownload = (): void => {
    const dataUrl = generateCroppedImage();
    if (!dataUrl) return;

    const link = document.createElement("a");
    link.download = "cropped-image.jpg";
    link.href = dataUrl;
    link.click();
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      generateCroppedImage();
    }, 100);
    return () => clearTimeout(debounceTimer);
  }, [position, scale]);

  return (
    <div className="flex flex-col gap-8 p-4 md:flex-row">
      <div className="flex flex-col gap-4">
        <div
          ref={containerRef}
          className="relative h-96 w-96 overflow-hidden rounded-lg border-2 border-grayBorder bg-grayBg"
        >
          <div
            className="absolute cursor-move touch-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? "none" : "transform 0.1s ease-out",
              transformOrigin: "0 0",
            }}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            onMouseMove={handleDragMove}
            onTouchMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onTouchEnd={handleDragEnd}
            onMouseLeave={handleDragEnd}
          >
            <img
              ref={imageRef}
              src="/nature1.jpg"
              alt="Crop this"
              className="max-w-none select-none"
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <HoverFillButton
            className="flex w-full items-center justify-center gap-4 px-8"
            onClick={() => handleZoom("in")}
          >
            <ZoomIn size={20} />
            Zoom In
          </HoverFillButton>
          <HoverFillButton
            className="flex w-full items-center justify-center gap-4 px-8"
            onClick={() => handleZoom("out")}
          >
            <ZoomOut size={20} />
            Zoom Out
          </HoverFillButton>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-lg">Preview</h3>
        <div className="h-48 w-48 overflow-hidden rounded-lg border-2 border-grayBorder bg-grayBg">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="h-full w-full object-contain"
            />
          )}
        </div>
        <button
          type="button"
          onClick={handleDownload}
          className="rounded-lg bg-grayBg px-4 py-2 text-white transition-all duration-200 hover:scale-105"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default ImageCropper;
