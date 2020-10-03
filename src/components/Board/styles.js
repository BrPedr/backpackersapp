import styled from "styled-components";

import { StyledButton } from "../Button/styles";

export const Container = styled.div`
  grid-area: BD;

  position: relative;

  display: flex;

  padding: 30px 0;

  overflow-x: scroll;
`;

export const Button = styled(StyledButton)`
  background: ${(props) => props.color};
  border: 2px solid var(--black);
`;
