"use client"

import { useCallback, useEffect, useState } from "react"
import ImageWithFallback from "@/components/ImageWithFallback"

interface ProjectImageLightboxProps {
  images: string[]
  title: string
}

export default function ProjectImageLightbox({
  images,
  title,
}: ProjectImageLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return current === 0 ? images.length - 1 : current - 1
    })
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return current === images.length - 1 ? 0 : current + 1
    })
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [close, isOpen, showNext, showPrevious])

  if (images.length === 0) return null

  return (
    <>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2px",
        background: "#0A0A0A",
        padding: "2px",
      }}>
        {images.map((img, index) => (
          <button
            key={img}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${title} ${index + 1} 확대 보기`}
            style={{
              aspectRatio: "4/3",
              position: "relative",
              background: "#141414",
              border: 0,
              cursor: "zoom-in",
              display: "block",
              overflow: "hidden",
              padding: 0,
            }}
          >
            <ImageWithFallback
              src={img}
              alt={`${title} ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              fallbackText={`${title} ${index + 1}`}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} 이미지 확대 보기`}
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(10, 10, 10, 0.94)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "72px 80px",
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="닫기"
            style={{
              position: "absolute",
              top: "24px",
              right: "28px",
              width: "44px",
              height: "44px",
              border: "0.5px solid #2A2A2A",
              background: "#0A0A0A",
              color: "#FFFFFF",
              cursor: "pointer",
              fontSize: "24px",
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              aria-label="이전 이미지"
              style={{
                position: "absolute",
                left: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "64px",
                border: "0.5px solid #2A2A2A",
                background: "rgba(10, 10, 10, 0.72)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "28px",
              }}
            >
              ←
            </button>
          )}

          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(100%, 1180px)",
              height: "min(78vh, 760px)",
              background: "#141414",
            }}
          >
            <ImageWithFallback
              src={images[activeIndex]}
              alt={`${title} ${activeIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              fallbackText={`${title} ${activeIndex + 1}`}
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              aria-label="다음 이미지"
              style={{
                position: "absolute",
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "48px",
                height: "64px",
                border: "0.5px solid #2A2A2A",
                background: "rgba(10, 10, 10, 0.72)",
                color: "#FFFFFF",
                cursor: "pointer",
                fontSize: "28px",
              }}
            >
              →
            </button>
          )}

          <div style={{
            position: "absolute",
            bottom: "28px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#8A8A8A",
            fontSize: "12px",
            letterSpacing: "0.2em",
          }}>
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
