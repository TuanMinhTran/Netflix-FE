import { useState, useRef } from "react";

export const useCarouselHandler = () => {
  const sliderRef = useRef([]);
  const [slider, setSlider] = useState(false);

  const handleNext = (carouselIdx) => {
    if (sliderRef.current[carouselIdx]) {
      sliderRef.current[carouselIdx].slickNext();

      if (!slider) {
        setSlider(true);
      }
    }
  };

  const handlePrev = (carouselIdx) => {
    if (sliderRef.current[carouselIdx]) {
      sliderRef.current[carouselIdx].slickPrev();
    }
  };

  return {
    sliderRef,
    slider,
    handleNext,
    handlePrev,
  };
};
