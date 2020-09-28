import React from "react";

import SideBar from "../../components/SideBar";

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

const UserPage = () => {
  return (
    <Grid>
      <SideBar />
      <HeaderMenu>
        <StyledMdSearch />
        <UserPhotoContainer>
          <img
            src="https://i.pinimg.com/736x/d6/a9/57/d6a957f1d8045c9c973c12bf5968326f.jpg"
            alt=""
          />
        </UserPhotoContainer>
        <StyledMdMenu />
      </HeaderMenu>
      <HorizontalDivider />
      <HeaderTitle>Backpackers</HeaderTitle>
      <HeaderColumn></HeaderColumn>
      <ColumnsContainer></ColumnsContainer>
    </Grid>
  );
};

export default UserPage;
