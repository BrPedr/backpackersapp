import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HiOutlineDotsVertical } from "react-icons/hi";

import {
  deleteCardsList,
  getCurrentCard,
  // selectAllCards,
} from "../../redux/cards/cardsSlice";
import { selectUser } from "../../redux/user/userSlice";

import { Container } from "./styles";

const CardsList = ({ title, index, id, list }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector(selectUser);
  // const card = useSelector(selectAllCards);
  const cardRef = useRef();

  // console.log(list)

  // const hasCard = (id) => card.find((card) => card.id === id);

  const handleClick = () => {
    const cardId = cardRef.current.attributes[0].nodeValue;
    dispatch(getCurrentCard({ id: cardId }));

    history.push(`/user/${userId.uid}/edit-travel/${cardId}`);
  };

  return (
    <Container>
      <div
        ref={cardRef}
        id={id}
        index={index}
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "30px",
        }}
      >
        <div
          style={{ width: "900px", height: "475px" }}
          onClick={() => handleClick()}
        >
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              cursor: "pointer",
            }}
            src="https://cdn.getyourguide.com/img/location/5c04f6f20650d.jpeg/148.jpg"
            alt=""
          />
        </div>
        <div>
          <div
            style={{
              background: "#ED5C5C",
              width: "360px",
              height: "89px",
            }}
          >
            <h2
              style={{
                height: "100%",
                padding: "10px",
                verticalAlign: "center",
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: "900",
                fontSize: "48px",
                color: "#FFFFFF",
                backdropFilter: "blur(100px)",
                textAlign: "center",
              }}
            >{`${title}`}</h2>
          </div>
          <div>
            <div>
              <h3>{!list.calendar ? null : list.calendar.fromDate}</h3>
            </div>
            <h3>In 5mths</h3>
          </div>
          <div></div>
          <div></div>
          <button>Delete</button>
          <button>Share</button>
        </div>
        <HiOutlineDotsVertical
          size={24}
          color={"var(--grey)"}
          style={{ marginLeft: "10px" }}
          onClick={() => dispatch(deleteCardsList(index))}
        />
      </div>
    </Container>
  );
};

export default CardsList;
