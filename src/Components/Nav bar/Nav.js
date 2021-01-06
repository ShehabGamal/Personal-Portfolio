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
`;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul>
          <BasicNavLink href="https://github.com/ShehabGamal" target="_Blank">
            GitHub
          </BasicNavLink>
          <BasicNavLink
            href="https://app.netlify.com/teams/shehabgamal/overview"
            target="_Blank"
          >
            Netlify
          </BasicNavLink>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
