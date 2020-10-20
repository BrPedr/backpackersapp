import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { createCardsList } from "../../redux/cards/cardsSlice";
import { hideModal } from "../../redux/modals/modalsSlice";

import { createCardsDocument, firestore } from "../../firebase/firebase.utils";

import { Container, Button } from "./styles";

const CardsListModal = () => {
  const [location, setlocation] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.currentUser.uid);
  console.log(userId)

  const handleSubmit = async (event) => {
    event.preventDefault(event);
    const cardId = nanoid();
    createCardsDocument(userId, cardId, location);
    dispatch(createCardsList(userId, location, cardId));
    dispatch(hideModal());
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "place") {
      setlocation(value);
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
          value={location}
        />
        <Button
          type="reset"
          value="Reset"
          onClick={() => dispatch(hideModal())}
        >
          Cancel
        </Button>
        <Button
          color="green"
          type="submit"
          value="Submit"
          style={{ marginLeft: "1em" }}
        >
          Create
        </Button>
      </form>
    </Container>
  );
};

export default CardsListModal;
