import React from "react";
import "./App.css";
import Navbar from "./Components/Nav bar/Nav";
import Cards from "./Components/Cards/Cards";
import Home from "./Components/Home/Home.js";
import ContactMe from "./Components/ContactMe/ContactMe.js";

function App(props) {
  return (
    <body>
      <Navbar />
      <Home />
      <Cards />
      <ContactMe />
    </body>
  );
}

export default App;
