import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate: (location) => {
      if (history.location.pathname !== location.pathname) {
        history.push(location.pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_auth-dev-root");

  if (el)
    mount(el, {
      defaultHistory: createBrowserHistory(),
    });
}

export { mount };
