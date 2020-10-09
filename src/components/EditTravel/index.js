import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentCard } from "../../redux/cards/cardsSlice";

import { features } from "../../data";

import Calendar from "../Calendar";

import { Container, Grid, FeaturesContainer } from "./styles";

const EditTravel = () => {
  const card = useSelector(selectCurrentCard);

  const renderFeatures = () =>
    features()[0].cards.map((feature) => (
      <FeaturesContainer
        color={feature.color}
        area={feature.area}
        key={feature.name}
      >
        <h3>{feature.name}</h3>
        <div>
          <img src={feature.url} alt={feature.name} />
        </div>
      </FeaturesContainer>
    ));

  return (
    <Container>
      <header>
        <h1>{card.location}</h1>
        <Calendar />
      </header>
      <Grid>{renderFeatures()}</Grid>
    </Container>
  );
};

export default EditTravel;
