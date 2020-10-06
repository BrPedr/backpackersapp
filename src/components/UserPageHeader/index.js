import React from "react";
import { IconContext } from "react-icons";

import { Container } from "./styles";

import {
  MdSearch,
  MdMenu,
  MdKeyboardArrowDown,
  MdNotificationsActive,
  MdFilterList,
  MdConfirmationNumber,
  MdGroup,
  MdSettings,
  MdForum,
} from "react-icons/md";

import Profile from "../../components/Profile";

const Header = () => {
  return (
    <Container>
      <div >
        <h1>Backpackers</h1>
        <div className="nav-icons">
          <MdSearch
            fill={"var(--greyVariant)"}
            size={24}
            style={{ marginRight: "20px" }}
          />
          <Profile />
          <MdMenu
            fill={"var(--greyVariant)"}
            size={24}
            style={{ margin: "0 20px" }}
          />
        </div>
      </div>
      <div className="nav-bottom">
        <div>
          <h3>Visualize in boxes</h3>
          <MdKeyboardArrowDown />
        </div>
        <div className="nav-icons">
          <IconContext.Provider value={{ className: "react-icons", size:"24", }}>
            <MdForum />
            <MdConfirmationNumber />
            <MdNotificationsActive />
            <MdGroup />
            <MdFilterList />
            <MdSettings />
          </IconContext.Provider>
        </div>
      </div>
    </Container>
  );
};

export default Header;
