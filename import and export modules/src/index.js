import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math";
import * as piMath from "./math";

ReactDOM.render(
  <div>
    <ul>
      <li>{pi}</li>
      <li>{doublePi()}</li>
      <li>{triplePi()}</li>
    </ul>
    <ul>
      <li>{piMath.default}</li>
      <li>{piMath.doublePi()}</li>
      <li>{piMath.triplePi()}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
