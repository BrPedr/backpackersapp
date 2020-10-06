import styled from "styled-components";

// SB = SIDEBAR
// UH = USER HEADER
// BD = BOARD
// SM = SIDEBAR MENU

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 70px repeat(4, 1fr);
  grid-template-rows: 154px auto 71px;

  grid-template-areas:
    "SB UH UH UH UH"
    "SB BD BD BD BD"
    "SB BD BD BD BD";

  width: 100%;
  height: 100%;

  .react-icons {
    margin: 1em 0;

    stroke: var(--greyVariant);
    stroke-width: 1.5;
    fill: white;

    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const TravelColumn = styled.div`
  grid-area: TC;

  background: #d8e1ef;

  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }

  ::-webkit-scrollbar-corner {
    background: 0 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #c0d0e6;
    border: 8px #fff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #d9e3f0;
    border: 9px #fff;
    border-radius: 10px;
    margin: 6px 0;
  }
`;
