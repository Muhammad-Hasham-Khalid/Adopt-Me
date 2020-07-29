/* 
React.createElement(
  what kind of tag it is,
  attributes we want to give to component,
  children
);
*/

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// rendering on the DOM
render(<App />, document.getElementById("root"));
