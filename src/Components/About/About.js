import React from "react";
import styled from "styled-components";
import img from "../../Components/Image/Casual.png";

const BasicDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) => props.theme.extraColor};
`;
const Image = styled.img`
  border-bottom: 3px solid #0b0c10;
  width: 15%;
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
  font-familiy: souvenir;
  flex-wrap: wrap;
  color: ${(props) => props.theme.mainColor};
`;

const About = () => {
  return (
    <BasicDiv id="About">
      <Image src={img} alt="" />
      <Intro>
        `` Hello From My Portfolio, My Name Is Shehab Gamal. I am Highly
        Motivated Front-End Web-Developer Who Seeks To Work on Huge Projects &
        Be a Part of Solid Organization ``
      </Intro>
    </BasicDiv>
  );
};
export default About;
