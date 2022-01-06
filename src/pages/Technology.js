import React, { useState } from "react";
import {
  Container,
  Wrapper,
  StyledSection,
  DotsWrapper,
  FlexWrapper,
} from "./Technology.styles";
import NavigationMenu from "../components/organisms/NavigationMenu";
import data from "./../assets/data.json";
import launchVehicle1 from "./../assets/technology/image-1-portrait.jpg";
import spaceCapsule1 from "./../assets/technology/image-2-portrait.jpg";
import spacePort1 from "./../assets/technology/image-3-portrait.jpg";
import launchVehicle2 from "./../assets/technology/image-1-landscape.jpg";

const Technology = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <Container>
      <NavigationMenu />
      <Wrapper>
        <div>
          <h2>
            <span>03 </span>Space launch 101
          </h2>
          <FlexWrapper>
            <DotsWrapper>
              {Array.from({ length: 3 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                >
                  {index}
                </div>
              ))}
            </DotsWrapper>
            <StyledSection>
              <h3>The terminology...</h3>
              {data.technology.map((obj, index) => {
                return (
                  <div
                    key={obj.name}
                    className={
                      slideIndex === index + 1 ? "slide active-anim" : "slide"
                    }
                  >
                    <h1>{data.technology[index].name}</h1>
                    <p>{data.technology[index].description}</p>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/static/media/image-${index + 1}-portrait.jpg`
                      }
                      alt="technology"
                    />
                  </div>
                );
              })}
            </StyledSection>
          </FlexWrapper>
        </div>
        <img src={launchVehicle1} alt="technology" />
      </Wrapper>
    </Container>
  );
};

export default Technology;
