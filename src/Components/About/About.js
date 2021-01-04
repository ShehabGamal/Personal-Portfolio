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
  border-bottom: 5px solid #360a14;
  padding: 20px 50px 20px 50px;
  height: 100%;
  over-flow: hidden;
`;
const Image = styled.img`
  border-bottom: 3px solid #dc493a;
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
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-left: 30px;
  margin-bottom: 25px;
  margin-right: 25px;
  width: 100%;
  line-height: 1.6;
  height: 100%;
  padding: 10px;
  font-familiy: sans-serif, Helvatica, Verdana;
`;
const OutsideLinks = styled.a`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.extraColor};
  margin-left: 20px;
`;
const ContactInfo = styled(Intro)`
  font-size: 15px;
`;
const About = () => {
  return (
    <BasicDiv>
      <Image src={img} alt="" />
      <Intro>
        `` Hello from My Portfolio, My Name Is Shehab Gamal. I am Highly
        Motivated Front-End Web-Developer Who Wants To Work on Huge Projects &
        Be a Part of Solid Organization ``
        <br />
        <br />
      </Intro>
      <ContactInfo>
        Contact-Info
        <br />
        shehab.gamal333@gmail.com
        <br />
      </ContactInfo>
      <OutsideLinks
        href="https://www.linkedin.com/in/shehab-el-deen-gamal-773010130/"
        target="_Blank"
      >
        LinkedIn
      </OutsideLinks>
      <OutsideLinks href="https://github.com/ShehabGamal" target="_Blank">
        GitHub
      </OutsideLinks>
    </BasicDiv>
  );
};
export default About;
