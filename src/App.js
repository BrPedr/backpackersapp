import React from "react";
import { Route, Switch } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";

import Homepage from "./pages/Homepage";
import SignInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";
import {
  createUserProfileDocument,
  createCardsDocument,
} from "./firebase/firebase.utils";

import { selectUser } from "./redux/user/userSlice";
import { selectAllCards } from "./redux/cards/cardsSlice";

import "./components/ModalRoot/index";

import GlobalStyles from "./styles/GlobalStyles";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);
  const cards = useSelector(selectAllCards);

  useEffect(() => {
    createUserProfileDocument(user);
  }, [user]);

  useEffect(() => {
    if (!cards) return;

    createCardsDocument(user, cards);
  }, [user, cards]);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/user/:id" component={UserPage} />
        </Switch>
        <GlobalStyles />
      </DndProvider>
    </>
  );
}

export default App;
