import React, { useState } from "react";

//Challenge:
//1. Given that you can get the current time using:
//let time = new Date().toLocaleTimeString();
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed. OK

// function App() {
//   var time = new Date().toLocaleTimeString();

//   function getTime() {
//     return setTime((time = new Date().toLocaleTimeString()));
//   }

//   const [timeStart, setTime] = useState(time);

//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       <button onClick={getTime}>Get Time</button>
//     </div>
//   );
// }

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);

function App() {
  var time = new Date().toLocaleTimeString();
  const [timeStart, setTime] = useState(time);

  setInterval(getTime, 1000);

  function getTime() {
    return setTime((time = new Date().toLocaleTimeString()));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
