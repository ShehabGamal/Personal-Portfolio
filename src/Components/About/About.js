import React from "react";
import styled from "styled-components";


const BasicDiv = styled.div`
    display:flex;
    height:100vh;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    @media screen and (max-width: 400px){
      hieght:700px;
    }
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
  margin-left:auto;
  margin-right: auto;
  color: ${(props) => props.theme.extra};
  @media screen and (max-width: 400px){
    font-size:35px;
  }
`;
const Paragraph= styled.p`
  width:85%;
  font-size: 35px;
  font-family: Courier New;
  margin-right: auto;
  margin-left: auto;
  color: ${(props) => props.theme.secondary};
  font-weight:450;
  @media screen and (max-width: 400px){
    font-size:10px;
    width:80%;
  }
  
`;

const About = ()=>{
    return (
        <BasicDiv id="About">
            <CustomH1>About</CustomH1>
            <BasicDivChild>
            <Paragraph>
            My name is Shehab Al Deen Jamal, I am a self-taught front end web developer from Egypt.
            Web development is a passion, dedication and commitment. 
            Everything started when my brothers convinced me to start coding. 
            They helped in getting study material and adding finishing touches to my React-Apps. 
            I hope I can work with you or join your team in the future. 
            </Paragraph>
            </BasicDivChild>
        </BasicDiv>
    );
};

export default About