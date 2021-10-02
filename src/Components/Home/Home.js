import React from "react";
import styled from "styled-components";
import figure from "../../Assets/Images/Me.png"


const BasicDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props=>props.theme.primary};
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 400px){
    hieght:700px;
  }
`;

const BasicDivChild=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;

`;
const Img = styled.img`
display:flex;
width:35%;
height:35%;
`;


const Welcome = styled.p`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  font-size: 43px;
  line-height: 1.6;
  font-family: Courier New;
  font-weight:550;
  flex-wrap: wrap;
  color: ${(props) => props.theme.extra};
  @media screen and (max-width: 400px){
    font-size:15px;
    width:100%;
  }
`;

const Home = () => {
  return (
    <BasicDiv id="Home">
    <BasicDivChild>
    <Img src={figure}/>
    <Welcome>Simplicity is The Ultimate Sophistication</Welcome>
    </BasicDivChild>
    </BasicDiv>
  );
};
export default Home;
