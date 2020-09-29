import React from "react";

import {} from "react-icons/md";

import {
  Container,
  Header,
  Title,
  Calendar,
  IconsContainer,
  Divider,
  Footer,
} from "./styles";

const TravelCard = () => {
  return (
    <Container>
      <Header />
      <Title>Spain</Title>
      <Calendar>
        <div>
          <h3>Mar, 07</h3>
        </div>
        <h3>In 3 days</h3>
      </Calendar>
      <IconsContainer></IconsContainer>
      <Divider />
      <Footer>
        <h3>See your plans</h3>
      </Footer>
    </Container>
  );
};

export default TravelCard;
