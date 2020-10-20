import styled from "styled-components";

export const StyledButton = styled.button`
  display: ${(props) => (props.hidden ? "none" : null)};

  width: 125px;
  height: 40px;

  background-color: ${(props) =>
    props.color === "primary"
      ? "var(--white)"
      : props.color === "secondary"
      ? "var(--button)"
      : props.color === "black"
      ? "var(--black)"
      : "var(--quaternary)"};

  color: ${(props) =>
    props.color === "primary" ? "var(--black)" : "var(--white)"};

  border: ${(props) =>
    props.color === "primary" ? "2px solid var(--primary)" : null};
  border-radius: 6px;

  font-size: 15px;
  font-weight: medium;
  text-justify: center;

  cursor: pointer;
`;
