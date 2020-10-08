import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentCard } from "../../redux/cards/cardsSlice";

import Budget from "../../assets/budget.png";
import Events from "../../assets/flame-success.png";
import Tickets from "../../assets/flame-start-up-support.png";
import Lodge from "../../assets/flame-coming-soon.png";
import Routes from "../../assets/conifer-193.png";
import Adressess from "../../assets/cherry-page-not-found.png";
import Documents from "../../assets/undraw_filing_system_b5d2.svg";
import TravelLog from "../../assets/kingdom-4.png";

import { Container, Grid, FeaturesContainer } from "./styles";

const features = () => [
  {
    cards: [
      {
        name: "Routes",
        color: "#E24E42",
        area: "ROUTE",
        url: Routes,
      },
      {
        name: "Documents",
        color: "#E9B000",
        area: "DOC",
        url: Documents,
      },
      {
        name: "Adressess",
        color: "#EB6E80",
        area: "ADRESSESS",
        url: Adressess,
      },
      {
        name: "Travel Log",
        color: "#FFC7CD",
        area: "LOG",
        url: TravelLog,
      },
      {
        name: "Tickets",
        color: "#008F95",
        area: "TICKETS",
        url: Tickets,
      },
      {
        name: "Budget",
        color: "#97D3ED",
        area: "BUDGET",
        url: Budget,
      },
      {
        name: "Events",
        color: "#48BFC4",
        area: "EVENTS",
        url: Events,
      },
      {
        name: "Lodging",
        color: "#ED5C5C",
        area: "LODGE",
        url: Lodge,
      },
      {
        name: "People",
        color: "#E9B000",
        area: "PEOPLE",
        url: { Budget },
      },
    ],
  },
];

const EditTravel = () => {
  const card = useSelector(selectCurrentCard);

  const renderFeatures = () =>
    features()[0].cards.map((feature) => (
      <FeaturesContainer color={feature.color} area={feature.area}>
        <h3>{feature.name}</h3>
        <div>
          <img src={feature.url} alt={feature.name}/>
        </div>
      </FeaturesContainer>
    ));

  return (
    <Container>
      <header>
        <h1>{card.location}</h1>
        <div>Calendar</div>
      </header>
      <Grid>{renderFeatures()}</Grid>
    </Container>
  );
};

export default EditTravel;
