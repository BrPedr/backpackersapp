import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  padding: 0 50px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 30px;

    h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      font-size: 72px;

      color: #494949;
    }
  }

  h3 {
    padding: 30px;

    color: var(--white);

    font-family: "Montserrat", sans-serif;
    font-size: 36px;
    font-weight: 800;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 134.8px);
  grid-template-areas:
    "ROUTE DOC ADRESSESS"
    "ROUTE DOC ADRESSESS"
    "ROUTE TICKETS ADRESSESS"
    "LOG TICKETS BUDGET"
    "LOG LODGE BUDGET"
    "EVENTS LODGE PEOPLE"
    "EVENTS LODGE PEOPLE";
  gap: 30px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const FeaturesContainer = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;

  background: ${(props) => props.color};

  overflow: hidden;

  cursor: pointer;

  div {
    width: 60%;
    height: 70%;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 1000px) {
    flex-grow: 2;

    width: 250px;
    height: 250px;
  }
`;
