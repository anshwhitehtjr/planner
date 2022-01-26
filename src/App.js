import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import appContext from "./Context/appContext";
import { Alert, Navbar } from "./Utilities/AppComponents";
import { About, Home } from "./Utilities/Pages";

const App = () => {
  const context = useContext(appContext);
  const { isAlert, showAlert } = context;

  // useEffect(() => {
  //   showAlert("Hello, World!", "indigo");
  // }, []);

  return (
    <>
      <Router>
        <Navbar title="Planner" />
        <Alert alert={ isAlert } />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
