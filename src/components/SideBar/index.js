import React from "react";
import { withRouter } from "react-router-dom";

import { MdHome, MdHelp, MdMessage } from "react-icons/md";

import { Container, Menu, IconContainer } from "./styles";

const SideBar = ({ history, children, color }) => {
  return (
    <Container color={color}>
      <IconContainer
        onClick={() => history.push("/")}
        style={{ margin: "3em 0 5em 0" }}
      >
        <MdHome
          stroke-width="1.5"
          stroke="var(--greyVariant)"
          fill="white"
          size={22}
        />
      </IconContainer>
      <Menu>{children}</Menu>
      <div className="help-center">
        <hr />
        <h4>Help</h4>
        <MdHelp
          stroke-width="1.5"
          stroke="var(--greyVariant)"
          fill="white"
          size={22}
        />
        <MdMessage
          stroke-width="1.5"
          stroke="var(--greyVariant)"
          fill="white"
          size={22}
          style={{ marginBottom: "1.5em" }}
        />
      </div>
    </Container>
  );
};

export default withRouter(SideBar);
