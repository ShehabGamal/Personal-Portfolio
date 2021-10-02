import React from "react";
import styled from "styled-components";



const BasicDiv = styled.div`
    display:flex;
    height:100vh;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:${props=>props.theme.primary};
    @media screen and (max-width: 400px){
      hieght:700px;
    }
`;

const BasicDivChild = styled.div`
display: flex;
margin-left: auto;
margin-right: auto;
margin-top:0;
justify-content: center;
height:50vh;
align-items: center;
flex-direction:row;
`;
const CustomH1 = styled.h1`
  display: flex;
  font-size: 120px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  margin-top:-50px;
  color: ${(props) => props.theme.extra};
  @media screen and (max-width: 400px){
    font-size:35px;
    margin-top:0;
  }
`;
const Paragraph= styled.p`
  width:60%;
  font-size: 35px;
  font-family: Courier New;
  margin:0 auto;
  color: ${(props) => props.theme.secondary};
  font-weight:bold;
  @media screen and (max-width: 400px){
    font-size:12px;
  }
  
`;


const About = ()=>{
    return (
        <BasicDiv id="About">
            <CustomH1>About</CustomH1>
            <BasicDivChild>
            <Paragraph>
            My name is Shehab Al Deen Jamal, I am a self-taught front end web developer based Egypt.
            <br/><br/>
            Web development is a passion, dedication and commitment.
            <br /> <br/>
            Everything started when my brothers convinced me to start coding. 
            They helped in getting study material and adding finishing touches to my React-Apps.
            <br /> <br/>
            I hope I can work with you or join your team in the future. 
            </Paragraph>
            </BasicDivChild>
        </BasicDiv>
    );
};

export default About