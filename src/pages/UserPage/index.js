import React from "react";

import SideBar from "../../components/SideBar";
import TravelCard from "../../components/TravelCard";
import Profile from "../../components/Profile";

import {
  Grid,
  HorizontalDivider,
  HeaderTitle,
  HeaderMenu,
  StyledMdSearch,
  StyledMdMenu,
  UserPhotoContainer,
  HeaderColumn,
  ColumnsContainer,
  TravelColumn,
  DocumentsColumn,
  OrganizerColumn,
  ArchivedColumn,
  Card,
} from "./styles";

const UserPage = ({ history }) => {
  console.log(history);
  return (
    <Grid>
      <SideBar />
      <HeaderMenu>
        <StyledMdSearch />
        <Profile />
        <StyledMdMenu />
      </HeaderMenu>
      <HorizontalDivider />
      <HeaderTitle>Backpackers</HeaderTitle>
      <HeaderColumn></HeaderColumn>
      <TravelColumn>
        <TravelCard />
      </TravelColumn>
      <ColumnsContainer></ColumnsContainer>
    </Grid>
  );
};

export default UserPage;
