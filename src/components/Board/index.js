import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import { loadLists } from "../../services/api";

import { selectAllCards } from "../../redux/cards/cardsSlice";

import CardsList from "../CardsList";
import EditTravel from "../EditTravel";

import { Container } from "./styles";

// const lists = loadLists();

const Board = () => {
  const cardsList = useSelector(selectAllCards);
  const match = useRouteMatch("/user/:id");

  return (
    <Container>
      {/* {lists.map((list) => (
        <CardsList key={list.title} data={list} />
      ))} */}
      <Switch>
        <Route exact path={`/user/${match.params.id}`}>
          {!cardsList
            ? null
            : cardsList.map((list, index) => (
                <CardsList
                  title={`${list.location}`}
                  key={list.id}
                  id={list.id}
                  index={index}
                />
              ))}
        </Route>
        <Route
          path={`${match.url}/edit-travel/:cardId`}
          component={EditTravel}
        />
      </Switch>
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
