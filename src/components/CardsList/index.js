import React from "react";
import { useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";

import { showModal } from "../../redux/modals/modalsSlice";
import { deleteCardsList } from "../../redux/cards/cardsSlice";

// import TravelCard from "../TravelCard";

import { Container } from "./styles";

const CardsList = ({ data, title, index }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <header index={index}>
        <h2>{`${title}`}</h2>
        <div>
          {index === 0 ? (
            <button
              type="button"
              onClick={() => dispatch(showModal("TRAVEL_CARD"))}
            >
              <MdAdd size={24} color={"var(--white)"} />
            </button>
          ) : null}
          <HiOutlineDotsVertical
            size={24}
            color={"var(--grey)"}
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(deleteCardsList(index))}
          />
        </div>
      </header>
      <ul></ul>
    </Container>
  );
};

export default CardsList;
