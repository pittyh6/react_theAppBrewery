import React, { useState } from "react";
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved. ok
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
var elementItem = [];
function App() {
  const [item, setItem] = useState("Insert Item");

  function getItem(event) {
    const { value, name } = event.target;
    setItem(value);
  }

  function addItem() {
    elementItem.unshift(item);
    console.log(elementItem);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={getItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {elementItem.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
