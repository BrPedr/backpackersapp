import React from "react";
import { useDispatch } from "react-redux";

import { hideModal } from "../../redux/modals/modalsSlice";

import { Container } from "./styles";

const TravelCardModal = () => {
  const dispatch = useDispatch()
  
  return (
    <Container>
      I am a travel card modal
      <button onClick={() => dispatch(hideModal())}>Close me</button>
    </Container>
  );
};
export default TravelCardModal;
