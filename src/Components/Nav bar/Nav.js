import React from "react";
import styled from "styled-components";

const BasicNavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.foreground};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.foreground};
    color: ${(props) => props.theme.extraColor};
    border: 3px solid #45a29e;
  }
  margin: 10px 20px 10px 40px;
  padding: 10px;
`;
const BasicHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  margin: 0 auto;
  height: 80px;
  width: 100%;
  justify-content: flex-end;
  background: ${(props) => props.theme.secondaryColor};
  z-index: 9999;
`;
const Navbar = () => {
  return (
    <BasicHeader>
      <BasicNavLink href="#About">About</BasicNavLink>
      <BasicNavLink href="#Projects">Projects</BasicNavLink>
      <BasicNavLink href="#ContactMe">Contact Me</BasicNavLink>
    </BasicHeader>
  );
};
export default Navbar;
