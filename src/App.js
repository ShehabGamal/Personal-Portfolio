import React from "react";
import "./App.css";
import Navbar from "./Components/Nav bar/Nav";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js"
import Cards from "./Components/Cards/Cards";
import ContactMe from "./Components/ContactMe/ContactMe.js";


function App(props) {
  return (
    <body>
      <Navbar />
      <Home />
      <About />
      <Cards />
      <ContactMe />
    </body>
  );
}

export default App;
