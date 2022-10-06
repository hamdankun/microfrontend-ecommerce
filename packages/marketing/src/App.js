import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClasName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({ history }) => {
  console.log("masuk sins ea");
  return (
    <StylesProvider generateClassName={generateClasName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
