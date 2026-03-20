"use client";

import { useState } from "react";

interface ProductImageCarouselProps {
  images: string[];
  title: string;
}

const ProductImageCarousel = ({
  images,
  title,
}: ProductImageCarouselProps) => {
  const safeImages = images?.length > 0 ? images : [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPreviousImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? safeImages.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prev) =>
      prev === safeImages.length - 1 ? 0 : prev + 1
    );
  };

  if (safeImages.length === 0) {
    return (
      <div className="carousel">
        <div className="carousel-image-wrapper">
          <div className="gallery-image no-image">No hay imágenes</div>
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        <img
          src={safeImages[currentIndex]}
          alt={`${title} ${currentIndex + 1}`}
          className="gallery-image"
        />
      </div>

      {safeImages.length > 1 && (
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-button"
            onClick={goToPreviousImage}
          >
            ← Anterior
          </button>

          <span className="carousel-indicator">
            {currentIndex + 1} / {safeImages.length}
          </span>

          <button
            type="button"
            className="carousel-button"
            onClick={goToNextImage}
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;