import React from "react";
import { withRouter } from "react-router-dom";
import { IconContext } from "react-icons";

import { MdHome, MdHelp, MdMessage } from "react-icons/md";

import { Container, Menu, IconContainer } from "./styles";

const SideBar = ({ history, children, color }) => {
  return (
    <Container color={color}>
      <IconContext.Provider value={{ className: "react-icons", size: "22" }}>
        <IconContainer
          onClick={() => history.push("/")}
          style={{ margin: "3em 0 5em 0" }}
        >
          <MdHome size={22} />
        </IconContainer>
        <Menu>{children}</Menu>
        <div className="help-center">
          <hr />
          <h4>Help</h4>
          <MdHelp size={22} />
          <MdMessage size={22} style={{ marginBottom: "1.5em" }} />
        </div>
      </IconContext.Provider>
    </Container>
  );
};

export default withRouter(SideBar);
