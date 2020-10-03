import React from "react";
import { connect } from "react-redux";

import { hideModal } from "../../redux/modal";

import { Container } from "./styles";

const TravelCardModal = ({ hideModal }) => {
  return (
    <Container>
      I am a travel card modal
      <button onClick={() => hideModal()}>Close me</button>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, { hideModal })(TravelCardModal);
