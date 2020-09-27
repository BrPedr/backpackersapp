import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  justify-items: center;

  display: grid;

  grid-template-columns: 10% 35% 50%;
  grid-template-rows: 5% 90% 5%;
  grid-template-areas:
    ". . img"
    ". card img"
    ". . img";

  overflow: hidden;

  .register {
    grid-area: card;

    align-self: center;
  }

  .second-circle {
    right: 10%;
    top: -20em;

    transform: skewX(-35deg);
  }
`;

export const StyledImage = styled.img`
  grid-area: img;

  max-width: 100%;
  max-height: 100%;
`;

export const StyledBackground = styled.div`
  position: absolute;

  right: -3%;
  top: -10em;

  width: 50%;
  height: 100%;

  background: #fcb601;

  border-radius: 50%;
  transform: skewX(-15deg);

  z-index: -2;
`;
