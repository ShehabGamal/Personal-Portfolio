import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 4vh;
  width: 95%;
  display: flex;
  margin-top: auto;
  position: relative;
  bottom: 0;
  justify-content: center;
  align-items: center;
  border-top-style:solid;
  border-top-color:${(props) => props.theme.secondary}
  border-top-width:3px;
  flex-direction: row;
`;
const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  font-size: 20px;
  font-weight:bold;
  font-family: Montserrat, sans-serif;
  color: ${(props) => props.theme.extra};
  @media screen and (max-width: 400px){
    font-size:10px;
    width:70%;
  }

`;
const Footer = () => {
  return (
    <Wrapper>
      <Holder> © Shehab Gamal 2020. All Rights Reserved.</Holder>
    </Wrapper>
  );
};

export default Footer;
