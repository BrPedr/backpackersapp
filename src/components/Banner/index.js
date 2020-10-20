import React from "react";

import { data } from "../../data";
import bannerImage from "../../assets/04.png";

import { Container, Title, Subtitle, StyledImage } from "./styles";

const Banner = () => {
  const getFirstWords = data.titles.banner.title.split("Go see it!");
  const getLastWords = data.titles.banner.title.split(
    "There’s a whole world waiting for you."
  );

  return (
    <Container>
      <Title>
        <div>
          {getFirstWords} <span>{getLastWords}</span>
        </div>
      </Title>
      <Subtitle>{data.titles.banner.subtitle}</Subtitle>
      <StyledImage src={bannerImage} alt="" />
    </Container>
  );
};

export default Banner;
