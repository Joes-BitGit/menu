import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  const [item, setItem] = useState("");

  const handleItemInput = (Event) => {
    setItem(Event.currentTarget.value);
  };

  return (
    <div>
      <NavBar />
      <SearchBar item={item} handleItemInput={handleItemInput} />
      <br />
      <Footer />
    </div>
  );
};

export default App;
