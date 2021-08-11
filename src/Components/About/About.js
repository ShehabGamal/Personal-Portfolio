import React from "react";
import styled from "styled-components";


const BasicDiv = styled.div`
    display:flex;
    height:100vh;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const BasicDivChild = styled.div`
display: flex;
margin-left: auto;
margin-right: auto;
justify-content: center;
align-items: center;
`;
const CustomH1 = styled.h1`
  display: flex;
  font-size: 120px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  margin-top:-10vh;
  margin-left:auto;
  margin-right: auto;
  color: ${(props) => props.theme.extra};
  opacity: 0.8;
`;
const Paragraph= styled.p`
  width:85%;
  font-size: 30px;
  font-family: Courier New;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
`;

const About = ()=>{
    return (
        <BasicDiv id="About">
            <CustomH1>About</CustomH1>
            <BasicDivChild>
            <Paragraph>
                My Name is Shehab Al Deen, I am Self-Taught Front-End Web Developer from Egypt.
                Web Development is a Passion, Dedication and Commitment. Everything Started When My Brothers Convinced Me to
                Start Coding, They Helped Me In Getting Study Material And Adding Finishing Touches to My React-Apps.
                Now I am looking Enhance My Experience to Start My Career.  
            </Paragraph>
            </BasicDivChild>
        </BasicDiv>
    );
};

export default About