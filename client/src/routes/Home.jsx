import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";

import ItemTable from "../components/ItemTable.jsx";

const Home = () => {
  const [item, setItem] = useState("");

  const handleItemInput = (Event) => {
    setItem(Event.currentTarget.value);
  };

  return (
    <div>
      <SearchBar item={item} handleItemInput={handleItemInput} />
      <ItemTable item={item} />
    </div>
  );
};

export default Home;
