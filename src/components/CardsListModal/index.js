import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createCardsList } from "../../redux/cards/cardsSlice";
import { hideModal } from "../../redux/modals/modalsSlice";

import { Container, Button } from "./styles";

const CardsListModal = () => {
  const [cardListPlace, setCardListPlace] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault(event);

    dispatch(createCardsList(cardListPlace));
    dispatch(hideModal());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "place") {
      setCardListPlace(value);
    }
  };

  return (
    <Container>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          label="place"
          name="place"
          placeholder="Type the name of the place"
          onChange={(event) => handleChange(event)}
          value={cardListPlace}
        />
        <Button onClick={() => dispatch(hideModal())}>Cancel</Button>
        <Button color="green" type="submit" style={{ marginLeft: "1em" }}>
          Create
        </Button>
      </form>
    </Container>
  );
};

export default CardsListModal;
