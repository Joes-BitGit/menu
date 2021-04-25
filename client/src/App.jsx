import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  const [item, setItem] = useState("");

  const handleItemInput = (Event) => {
    setItem(Event.currentTarget.value);
  };

  return (
    <div>
      <SearchBar item={item} handleItemInput={handleItemInput} />
    </div>
  );
};

export default App;
