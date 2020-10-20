import React from "react";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import {
  MdAdd,
  MdViewAgenda,
  MdViewList,
  MdViewModule,
  MdViewColumn,
} from "react-icons/md";

import { showModal } from "../../redux/modals/modalsSlice";

import SideBar from "../../components/SideBar";
import UserPageHeader from "../../components/UserPageHeader";
import Board from "../../components/Board";

import { IconContainer } from "../../components/SideBar/styles";
import { Grid } from "./styles";

const UserPage = () => {
  const dispatch = useDispatch();

  return (
    <Grid>
      <SideBar>
        <IconContext.Provider value={{ className: "react-icons", size: "22" }}>
          <IconContainer onClick={() => dispatch(showModal("CARDS_LIST"))}>
            <MdAdd size={25} />
          </IconContainer>
          <MdViewAgenda />
          <MdViewList />
          <MdViewModule />
          <MdViewColumn />
        </IconContext.Provider>
      </SideBar>
      <UserPageHeader />
      <Board />
    </Grid>
  );
};

export default UserPage;
