import React, { useEffect, useState } from "react";
import CrewSliderContent from "../molecules/CrewSliderContent";
import CrewImageSlider from "../molecules/CrewImageSlider";
import CrewDots from "../molecules/CrewDots";
import { SliderContainer } from "./CrewSlider.styles";

const len = CrewImageSlider.length - 1;
const CrewSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <SliderContainer>
      <CrewSliderContent
        activeIndex={activeIndex}
        imageSlider={CrewImageSlider}
      />
      <CrewDots
        activeIndex={activeIndex}
        imageSlider={CrewImageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </SliderContainer>
  );
};

export default CrewSlider;
