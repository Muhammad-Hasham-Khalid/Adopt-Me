/* 
React.createElement(
  what kind of tag it is,
  attributes we want to give to component,
  children
);
*/

import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import DetailsWthErrorBoundary from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

const App = () => {
  const themeHook = useState("peru");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar />
          <Router>
            <SearchParams path="/" />
            <DetailsWthErrorBoundary path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

// rendering on the DOM
render(<App />, document.getElementById("root"));
