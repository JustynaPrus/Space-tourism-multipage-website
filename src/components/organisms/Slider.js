import React, { useState } from "react";
import SliderContent from "../molecules/SliderContent";
import imageSlider from "../molecules/imageSlider";
import Dots from "../molecules/Dots";
import { SliderContainer } from "./Slider.styles";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SliderContainer>
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
    </SliderContainer>
  );
};

export default Slider;
