import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentCard } from "../../redux/cards/cardsSlice";

import { Container } from "./styles";

const EditTravel = () => {
  const card = useSelector(selectCurrentCard);

  return (
    <Container>
      <header>
        <h1>{card.location}</h1>
        <div>Calendar</div>
      </header>
      <div></div>
    </Container>
  );
};

export default EditTravel;
