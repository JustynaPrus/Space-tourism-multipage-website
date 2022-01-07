import React from "react";
import { DotsWrapper } from "./CrewDots.styles";

const CrewDots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <DotsWrapper>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </DotsWrapper>
  );
};

export default CrewDots;
