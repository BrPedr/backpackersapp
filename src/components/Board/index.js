import React from "react";
import { useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
// import { loadLists } from "../../services/api";

import CardsList from "../CardsList";

import { Container, Button } from "./styles";

// const lists = loadLists();

const Board = () => {
  const cardsList = useSelector((state) => state.cards.cardsList);

  return (
    <Container>
      {/* {lists.map((list) => (
        <CardsList key={list.title} data={list} />
      ))} */}
      {!cardsList
        ? null
        : cardsList.map((list, index) => (
            <CardsList title={`${list}`} key={index} index={index} />
          ))}
    </Container>
  );
};

export default Board;
