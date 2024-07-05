import React from "react";
import Input from "./Input";
import { Button } from "./Input";

// Mine answer
// function Form(props) {
//   return (
//     <form className="form">
//       <Input type="text" placeholder="Username" />
//       <Input type="password" placeholder="Password" />
//       {props.status ? (
//         <button type="submit">Login</button>
//       ) : (
//         <div>
//           <Input type="password" placeholder="Confirm Password" />
//           <button type="submit">Register</button>
//         </div>
//       )}
//     </form>
//   );
// }

//her answer
function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.status && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.status ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
