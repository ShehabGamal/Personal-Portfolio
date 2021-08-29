import React from "react";
import styled from "styled-components";

const BasicDivChild = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props=>props.theme.primary};
  height: 100vh;
  overflow: hidden;
`;
const Holder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateZ(40deg);
`;

const Objects = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 4px;
  width: 100px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px #699bff);
  &:before {
    content: "";
    position: absolute;
    top: calc(50%-2px);
    right: 0;
    height: 4px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff);
    border-radius: 100%;
    transform: translateX(50%) rotateZ(45deg);
    animation: shining 3s ease-in-out infinite;
  }
  &:after {
    content: "";
    position: absolute;
    top: calc(50%-2px);
    right: 0;
    height: 4px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff);
    border-radius: 100%;
    animation: shining 3s ease-in-out infinite;
    transform: translateX(50%) rotateZ(-45deg);
  }
  @keyframes shining {
    0% {
      width: 0px;
    }
    50% {
      width: 30px;
    }
    100% {
      width: 0px;
    }
  }
  &:nth-child(1) {
    top: calc(50% - 100px);
    left: calc(50% - 250px);
    animation-delay: 1s;
  }
  &:nth-child(1)::before {
    animation-delay: 1s;
  }
  &:nth-child(1)::after {
    animation-delay: 1s;
  }
  &:nth-child(2) {
    top: calc(50% - 50px);
    left: calc(50% - 200px);
    animation-delay: 1.2s;
  }
  &:nth-child(2)::before {
    animation-delay: 1.2s;
  }
  &:nth-child(2)::after {
    animation-delay: 1.2s;
  }
  &:nth-child(3) {
    top: calc(50% - 0px);
    left: calc(50% - 150px);
    animation-delay: 1.4s;
  }
  &:nth-child(3)::before {
    animation-delay: 1.4s;
  }
  &:nth-child(3)::after {
    animation-delay: 1.4s;
  }
  &:nth-child(4) {
    top: calc(50% - -50px);
    left: calc(50% - 200px);
    animation-delay: 1.6s;
  }
  &:nth-child(4)::before {
    animation-delay: 1.6s;
  }
  &:nth-child(4)::after {
    animation-delay: 1.6s;
  }
  &:nth-child(5) {
    top: calc(50% - -100px);
    left: calc(50% - 250px);
    animation-delay: 1.8s;
  }
  &:nth-child(5)::before {
    animation-delay: 1.8s;
  }
  &:nth-child(5)::after {
    animation-delay: 1.8s;
  }
  animation: tail 3s ease-in-out infinite, falling 3s ease-in-out infinite;
  @keyframes tail {
    0% {
      width: 0;
    }
    30% {
      width: 100px;
    }
    100% {
      width: 0;
    }
  }
  @keyframes falling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(300px);
    }
  }
`;

const Welcome = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 350px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-size: 43px;
  line-height: 1.6;
  font-family: Courier New;
  font-weight:550;
  flex-wrap: wrap;
  color: ${(props) => props.theme.extra};
`;

const About = () => {
  return (
    <BasicDivChild id="Home">
      <Holder>
        <Objects />
        <Objects />
        <Objects />
        <Objects />
        <Objects />
      </Holder>
      <Welcome>Simplicity is The Ultimate Sophistication</Welcome>
    </BasicDivChild>
  );
};
export default About;
