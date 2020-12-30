import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BasicNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.background};
  font-family: sans-serif;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.extraColor};
    border: ${(props) => props.theme.extraColor};
  }
`;
const BasicNavLink2 = styled(BasicNavLink)`
  float: right;
`;
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
