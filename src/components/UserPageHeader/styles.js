import styled from "styled-components";

export const Container = styled.div`
  grid-area: UH;

  display: flex;
  flex-direction: column;

  padding: 30px 30px;

  div {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: #494949;
    font-weight: bold;
    font-size: 48px;
  }

  .nav-icons {
    display: flex;
    align-items: center;
  }

  .nav-bottom {
    padding: 30px 0 0 30px;

    & div:first-child {
      width: 180px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    h3 {
      color: #aaaaaa;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
    }

    .react-icons {
      margin: 0 1em;

      size: 24px;
      stroke: var(--greyVariant);
      fill: white;
      stroke-width: 1.5;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const IconsContainer = styled.div``;
