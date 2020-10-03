import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { hideModal } from "../../redux/modal";
import { createCardsList } from "../../redux/card";

import { Container } from "./styles";

const CardsListModal = ({ hideModal, createCardsList }) => {
  const [cardListTitle, setCardListTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(event);
    
    createCardsList(cardListTitle);
    hideModal()
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "title") {
      setCardListTitle(value);
    }
  };

  return (
    <Container onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label>Cards List Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(event) => handleChange(event)}
          value={cardListTitle}
        />
        <button type="submit">Submit</button>
      </div>
      <button onClick={() => hideModal()}>Close me</button>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, { hideModal, createCardsList })(
  CardsListModal
);
