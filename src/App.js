import React from "react";
import "./App.css";
import Navbar from "./Components/Nav bar/Nav";
import Cards from "./Components/Cards/Cards";
import About from "./Components/About/About.js";
import ContactMe from "./Components/ContactMe/ContactMe.js";

function App() {
  return (
    <body>
      <Navbar />
      <About />
      <Cards />
      <ContactMe />
    </body>
  );
}

export default App;
