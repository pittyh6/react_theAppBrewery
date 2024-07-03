import React from "react";
import emojipedia from "../emojipedia";
import emojiMap from "./emojiMap";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiMap)}</dl>
    </div>
  );
}

export default App;
