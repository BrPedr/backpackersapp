import React from "react";

import { Container } from "./styles";

import { MdSearch, MdMenu } from "react-icons/md";

import Profile from "../../components/Profile";

const Header = () => {
  return (
    <Container>
      <h1>Backpackers</h1>
      <div>
        <MdSearch size={24} style={{ marginRight: "20px" }} />
        <Profile />
        <MdMenu size={24} style={{ margin: "0 20px" }} />
      </div>
    </Container>
  );
};

export default Header;
