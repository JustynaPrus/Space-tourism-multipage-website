import React, { useEffect, useState } from "react";
import SliderContent from "../molecules/SliderContent";
import imageSlider from "../molecules/imageSlider";
import Dots from "../molecules/Dots";
import { SliderContainer, DotsContaner } from "./Slider.styles";

const len = imageSlider.length - 1;
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <SliderContainer>
      <DotsContaner>
        <Dots
          activeIndex={activeIndex}
          imageSlider={imageSlider}
          onClick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </DotsContaner>
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
    </SliderContainer>
  );
};

export default Slider;
