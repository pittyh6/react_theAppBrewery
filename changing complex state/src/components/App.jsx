import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  //const [lastName, setLastName] = useState("");

  // function getFirstName(event) {
  //   setFirstName(event.target.value);
  // }
  // function getLastName(event) {
  //   setLastName(event.target.value);
  // }

  function handleChange(event) {
    // const inputName = event.target.name;
    // const newValueInput = event.target.value;
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          value={fullName.firstName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={fullName.lastName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
