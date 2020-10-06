import React from "react";
import { IconContext } from "react-icons";
import {
  MdAdd,
  MdViewAgenda,
  MdViewList,
  MdViewModule,
  MdViewColumn,
} from "react-icons/md";

import SideBar from "../../components/SideBar";
import UserPageHeader from "../../components/UserPageHeader";
import Board from "../../components/Board";

import { IconContainer } from "../../components/SideBar/styles";
import { Grid } from "./styles";

const UserPage = () => {
  return (
    <Grid>
      <SideBar>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <IconContainer>
            <MdAdd size={25} />
          </IconContainer>
          <MdViewAgenda size={22} />
          <MdViewList size={22} />
          <MdViewModule size={22} />
          <MdViewColumn size={22} />
        </IconContext.Provider>
      </SideBar>
      <UserPageHeader />
      <Board />
    </Grid>
  );
};

export default UserPage;
