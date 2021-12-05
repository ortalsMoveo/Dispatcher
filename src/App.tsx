import "./App.css";
import MainPage from "./fetchers/MainPage/MainPage";
import WelcomePage from "./fetchers/WelcomePage/WelcomPage";
import { Route, Switch, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Switch>
        <Route path="/home" component={MainPage} />
        <Route exact path="/">
          {isAuthenticated ? <Redirect to="/home" /> : <WelcomePage />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
