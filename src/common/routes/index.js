// routes/index.js
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
// Import other route components as needed

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
