import styled from "styled-components";

// SH = SIDEBAR HOME
// UH = USER HEADER
// BD = BOARD
// SM = SIDEBAR MENU
// HT = HEADER TITLE
// HM = HEADER MENU
// CC = COLUMNS CONTAINER
// HC = HEADER COLUMN

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 56px repeat(4, 1fr);
  grid-template-rows: 71px auto;

  grid-template-areas:
    "SH UH UH UH UH"
    "SM BD BD BD BD";

  width: 100%;
  height: 100%;
`;

export const ColumnsContainer = styled.div`
  grid-area: CC;

  background: #d8e1ef;
`;

export const HeaderColumn = styled.div`
  grid-area: HC;

  background: #8b83f0;
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
