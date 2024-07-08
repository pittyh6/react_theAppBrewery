import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("hello");
  function handleClick() {
    setHeadingText("bye");
  }

  //mine
  // const [colorHover, setColorHover] = useState("white");

  // function handleMouseOver() {
  //   setColorHover("black");
  // }
  // function handleMouseOut() {
  //   setColorHover("white");
  // }

  //hers
  const [colorHover, setColorHover] = useState(false);
  function handleMouseOver() {
    setColorHover(true);
  }
  function handleMouseOut() {
    setColorHover(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        //style={{ backgroundColor: colorHover }} mine
        style={{ backgroundColor: colorHover ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
