import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCurrentCard,
  updateCard,
  selectAllCards,
} from "../../redux/cards/cardsSlice";

import { Container } from "./styles";

const Calendar = () => {
  const date = new Date("October 09, 2020");
  const currentCard = useSelector(selectCurrentCard);
  const cards = useSelector(selectAllCards);
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState(hasDate("fromDate"));
  const [toDate, setToDate] = useState(hasDate("toDate"));

  useEffect(() => {
    dispatch(
      updateCard({ id: currentCard.id, fromDate: fromDate, toDate: toDate })
    );
  }, [fromDate, toDate]);

  function hasDate(date) {
    if (!currentCard) {
      return;
    }

    const cardId = currentCard.id;
    const hasCard = (id) => cards.find((card) => card.id === id);

    if (!hasCard(cardId).calendar) {
      return;
    }

    return hasCard(cardId).calendar[date];
  }

  // console.log(date.toLocaleDateString());
  // toDateString();

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "fromDate") {
      setFromDate(value);
    }
    if (name === "toDate") {
      setToDate(value);
    }
  };

  return (
    <Container>
      <form action="">
        <label htmlFor="fromDate">From :</label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          min={date.toLocaleDateString()}
          value={fromDate}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <label htmlFor="toDate">To :</label>
        <input
          type="date"
          id="toDate"
          name="toDate"
          value={toDate}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </Container>
  );
};

export default Calendar;
