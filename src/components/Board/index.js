import React from "react";
import { useSelector } from "react-redux";
// import { loadLists } from "../../services/api";

import { selectAllCards } from "../../redux/cards/cardsSlice";

import CardsList from "../CardsList";

import { Container } from "./styles";

// const lists = loadLists();

const Board = () => {
  const cardsList = useSelector(selectAllCards);

  return (
    <Container>
      {/* {lists.map((list) => (
        <CardsList key={list.title} data={list} />
      ))} */}
      {!cardsList
        ? null
        : cardsList.map((list, index) => (
            <CardsList title={`${list.location}`} key={list.id} index={index} />
          ))}
    </Container>
  );
};

export default Board;

// import React from "react";
// import { useSelector } from "react-redux";
// // import { loadLists } from "../../services/api";

// import CardsList from "../CardsList";

// import { Container } from "./styles";

// // const lists = loadLists();

// const Board = () => {
//   const cardsList = useSelector((state) => state.cards.cardsList);

//   return (
//     <Container>
//       {/* {lists.map((list) => (
//         <CardsList key={list.title} data={list} />
//       ))} */}
//       {!cardsList
//         ? null
//         : cardsList.map((list, index) => (
//             <CardsList title={`${list}`} key={index} index={index} />
//           ))}
//     </Container>
//   );
// };

// export default Board;
