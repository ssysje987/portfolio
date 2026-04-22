"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface Props extends ImageProps {
  fallbackText?: string;
}

export default function ImageWithFallback({ fallbackText, ...props }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="bg-[#141414] flex items-center justify-center w-full h-full">
        <span className="text-[12px] text-[#2A2A2A] tracking-[0.2em]">
          {fallbackText || props.alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      onError={() => setHasError(true)}
      className={(props as any).className ?? ""}
    />
  );
}
