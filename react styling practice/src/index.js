//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

//MINE SOLUTION
import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();

function CheckGreeting() {
  if (time < 12) {
    return (
      <h1 className="heading" style={{ color: "red" }}>
        Good morning
      </h1>
    );
  } else if ((time >= 12) & (time < 18)) {
    return (
      <h1 className="heading" style={{ color: "green" }}>
        Good afternoon
      </h1>
    );
  } else {
    return (
      <h1 className="heading" style={{ color: "blue" }}>
        Good evening
      </h1>
    );
  }
}

ReactDOM.render(<CheckGreeting />, document.getElementById("root"));


//ANGELA SOLUTION
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

let greeting;
const customStyle = {
  color: ""
}

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);