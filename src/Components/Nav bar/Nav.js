import React from "react";
import styled from "styled-components";

const BasicNavLink = styled.a`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.primary};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 30px;
  &:hover {
    color: ${(props) => props.theme.extra2};
    border-radius: 15px;
  }
  margin: 10px 20px 10px 40px;
  padding: 10px;
  @media screen and (max-width: 400px){
    font-size:10px;
    padding:2px;
    margin: 5px 10px 5px 5px; 
  }
`;
const BasicHeader = styled.header`
  z-index: 9999;
  opacity: 0.9;
  justify-content: flex-end;
  top: 0;
  display: flex;
  background: ${(props) => props.theme.secondary};
  position: fixed;
  height: 80px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 400px){
  height:30px;
  justify-content:center;
    
  }
`;

const Navbar = (props) => {
  return (
    <BasicHeader>
      <BasicNavLink href="#Home">Home</BasicNavLink>
      <BasicNavLink href="#About">About</BasicNavLink>
      <BasicNavLink href="#Projects">Projects</BasicNavLink>
      <BasicNavLink href="#ContactMe">Contact Me</BasicNavLink>
    </BasicHeader>
  );
};
export default Navbar;
