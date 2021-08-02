import React from "react";
import styled from "styled-components";

const BasicNavLink = styled.a`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.fontcolor};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.borderonhover};
    color: ${(props) => props.theme.subtleshadow};
    border-radius: 15px;
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

const Navbar = (props) => {
  return (
    <BasicHeader>
      <BasicNavLink href="#About">About</BasicNavLink>
      <BasicNavLink href="#Projects">Projects</BasicNavLink>
      <BasicNavLink href="#ContactMe">Contact Me</BasicNavLink>
    </BasicHeader>
  );
};
export default Navbar;
