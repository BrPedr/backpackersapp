import styled from "styled-components";

import { StyledButton } from "../Button/styles";

export const Container = styled.div`
  position: fixed;

  width: 500px;
  height: 200px;

  margin: -100px 0 0 -250px;
  top: 50%;
  left: 50%;

  border: 3px solid white;

  display: flex;
  justify-content: space-between;

  background: white;

  form {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    input {
      width: 100%;
      height: 50px;

      margin: 20px;
      padding: 0 20px;

      background-color: rgba(255, 184, 184, 0.4);
      border: 1px solid var(--grey);

      ::placeholder {
        color: var(--greyVariant);

        font-family: "Montserrat", sans-serif;
        font-size: 20px;
      }
      &:hover,
      :focus {
        background-color: rgba(255, 184, 184, 0.2);
      }
    }
  }
`;

export const Button = styled(StyledButton)`
  background-color: ${(props) => (props.color ? props.color : null)};
`;
