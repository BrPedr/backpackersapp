import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdAdd } from "react-icons/md";
// import { loadLists } from "../../services/api";

import { showModal } from "../../redux/modals/modalsSlice";

import CardsList from "../CardsList";

import { Container, Button } from "./styles";

// const lists = loadLists();

const Board = () => {
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.cards.cardsList);

  return (
    <Container>
      {/* {lists.map((list) => (
        <CardsList key={list.title} data={list} />
      ))} */}
      {!cardsList.length
        ? null
        : cardsList.map((list, index) => (
            <CardsList title={`${list}`} key={index} index={index} />
          ))}
      <Button
        onClick={() => dispatch(showModal("CARDS_LIST"))}
        color="var(--greyLight)"
      >
        <MdAdd size={24} color={"var(--black)"} />
      </Button>
    </Container>
  );
};

export default Board;
