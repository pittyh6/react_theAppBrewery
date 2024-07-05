import React from "react";
import Login from "./Login";
import Input from "./Input";

var isLogged = false;

// function renderConditionally() {
//   if (isLogged) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       <div>
//         <Login />
//       </div>
//     );
//   }
// }

const currentTime = new Date().getHours();
function App() {
  return (
    // <div className="container">{isLogged ? <h1>Hello</h1> : <Login />}</div>

    //is you do not want to show anything in false case.
    //currentTime > 14 ? <h1>Why are you still working?</h1> : null
    currentTime > 13 && <h1>Why are you still working?</h1>
  );
}

export default App;
