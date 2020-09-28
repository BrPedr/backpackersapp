import styled from "styled-components";

import { MdSearch, MdMenu } from "react-icons/md";

// HD = HORIZONTAL DIVIDER
// VD = VERTICAL DIVIDER
// SH = SIDEBAR HOME
// SM = SIDEBAR MENU
// HT = HEADER TITLE
// HM = HEADER MENU
// CC = COLUMNS CONTAINER
// HC = HEADER COLUMN

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 81px repeat(4, 1fr);
  grid-template-rows: 81px 1px 82px 940px;

  grid-template-areas:
    "SH  HT . . HM" "HD HD HD HD HD"
    "SM HC HC HC HC" "SM CC CC CC CC";

  width: 100%;
  height: 100%;
`;

export const HorizontalDivider = styled.div`
  grid-area: HD;

  width: 100%;
  height: 1px;

  background: var(--greyLight);
`;

export const HeaderTitle = styled.h1`
  grid-area: HT;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderMenu = styled.div`
  grid-area: HM;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMdSearch = styled(MdSearch)`
  width: 2em;
  height: 2em;

  margin: 0 1em;

  cursor: pointer;
`;

export const StyledMdMenu = styled(MdMenu)`
  width: 2em;
  height: 2em;

  margin: 0 1em;

  cursor: pointer;
`;

export const UserPhotoContainer = styled.div`
  width: 50px;
  height: 50px;

  margin: 0 1em;

  overflow: hidden;

  border-radius: 50%;
  border: 1px solid #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ColumnsContainer = styled.div`
  grid-area: CC;

  background: #d8e1ef;
`;

export const HeaderColumn = styled.div`
  grid-area: HC;

  background: #8b83f0;
`;

export const TravelColumn = styled.div``;

export const DocumentsColumn = styled.div``;

export const OrganizerColumn = styled.div``;

export const ArchivedColumn = styled.div``;

export const Card = styled.div``;
