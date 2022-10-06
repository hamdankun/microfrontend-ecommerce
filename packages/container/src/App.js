import React, { lazy, Suspense, useState } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Progress from "./components/Progress";
import Header from "./components/Header";

const AuthLazy = lazy(() => import("./components/AuthApp"));

const generateClasName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClasName}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Switch>
          <Suspense fallback={<Progress />}>
            <Route
              path="/"
              component={lazy(() => import("./components/MarketingApp"))}
            />
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
          </Suspense>
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};
