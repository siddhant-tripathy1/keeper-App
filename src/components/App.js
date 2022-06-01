import React from "react";
import Header from "./Header";

import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((item) => (
        <Note id={item.name} content={item.content} name={item.name} />
      ))}
    </div>
  );
}

export default App;
