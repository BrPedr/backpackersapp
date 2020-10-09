import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCurrentCard,
  getCurrentCard,
  updateCard,
} from "../../redux/cards/cardsSlice";

import { Container } from "./styles";

const Calendar = () => {
  const date = new Date();
  const currentCard = useSelector(selectCurrentCard);
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState(hasDate("fromDate"));
  const [toDate, setToDate] = useState(hasDate("toDate"));

  useEffect(() => {
    dispatch(
      updateCard({ id: currentCard.id, fromDate: fromDate, toDate: toDate })
    );
    dispatch(
      getCurrentCard({ id: currentCard.id, fromDate: fromDate, toDate: toDate })
    );

    return () => currentCard.calendar;
  }, [fromDate, toDate]);

  function hasDate(date) {
    if (!currentCard.calendar) {
      return "";
    }

    return currentCard.calendar[date];
  }

  console.log(date.toISOString())

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
          min={date.toString()}
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
