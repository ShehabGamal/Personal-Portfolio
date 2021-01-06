import React from "react";
import styled from "styled-components";
import img from "../../Components/Image/Casual.png";

const BasicDiv = styled.div`
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid #66fcf1;
  padding: 20px 50px 20px 50px;
  height: 100%;
  margin-top: 80px;
  over-flow: hidden;
  color: ${(props) => props.theme.foreground};
`;
const Image = styled.img`
  border-bottom: 3px solid #66fcf1;
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: left;
  align-items: left;
  padding: 5px;
  margin-left: 100px;
`;
const Intro = styled.p`
  display: flex;
  justify-content: flexstart;
  font-size: 33px;
  margin-left: 25px;
  width: 100%;
  line-height: 1.6;
  height: 100%;
  padding: 10px;
  font-familiy: sans-serif, Helvatica, Verdana;
  float: left;
  flex-wrap: wrap;
`;

const About = () => {
  return (
    <BasicDiv id="About">
      <Image src={img} alt="" />
      <Intro>
        `` Hello From My Portfolio, My Name Is Shehab Gamal. I am Highly
        Motivated Front-End Web-Developer Who Seeks To Work on Huge Projects &
        Be a Part of Solid Organization ``
        <br />
        <br />
        Contact Information :
        <br />
        shehab.gamal333@gmail.com
        <br />
        +201284704762
      </Intro>
    </BasicDiv>
  );
};
export default About;
