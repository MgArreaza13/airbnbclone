import { Avatar } from "@material-ui/core";
import { ExpandMore, Language, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderIcon,
  HeaderCenter,
  HeaderRight,
} from "./styles";
function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <HeaderIcon src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" />
      </Link>
      <HeaderCenter>
        <input type="text" placeholder="search" />
        <SearchOutlined />
      </HeaderCenter>
      <HeaderRight>
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
