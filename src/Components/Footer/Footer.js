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
  border-top: solid black 4px;
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
  <Holder>© Shehab Gamal 2020 All Rights Reserved</Holder>
</Footer>;

export default Footer;
