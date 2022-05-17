import { useState } from "react";
import List from "./list/List";
import NewItemForm from "./form/NewItemForm";

import "./App.css";

const App = () => {
  const [items, setItems] = useState(["test"]);
  const [newItemText, setNewItemText] = useState("");

  const handleSubmit = () => setItems([...items, newItemText]);

  const handleTextChange = (text) => setNewItemText(text);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList App</h1>
      </header>
      <List items={items} />
      <NewItemForm
        handleSubmit={handleSubmit}
        handleTextChange={handleTextChange}
      />
    </div>
  );
};

export default App;
