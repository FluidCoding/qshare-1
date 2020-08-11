import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

import { routes } from "JS/routes";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { Layout } from "antd";

import Home from "Components/Home";
import Room from "Components/Room";
import Header from "Components/Header";

const App = props => {
  return (
    <div className="app">
      <RecoilRoot>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/room/:roomId">
              <Room />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
};

export default App;
