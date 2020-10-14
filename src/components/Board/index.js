import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import { loadLists } from "../../services/api";

import { selectAllCards } from "../../redux/cards/cardsSlice";

import CardsList from "../CardsList";
import EditTravel from "../EditTravel";
import EditDocuments from "../EditDocuments";

import { Container } from "./styles";

const Board = () => {
  const cardsList = useSelector(selectAllCards);
  const match = useRouteMatch("/user/:id");

  return (
    <Container>
      <Switch>
        <Route exact path={`/user/${match.params.id}`}>
          {!cardsList
            ? null
            : cardsList.map((list, index) => (
                <CardsList
                  title={`${list.location}`}
                  key={list.id}
                  id={list.id}
                  cardsList={cardsList}
                  index={index}
                  list={list}
                />
              ))}
        </Route>
        <Route
          exact
          path={`${match.url}/edit-travel/:cardId`}
          component={EditTravel}
        />
        <Route
          path={`${match.url}/edit-travel/:cardId/documents`}
          component={EditDocuments}
        />
      </Switch>
    </Container>
  );
};

export default Board;
