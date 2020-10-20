import React from "react";
import { Link } from "react-router-dom";

import { Container, LinksWrapper, Title, Icon } from "./styles";

const ResourcesLinks = () => {
  return (
    <Container>
      <LinksWrapper>
        <Title>Company</Title>
        <Link to="#">Career</Link>
        <Link to="#">About Us</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Press Info</Link>
        <Link to="#">Features</Link>
        <Link to="#">Successes</Link>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Backpackers</Title>
        <Link to="#">Why Backpackers</Link>
        <Link to="#">Enterprise</Link>
        <Link to="#">Customer Stories</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">Security</Link>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Resources</Title>
        <Link to="#">Download</Link>
        <Link to="#">Help Center</Link>
        <Link to="#">Guides</Link>
        <Link to="#">Events</Link>
        <Link to="#">Developers</Link>
        <Link to="#">App Directory</Link>
        <Link to="#">Partners</Link>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Extras</Title>
        <Link to="#">Podcast</Link>
        <Link to="#">Backpackers Shop</Link>
        <Link to="#">Backpackers at Work</Link>
        <Link to="#">Backpackers Fund</Link>
        <Link to="#">Integrations</Link>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Subscribe</Title>
        {/* <input></input> */}
        <h3>9/10</h3>
        <h3>Overall rating</h3>
        <Icon></Icon>
      </LinksWrapper>
    </Container>
  );
};

export default ResourcesLinks;
