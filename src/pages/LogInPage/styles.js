import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const Title = styled.h1`
  width: 100%;

  text-align: center;

  z-index: 2;
`;

export const StyledImage = styled.img`
  object-fit: cover;

  position: absolute;

  right: 0em;
  bottom: -2em;

  width: 100%;
  height: 100%;
  opacity: 0.2;

  z-index: -1;
`;

export const StyledBackground = styled.div`
  position: absolute;

  top: -50%;

  width: 150%;
  height: 100%;

  background: rgba(206, 76, 76, 0.03);

  transform: rotate(-21.5deg);

  z-index: -2;
`;
