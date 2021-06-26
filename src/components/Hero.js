import React from "react"
import styled, { keyframes } from "styled-components"
import { Button } from "./Button"

import Video2 from "../assets/videos/Travel2.mp4"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src={Video2}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1> Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
          <Button
            primary="true"
            round="true"
            big="true"
            to="/trips"
            css={`
              animation: fade2 1000ms forwards;
              @keyframes fade2 {
                from {
                  opacity: 0;
                  transform: translateY(80px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}
          >
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.6) 100%);
  }
`
const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  /* background: green; */
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
  /* background: red; */
`

const fade = keyframes`
to{
  opacity: 1;
}
`

const fade2 = keyframes`
from{
  opacity: 0;
  transform: translateY(80px);
}

to{
  opacity: 1;
  transform: translateY(0);
}
`

const HeroH1 = styled.h1`
  position: relative;
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
  animation: ${fade} 1000ms ease-in-out 1s;
  opacity: 0;
  animation-fill-mode: forwards;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 1.5rem;
  animation: ${fade2} 1000ms forwards cubic-bezier(0.22, 0.32, 0, 1.54);
`
