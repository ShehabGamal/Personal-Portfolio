import React from "react";
import styled from "styled-components";

const BasicDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const BasicH1 = styled.h1`
  display: flex;
  font-size: 80px;
  font-familiy: sans-serif, Helvetica, Verdana;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.secondaryColor};
`;

const Home = () => {
  return (
    <BasicDiv>
      <BasicH1 id="Portfolio"> Projects </BasicH1>
    </BasicDiv>
  );
};
export default Home;
