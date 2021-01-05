import React from "react";
import styled from "styled-components";

const BasicDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  margin-top: 80px;
  width: 60%;
  border: 5px solid blue;
  padding: 25px;
`;
const CardBasicDiv = styled.div`
  display: flex;
  border: 5px solid blue;
  margin: 0 auto;
  padding: 10px;
  perspective: 1000px;
  &:hover {
    transform: rotateY(180deg);
    background: red;
  }
`;
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: rotateY(180deg);
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
`;
const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: dodgerblue;
  color: black;
  transform: rotateY(180deg);
`;
const Cards = () => {
  return (
    <BasicDiv>
      <CardBasicDiv>
        <FlipCardInner>
          <FlipCardFront>A7a</FlipCardFront>
          <FlipCardBack>Dal3ha</FlipCardBack>
        </FlipCardInner>
      </CardBasicDiv>
    </BasicDiv>
  );
};
export default Cards;
