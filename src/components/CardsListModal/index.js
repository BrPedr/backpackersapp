import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createCardsList } from "../../redux/cards/cardsSlice";
import { hideModal } from "../../redux/modals/modalsSlice";

import { Container } from "./styles";

const CardsListModal = () => {
  const [cardListTitle, setCardListTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault(event);

    dispatch(createCardsList(cardListTitle));
    dispatch(hideModal());
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
      <button onClick={() => dispatch(hideModal())}>Close me</button>
    </Container>
  );
};

export default CardsListModal;
