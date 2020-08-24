/* 
React.createElement(
  what kind of tag it is,
  attributes we want to give to component,
  children
);
*/

import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import { Provider } from "react-redux";
import SearchParams from "./SearchParams";
import DetailsWthErrorBoundary from "./Details";
import store from "./store";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <DetailsWthErrorBoundary path="/details/:id" />
          </Router>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

// rendering on the DOM
render(<App />, document.getElementById("root"));
