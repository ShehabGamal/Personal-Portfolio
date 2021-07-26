import React from "react";
import styled from "styled-components";
import img1 from "../../Components/Image/to-do-list.PNG";
import img2 from "../../Components/Image/PokemonApp.PNG";
import img3 from "../../Components/Image/WeatherApp.PNG";

const BasicDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  background: ${(props) => props.theme.black};
  height: 100vh;
  width: 100%;
`;
const BasicDivChild = styled(BasicDiv)`
  margin-top: 5vh;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
`;
const CustomH1 = styled.h1`
  margin-top: 20vh;
  display: flex;
  font-size: 120px;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.theme.white};
`;
const FlipCard = styled.div`
  background-color: transparent;
  width: 500px;
  height: 300px;
  perspective: 1000px;
  margin: 0 auto;
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
`;
const FlipCardBack = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.mainColor};
  transform: rotateY(180deg);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const CardH1 = styled(CustomH1)`
  margin-top: 25px;
  color: ${(props) => props.theme.white};
  opacity: 0.3;
  font-size: 35px;
`;
const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  font-size: 20px;
  font-family: Courier New;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
`;
const LinkSpan = styled(Span)`
  flex-direction: row;
`;
const ExternalLink = styled.a`
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  margin: 0 auto;
  padding: 5px;
  color: ${(props) => props.theme.white};
  &:hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.black};
    border: 3px solid #45a29e;
  }
  opacity: 0.6;
`;

const Cards = () => {
  return (
    <BasicDiv id="Projects">
      <CustomH1>Projects</CustomH1>
      <BasicDivChild>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <Image src={img1} />
            </FlipCardFront>
            <FlipCardBack>
              <CardH1>Todo List</CardH1>
              <Span>
                Generic Solution <br /> To Handle Busy Day Work Flow
                <br />
                <br />
                <LinkSpan>
                  <ExternalLink
                    href="https://github.com/ShehabGamal/to-do-list"
                    target="_Blank"
                  >
                    GitHub
                  </ExternalLink>
                  <ExternalLink
                    href="https://goofy-almeida-26da4b.netlify.app/"
                    target="_Blank"
                  >
                    Netlify
                  </ExternalLink>
                </LinkSpan>
              </Span>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <Image src={img2} />
            </FlipCardFront>
            <FlipCardBack>
              <CardH1>Pokemon App</CardH1>
              <Span>
                Explore Your Pokemon
                <br />
                Enter Your Pokemon Name & Reveal It's Status
                <br />
                <br />
                <LinkSpan>
                  <ExternalLink
                    href="https://github.com/ShehabGamal/Pokemon"
                    target="_Blank"
                  >
                    GitHub
                  </ExternalLink>
                  <ExternalLink
                    href="https://relaxed-torvalds-3cd3c7.netlify.app/"
                    target="_Blank"
                  >
                    Netlify
                  </ExternalLink>
                </LinkSpan>
              </Span>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <Image src={img3} />
            </FlipCardFront>
            <FlipCardBack>
              <CardH1>Weather App</CardH1>
              <Span>
                Traditional Solution To Inquire About Temprature World-Wide
                <br />
                <br />
                <LinkSpan>
                  <ExternalLink
                    href="https://github.com/ShehabGamal/Weather-App"
                    target="_Blank"
                  >
                    GitHub
                  </ExternalLink>
                  <ExternalLink
                    href="https://eager-joliot-0ecef8.netlify.app/"
                    target="_Blank"
                  >
                    Netlify
                  </ExternalLink>
                </LinkSpan>
              </Span>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </BasicDivChild>
    </BasicDiv>
  );
};
export default Cards;
