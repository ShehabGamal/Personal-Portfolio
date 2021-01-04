import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BasicNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.foreground};
  font-family: sans-serif, Helvatica, Verdana;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.foreground};
    color: ${(props) => props.theme.extraColor};
    border: 2px solid #dc493a;
  }
  margin: 10px 20px 10px 40px;
  padding: 5px;
`;
const BasicNavLink2 = styled(BasicNavLink)``;
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul>
          <BasicNavLink to="/Home">Projects</BasicNavLink>
          <BasicNavLink2 to="/About">About</BasicNavLink2>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
