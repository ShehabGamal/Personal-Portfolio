import React from "react";
import styled from "styled-components";

const BasicDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <BasicDiv>
      <p>
        Hello from Home My Name is Shehab I love playing Chess and eating kebab
      </p>
    </BasicDiv>
  );
};
export default Home;
