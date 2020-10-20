import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import { loadLists } from "../../services/api";

import { selectAllCards } from "../../redux/cards/cardsSlice";
import { selectUser } from "../../redux/user/userSlice";

import CardsList from "../CardsList";
import EditTravel from "../EditTravel";
import EditDocuments from "../EditDocuments";

import { Container } from "./styles";

const Board = () => {
  const cardsList = useSelector(selectAllCards);
  const user = useSelector(selectUser);
  const match = useRouteMatch("/user/:id");

  const renderCardsList = () => {
    if (!cardsList || !user) {
      return null;
    }
    
    return cardsList.map((list, index) => {
      if (list.user !== user.uid) {
        return null;
      }
      return (
        <CardsList
          title={`${list.location}`}
          key={list.id}
          id={list.id}
          cardsList={cardsList}
          index={index}
          list={list}
        />
      );
    });
  };

  return (
    <Container>
      <Switch>
        <Route exact path={`/user/${match.params.id}`}>
          {renderCardsList()}
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
