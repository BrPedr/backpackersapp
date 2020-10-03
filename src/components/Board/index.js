import React from "react";
import { connect } from "react-redux";
import { MdAdd } from "react-icons/md";
import { loadLists } from "../../services/api";

import { showModal } from "../../redux/modal";
import { deleteCardsList } from "../../redux/card";

import CardsList from "../CardsList";

import { Container, Button } from "./styles";

const lists = loadLists();

const Board = ({ showModal, card, deleteCardsList }) => {
  return (
    <Container>
      {/* {lists.map((list) => (
        <CardsList key={list.title} data={list} />
      ))} */}
      {!Object.values(card).length
        ? null
        : Object.values(card).map((list, index) => (
            <CardsList title={`${list}`} key={index} index={index} />
          ))}
      <Button onClick={() => showModal("CARDS_LIST")} color="var(--greyLight)">
        <MdAdd size={24} color={"var(--black)"} />
      </Button>
    </Container>
  );
};

const mapStateToProps = ({ card }, state) => ({
  card,
  state,
});

export default connect(mapStateToProps, { showModal, deleteCardsList })(Board);
