import React from "react";
import styled from "styled-components";

const Drop = styled.div`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.fontcolor};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  background: none;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.borderonhover};
    color: ${(props) => props.theme.subtleshadow};
    border-radius: 15px;
  }
  margin: 10px 20px 10px 40px;
  border: none;
  padding: 10px;
`;
const BasicButton = styled.button`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.fontcolor};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  background: none;
  font-size: 30px;
  &:hover {
    background: ${(props) => props.theme.borderonhover};
    color: ${(props) => props.theme.subtleshadow};
    border-radius: 15px;
  }
  border: none;
`;

const Dropdown = (props) => {
  return (
    <Drop>
      <BasicButton>Default</BasicButton>
      <BasicButton>Luxury</BasicButton>
    </Drop>
  );
};

export default Dropdown;
