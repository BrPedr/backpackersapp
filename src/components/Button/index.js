import React from "react";
import { withRouter } from "react-router-dom";
import { StyledButton } from "./styles";

const Button = ({
  children,
  color,
  hidden,
  history,
  match,
  linkUrl,
}) => {
  const hasHistory = () => {
    if (linkUrl) {
      history.push(`${match.url}${linkUrl}`);
    }

    return;
  };

  return (
    <StyledButton hidden={hidden} color={color} onClick={() => hasHistory()}>
      {children}
    </StyledButton>
  );
};

export default withRouter(Button);
