import React from "react";
import { connect } from "react-redux";
import { MdAdd } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { showModal } from "../../redux/modal";
import { deleteCardsList } from "../../redux/card";

import TravelCard from "../TravelCard";

import { Container } from "./styles";

const CardsList = ({ data, showModal, title, index, deleteCardsList }) => {
  return (
    <Container>
      <header index={index}>
        <h2>{`${title}`}</h2>
        <div>
          {index === 0 ? (
            <button type="button" onClick={() => showModal("TRAVEL_CARD")}>
              <MdAdd size={24} color={"var(--white)"} />
            </button>
          ) : null}
          <HiOutlineDotsVertical
            size={24}
            color={"var(--grey)"}
            style={{ marginLeft: "10px" }}
            onClick={() => deleteCardsList(index)}
          />
        </div>
      </header>
      <ul>
      </ul>
    </Container>
  );
};

const mapStateToProps = ({ card }) => ({
  cardList: card,
});

export default connect(mapStateToProps, { showModal, deleteCardsList })(
  CardsList
);
