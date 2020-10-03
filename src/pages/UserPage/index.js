import React from "react";

import SideBar from "../../components/SideBar";
import UserPageHeader from "../../components/UserPageHeader";
import Board from "../../components/Board";

import {
  Grid,
} from "./styles";

const UserPage = () => {
  return (
    <Grid>
      <SideBar />
      <UserPageHeader />
      <Board />
    </Grid>
  );
};

export default UserPage;
