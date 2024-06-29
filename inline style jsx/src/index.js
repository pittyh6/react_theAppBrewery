import React from "react";
import ReactDOM from "react-dom";

const costumStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};
costumStyle.color = "blue";

ReactDOM.render(
  <h1 style={costumStyle}>Hello World!</h1>,
  document.getElementById("root")
);
