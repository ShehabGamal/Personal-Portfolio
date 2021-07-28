import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Footer from "../../Components/Footer/Footer.js";
const BasicDiv = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: ${(props) => props.theme.white};
`;

const BasicDivChild = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  width: 50%;
  flex-direction: row;
`;
const ExternalLinks = styled.a`
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.mainColor};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.black};
    border: 3px solid #45a29e;
  }
  font-size: 30px;
  font-familiy: Montserrat, sans-serif;
  font-weight: bold;
`;
const CustomParagraph = styled.p`
  font-size: 30px;
  font-familiy: Montserrat, sans-serif;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.mainColor};
  font-weight: bold;
`;
const CustomH1 = styled.h1`
  display: flex;
  font-size: 120px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  color: ${(props) => props.theme.black};
`;
const ContactMe = () => {
  return (
    <BasicDiv id="ContactMe">
      <CustomH1> Let's work together...</CustomH1>
      <BasicDivChild>
        <ExternalLinks href="https://github.com/ShehabGamal" target="_Blank">
          <FaGithub />
          GitHub
        </ExternalLinks>
        <ExternalLinks
          href="https://www.linkedin.com/in/shehab-el-deen-gamal-773010130/"
          target="_Blank"
        >
          <FaLinkedin />
          Linkedin
        </ExternalLinks>
        <CustomParagraph>
          <SiGmail />
          &nbsp; shehab.gamal333@gmail.com
        </CustomParagraph>
      </BasicDivChild>
      <Footer />
    </BasicDiv>
  );
};
export default ContactMe;
