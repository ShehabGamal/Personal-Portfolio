import React from "react";
import styled from "styled-components";

const BasicDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const BasicH1 = styled.h1`
  display: flex;
  font-size: 80px;
  font-familiy: sans-serif, Helvatica, Verdana;
  margin-right: auto;
  margin-left: auto;
`;

const Home = () => {
  return (
    <BasicDiv>
      <BasicH1 id="Portfolio"> Projects </BasicH1>
    </BasicDiv>
  );
};
export default Home;
