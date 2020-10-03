import React from "react";
import { connect } from "react-redux";

import CardsListModal from "../CardsListModal";
import TravelCardModal from "../TravelCardModal";

import { Container } from "./styles";

const MODAL_COMPONENTS = {
  CARDS_LIST: CardsListModal,
  TRAVEL_CARD: TravelCardModal,
};

const ModalRoot = ({ modalType }) => {
  if (!modalType) {
    return null;
  }

  const CurrentModal = MODAL_COMPONENTS[modalType.modalType];

  return (
    <Container>
      <CurrentModal />
    </Container>
  );
};

const mapStateToProps = ( state ) => ({
  modalType: state.modal,
});

export default connect(mapStateToProps)(ModalRoot);
