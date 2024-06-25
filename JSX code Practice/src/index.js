//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>I love reading books</h1>
    <ul>
      <li>Horror</li>
      <li>Pychological Thriller</li>
      <li>Pycopath</li>
    </ul>
  </div>,
  document.getElementById("root")
);
