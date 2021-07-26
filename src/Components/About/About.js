import React from "react";
import styled from "styled-components";
import img from "../../Components/Image/Casual.png";

const BasicDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 15%;
  opacity: 0.6;
  height: 35%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
`;
const Intro = styled.p`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-size: 43px;
  line-height: 1.6;
  font-familiy: Courier New;
  font-weight: 525;
  flex-wrap: wrap;
  color: ${(props) => props.theme.mainColor};
`;

const About = () => {
  return (
    <BasicDiv id="About">
      <Image src={img} alt="" />
      <Intro>`` Simplicity is The Ultimate Sophistication ``</Intro>
    </BasicDiv>
  );
};
export default About;
