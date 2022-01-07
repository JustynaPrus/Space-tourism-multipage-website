import React from "react";
import { ContentWrapper, Wrapper } from "./CrewSliderContent.styles";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <>
      <ContentWrapper>
        {imageSlider.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "active" : "inactive"}
          >
            <Wrapper>
              <h3>{slide.role}</h3>
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </Wrapper>
            <img src={slide.urls} alt="" />
          </div>
        ))}
      </ContentWrapper>
    </>
  );
};

export default SliderContent;
