import React from "react";
import styled from "styled-components";

const BasicNavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.foreground};
  font-family: sans-serif, Helvatica, Verdana;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.foreground};
    color: ${(props) => props.theme.extraColor};
    border: 3px solid #45a29e;
  }
  margin: 10px 20px 10px 40px;
  padding: 10px;
  margin-left: auto;
`;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul>
          <BasicNavLink href="#About">About</BasicNavLink>
          <BasicNavLink href="#Projects">Projects</BasicNavLink>
          <BasicNavLink href="#ContactMe">Contact Me</BasicNavLink>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
