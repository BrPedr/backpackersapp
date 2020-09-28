import React from "react";

import {
  MdHome,
  MdDelete,
  MdShare,
  MdPlace,
  MdNotifications,
} from "react-icons/md";

import { SideBarHome, SideBarMenu, IconContainer } from "./styles";

const SideBar = () => {
  return (
    <>
      <SideBarHome>
        <IconContainer>
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

export default SideBar;
