import styled from "styled-components";

export const SideBarHome = styled.aside`
  grid-area: SH;

  display: flex;

  align-items: center;
  justify-content: space-around;

  border-right: 2px solid;
  border-color: var(--greyLight );
`;

export const SideBarMenu = styled.aside`
  grid-area: SM;

  display: flex;

  flex-direction: column;
  align-items: center;

  border-right: 2px solid;
  border-color: var(--greyLight);
`;

export const IconContainer = styled.div`
  width: 35px;
  height: 33px;

  background: #8c5cf2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  margin: 1em 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;
