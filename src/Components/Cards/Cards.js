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
const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
  height: 200px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
`;
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${FlipCard}:hover & {
    transform: rotateY(180deg);
  }
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
  color: white;
  transform: rotateY(180deg);
`;
const Cards = () => {
  return (
    <BasicDiv>
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>a7a</FlipCardFront>
          <FlipCardBack>Dal3ha</FlipCardBack>
        </FlipCardInner>
      </FlipCard>
    </BasicDiv>
  );
};
export default Cards;
