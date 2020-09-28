import React from "react";
import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/LogInPage"
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
