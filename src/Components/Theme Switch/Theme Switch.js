import React from "react";
import styled from "styled-components";

const SwitchButton = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  opacity: 0;
  width: 0;
  height: 0;
`;
const Checkbox = styled.input`
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
  opacity: 0;
  width: 0;
  height: 0;
  &:checked {
    background-color: #2196f3;
    transform: translateX(26px);
  }
  &:focus {
    box-shadow: 0 0 1px #2196f3;
  }
`;
const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  &:before {
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    transform: translateX(26px);
  }
  &:checked {
    background-color: #2196f3;
  }
  &:focus {
    box-shadow: 0 0 1px #2196f3;
  }
`;
const Dropdown = (props) => {
  return (
    <SwitchButton>
      <Checkbox></Checkbox>
      <Span></Span>
    </SwitchButton>
  );
};

export default Dropdown;
