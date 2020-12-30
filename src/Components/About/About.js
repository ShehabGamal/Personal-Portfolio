import React from "react";
import styled from "styled-components";

const BasicDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

const About = () => {
  return (
    <BasicDiv>
      <p>Hello from About My favorite school Subject is chemisty</p>
    </BasicDiv>
  );
};
export default About;
