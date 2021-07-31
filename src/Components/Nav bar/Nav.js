import React from "react";
import styled from "styled-components";

const BasicNavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.black};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    border: 3px solid #45a29e;
  }
  margin: 10px 20px 10px 40px;
  padding: 10px;
`;
const BasicHeader = styled.header`
  z-index: 9999;
  opacity: 0.9;
  justify-content: flex-end;
  top: 0;
  display: flex;
  background: ${(props) => props.theme.navbackground};
  position: fixed;
  height: 80px;
  width: 100%;
  margin: 0 auto;
`;
const ThemeButton = styled.button`
  text-decoration: none;
  color: ${(props) => props.theme.black};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  background: none;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.black};
    border: 3px solid #45a29e;
    color: ${(props) => props.theme.white};
  }
  margin: 10px 20px 10px 40px;
  border: none;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <BasicHeader>
      <BasicNavLink href="#About">About</BasicNavLink>
      <BasicNavLink href="#Projects">Projects</BasicNavLink>
      <BasicNavLink href="#ContactMe">Contact Me</BasicNavLink>
      <ThemeButton>Theme</ThemeButton>
    </BasicHeader>
  );
};
export default Navbar;
