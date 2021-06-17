import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { MenuContextProvider } from "./context/MenuContext.js";
import "./styles/general.css";

const App = () => {
  return (
    <MenuContextProvider>
      <Router>
        <div className="body-app">
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </Router>
    </MenuContextProvider>
  );
};

export default App;
