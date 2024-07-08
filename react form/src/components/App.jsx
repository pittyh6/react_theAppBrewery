import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function submitName(event) {
    setUpdateName(name);
    setName("");

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {updateName}</h1>
      <form onSubmit={submitName}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={handleChange}
          value={name}
        />
        {/* <button onClick={submitName}>Submit</button> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
