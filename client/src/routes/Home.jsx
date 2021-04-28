import React, { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";

import Footer from "../components/Footer.jsx";
import ItemTable from "../components/ItemTable.jsx";

const Home = () => {
  const [item, setItem] = useState("");

  const handleItemInput = (Event) => {
    setItem(Event.currentTarget.value);
  };

  return (
    <div>
      <SearchBar item={item} handleItemInput={handleItemInput} />
      <ItemTable />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
