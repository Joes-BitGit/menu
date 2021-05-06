import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes.jsx";
import NavBar from "./components/NavBar.jsx";
import { MenuContextProvider } from "./context/MenuContext.js";

const App = () => {
  return (
    <MenuContextProvider>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </MenuContextProvider>
  );
};

export default App;
