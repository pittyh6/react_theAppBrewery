import React from "react";
import Card from "./Card";

function emojiMap(infoEmoji) {
  return (
    <Card
      key={infoEmoji.id}
      id={infoEmoji.id}
      emoji={infoEmoji.emoji}
      name={infoEmoji.name}
      meaning={infoEmoji.meaning}
    />
  );
}

export default emojiMap;
