import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
};

export default App;
