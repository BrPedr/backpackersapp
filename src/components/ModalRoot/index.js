import React from "react";
import { useSelector } from "react-redux";

import CardsListModal from "../CardsListModal";
import TravelCardModal from "../TravelCardModal";

import { Container } from "./styles";

const MODAL_COMPONENTS = {
  CARDS_LIST: CardsListModal,
  TRAVEL_CARD: TravelCardModal,
};

const ModalRoot = () => {
  const modalType = useSelector((state) => state.modals[0]);
  if (!modalType) {
    return null;
  }

  const CurrentModal = MODAL_COMPONENTS[modalType];

  return (
    <Container>
      <CurrentModal />
    </Container>
  );
};

export default ModalRoot;
