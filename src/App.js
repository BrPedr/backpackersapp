import React from "react";
import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./pages/Homepage";
import SignInPage from "./pages/LogInPage"
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
