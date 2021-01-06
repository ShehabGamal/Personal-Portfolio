import React from "react";
import "./App.css";
import Navbar from "./Components/Nav bar/Nav";
import Cards from "./Components/Cards/Cards";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import styled from "styled-components";

const BasicHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  margin: 0 auto;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background: transparent;
`;

function App() {
  return (
    <body>
      <BasicHeader>
        <Navbar />
      </BasicHeader>
      <About />
      <Home />
      <Cards />
    </body>
  );
}

export default App;
