import React from "react";
import Emoji from "./Emoji";
import emojiDetails from "../emojiDetails";

function createEmoji(emojiTerm) {
  return (
    <Emoji
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emoji details</span>
      </h1>

      <dl className="dictionary">{emojiDetails.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
