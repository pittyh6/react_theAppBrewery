import React from "react";
import ReactDOM from "react-dom";


const fName = "Priscila";
const lName = "F.B.";
const luckNumber = 5;
ReactDOM.render(
    <div>
        <h1>
            Hello {fName + " " + lName} OR {fName} {lName} OR {`${fName} ${lName}`}!
        </h1>
        <p>My luck number is {luckNumber}</p>
        <h6>What is your luck number {Math.floor(Math.random() * 10)}</h6>
    </div>,
    document.getElementById("root")
)
