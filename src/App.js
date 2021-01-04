import React from "react";
import "./App.css";
import Navbar from "./Components/Nav bar/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import styled from "styled-components";

const BasicHeader = styled.header`
  display: flex;
  margin: 0 auto;
  height: 80px;
  justify-content: center;
  margin-bottom: 80px;
`;

function App() {
  return (
    <body>
      <BasicHeader>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </BasicHeader>
      <About />
      <Home />
    </body>
  );
}

export default App;
