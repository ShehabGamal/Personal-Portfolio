import React from "react";
import styled from "styled-components";
import img1 from "../../Components/Image/to-do-list.PNG";
import img2 from "../../Components/Image/PokemonApp.PNG";
import img3 from "../../Components/Image/WeatherApp.PNG";

const BasicDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  padding: 25px;
`;
const FlipCard = styled.div`
  background-color: transparent;
  width: 300px;
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
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.background};
  transform: rotateY(180deg);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Span = styled.span`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  font-size: 20px;
  font-family: sans-serif, Helvatica, Verdana;
  justify-content: center;
  align-items: center;
  padding: 25px;
  flex-wrap: wrap;
  color: ${(props) => props.theme.mainColor};
`;
const ExternalLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.extraColor};
  margin: 0 auto;
`;

const Cards = () => {
  return (
    <BasicDiv>
      <FlipCard>
        <FlipCardInner>
          <FlipCardFront>
            <Image src={img1} />
          </FlipCardFront>
          <FlipCardBack>
            <Span>
              Simple To Do List to Handle <br />
              Busy Day Work Flow
              <br />
              <br />
              <br />
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
            <Span>
              Explore Your Pokemon
              <br />
              Enter Your Pokemon Name & Reveal It's Status
              <br />
              <br />
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
            <Span>
              The Weather App Allows Users To Inquire About Temprature
              World-Wide
              <br />
              <br />
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
            </Span>
          </FlipCardBack>
        </FlipCardInner>
      </FlipCard>
    </BasicDiv>
  );
};
export default Cards;
