import React from "react";
import { Route, Switch } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Homepage from "./pages/Homepage";
import SignInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";

import "./components/ModalRoot/index";

import GlobalStyles from "./styles/GlobalStyles";
import ModalRoot from "./components/ModalRoot/index";

function App() {
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
      <ModalRoot />
    </>
  );
}

export default App;
