import React from "react";
import { DotsWrapper } from "./Dots.styles";

const Dots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <DotsWrapper>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        >
          {index}
        </span>
      ))}
    </DotsWrapper>
  );
};

export default Dots;
