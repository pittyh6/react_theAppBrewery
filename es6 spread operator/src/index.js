import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["strawberry", "watermelon", "starfruit", ...citrus];

console.log(fruits);

const fullName = {
  fName: "Priscila",
  lName: "Bezerra",
};

const user = {
  ...fullName,
  id: 1,
  userId: "pfer01",
};

console.log(user);
