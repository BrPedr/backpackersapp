import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 312px;

  height: 185px;

  background: var(--white);
`;

export const Header = styled.div`
  width: 312.99px;
  height: 24.64px;

  background: #f2f2f2;
`;

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
`;

export const Calendar = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;

  div {
    width: 78.25px;
    height: 33.86px;

    background: #6e6b8f;
    border-radius: 5px;

    h3 {
      color: var(--white);
    }
  }

  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #aaaaaa;
  }
`;

export const IconsContainer = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
`;

export const Divider = styled.div`
  width: 100%;

  border: 1px solid #e6e6e6;
`;

export const Footer = styled.div`
  h3 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    color: #aaaaaa;
  }
`;
