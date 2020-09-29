import React from "react";
import { withRouter } from "react-router-dom";

import {
  MdHome,
  MdDelete,
  MdShare,
  MdPlace,
  MdNotifications,
} from "react-icons/md";

import { SideBarHome, SideBarMenu, IconContainer } from "./styles";

const SideBar = ({ history }) => {
  return (
    <>
      <SideBarHome>
        <IconContainer onClick={() => history.push("/")}>
          <MdHome fill="var(--white)" />
        </IconContainer>
      </SideBarHome>
      <SideBarMenu>
        <IconContainer>
          <MdDelete fill="var(--white)" />
        </IconContainer>
        <IconContainer>
          <MdShare fill="var(--white)" />
        </IconContainer>
        <IconContainer>
          <MdPlace fill="var(--white)" />
        </IconContainer>
        <IconContainer>
          <MdNotifications fill="var(--white)" />
        </IconContainer>
      </SideBarMenu>
    </>
  );
};

export default withRouter(SideBar);
