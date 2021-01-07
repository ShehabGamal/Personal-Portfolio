import React from "react";
import styled from "styled-components";

const BasicDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const BasicH1 = styled.h1`
  display: flex;
  font-size: 80px;
  font-familiy: sans-serif, Helvetica, Verdana;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.background};
`;

const Home = () => {
  return (
    <BasicDiv>
      <BasicH1 id="Projects"> Projects </BasicH1>
    </BasicDiv>
  );
};
export default Home;
