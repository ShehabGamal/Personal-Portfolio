import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiNetlify } from "react-icons/si";

const BasicDiv = styled.footer`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20vh;
`;

const BasicDivChild = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;
const ExternalLinks = styled.a`
  font-size: 30px;
  font-familiy: sans-serif, Helvetica, Verdana;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.foreground};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.extraColor};
    background: ${(props) => props.theme.foreground};
    border: 3px solid #45a29e;
  }
`;
const CustomParagraph = styled.p`
  font-size: 30px;
  font-familiy: sans-serif, Helvetica, Verdana;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.foreground};
`;
const ContactMe = () => {
  return (
    <BasicDiv id="ContactMe">
      <BasicDivChild>
        <ExternalLinks href="https://github.com/ShehabGamal" target="_Blank">
          <FaGithub />
          GitHub
        </ExternalLinks>
        <ExternalLinks
          href="https://app.netlify.com/teams/shehabgamal/overview"
          target="_Blank"
        >
          <SiNetlify />
          Netlify
        </ExternalLinks>
        <CustomParagraph>
          <SiGmail />
          shehab.gamal333@gmail.com
        </CustomParagraph>
        <ExternalLinks
          href="https://www.linkedin.com/in/shehab-el-deen-gamal-773010130/"
          target="_Blank"
        >
          <FaLinkedin />
          Linkedin
        </ExternalLinks>
      </BasicDivChild>
    </BasicDiv>
  );
};
export default ContactMe;
