import React from "react";
import styled from "styled-components";
import img from "../../Components/Image/Casual.png";

const BasicDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid #66fcf1;
  padding: 20px 50px 20px 50px;
  height: 100vh;
  margin-top: 80px;
  color: ${(props) => props.theme.foreground};
  flex-wrap: wrap;
`;
const Image = styled.img`
  border-bottom: 3px solid #66fcf1;
  width: 20%;
  height: 35%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  margin-top: 11vh;
`;
const Intro = styled.p`
  display: flex;
  justify-content: center;
  font-size: 43px;
  width: 100%;
  line-height: 1.6;
  height: 100%;
  padding: 10px;
  font-familiy: souvenir;
  flex-wrap: wrap;
  margin-top: 10vh;
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
