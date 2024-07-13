// import React, { useState } from "react";
// //mine solution
// // function ToDoItem(props) {
// //   return props.item.map((todoItem) => <li key={todoItem}>{todoItem}</li>);
// // }

// // --------
// // her solution
// function ToDoItem(props) {
//   const [isDone, setIsDone] = useState(false);
//   function handleClick() {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }
//   return (
//     <div onClick={handleClick}>
//       <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
//         {props.item}
//       </li>
//     </div>
//   );
// }

//--------------------
//Final Version

import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}
export default ToDoItem;
