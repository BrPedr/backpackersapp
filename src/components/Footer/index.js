import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

import { Container, LinksContainer, Title, Icons } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Title>Backpackers</Title>
      <LinksContainer>
        <Link to="#">Reviews</Link>
        <Link to="#">People</Link>
        <Link to="#">Partners</Link>
        <Link to="#">Support</Link>
      </LinksContainer>
      <div>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineFacebook />
        </Icons>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineInstagram />
        </Icons>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineTwitter />
        </Icons>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineYoutube />
        </Icons>
      </div>
    </Container>
  );
};

export default Footer;
