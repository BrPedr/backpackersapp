import styled from "styled-components";

import { StyledButton } from "../Button/styles";

export const StyledForm = styled.form`
  width: 35em;
  height: 40em;

  padding: 1.5em 3.1em;

  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  z-index: 2;

  .link {
    color: var(--senary);
    text-decoration: underline;

    letter-spacing: 0.02em;
  }

  .checkBoxText {
    margin-left: -3em;
    color: black;
  }

  h2 {
    font-family: "Comfortaa", sans-serif;
    font-weight: bold;
    font-size: 2em;
    line-height: 40px;

    padding-bottom: 1em;
  }

  h3 {
    font-family: "Comfortaa", sans-serif;
    font-size: 1em;

    color: var(--grey);

    padding: 0 1em;
  }

  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FormButton = styled(StyledButton)`
  width: 100%;

  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === "black" ? "var(--white)" : "var(--black)"};

  border: ${(props) =>
    props.color === "black" ? null : "2px solid var(--black)"};
`;

export const Divider = styled.div`
  width: 1px;
  height: 0.1em;

  background-color: var(--grey);
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;

  font-family: "Comfortaa", sans-serif;

  padding-left: 2em;

  margin-bottom: -1.5em;

  background-color: rgba(255, 184, 184, 0.4);
  border-radius: 15px;

  ::placeholder {
    left: 10em;
  }

  &:hover, :focus {
    background-color: rgba(255, 184, 184, 0.2);
  }
`;

export const Checkbox = styled.input`
  border: 2px solid #aaaaaa;
  border-radius: 5px;
`;
