import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  height: 4vh;
  width: 95%;
  display: flex;
  margin-top: auto;
  position: relative;
  bottom: 0;
  justify-content: center;
  align-items: center;
  border-top-style:solid;
  border-top-color:${(props) => props.theme.fontcolor}
  border-top-width:3px;
  flex-direction: row;
`;
const Holder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  font-size: 20px;
  font-family: Courier New;
  color: black;
`;
<Footer>
  <Holder></Holder>
</Footer>;

export default Footer;
