import React from "react";
import "./App.css";
import Navbar from "./Components/Nav bar/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import styled from "styled-components";
import img from "./Components/Casual.png";
const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Container = styled.div`
  background: ${(props) => props.theme.extraColor};
  height: 70vh;
  padding-top: 100px;
  padding-left: 50px;
  padding-right: 50px;
  width: 60%;
  margin: 10% auto;
`;
const Image = styled.img`
  border: 2px solid white;
  border-radius: 50%;
  width: 20%;
  height: 40%;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;
function App() {
  return (
    <Wrapper>
      <Container>
        <Image src={img} alt="" />
        <BrowserRouter>
          <Navbar />
          <Route exact path="/Home" component={Home} />
          <Route path="/About" component={About} />
        </BrowserRouter>
      </Container>
    </Wrapper>
  );
}

export default App;
