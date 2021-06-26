import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Aos from "aos"
import "aos/dist/aos.css"

const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <AboutContainer id="/page-2">
      <AboutWrapper>
        <AboutHeadWrp>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <AboutHeading>Let us Introduce ourself</AboutHeading>
            <AboutH>About</AboutH>
          </div>
          <AboutP>
            Building a personal website is the perfect way to introduce yourself
            to potential employers and showcase your marketable skills and
            experience. These templates are great platforms on which to convey
            all of that very important information to the decision-makers you’re
            interested in impressing.
          </AboutP>
          <Button
            primary="true"
            round="true"
            big="true"
            css={`@media screen and (max-width: 468px){
            font-size:16px
          })`}
          >
            View More
          </Button>
        </AboutHeadWrp>
        <AboutImgWrp>
          <AboutImg
            data-aos="fade-left"
            src="https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </AboutImgWrp>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  min-height: 100vh;
  /* background: red; */
  display: flex;
  align-items: center;
`
const AboutWrapper = styled.div`
  display: flex;
  /* background: red; */
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  margin: 0 2rem 0 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 3rem 3rem;
  }

  @media screen and (max-width: 368px) {
    margin: 0;
  }
`
const AboutHeadWrp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  /* background: green; */

  @media screen and (max-width: 968px) {
    flex: 3;
  }
`

const AboutHeading = styled.h6`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-align: center;
`

const AboutH = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 4rem;
  @media screen and (max-width: 468px) {
    font-size: 3rem;
  }
`

const AboutP = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`
const AboutImgWrp = styled.div`
  flex: 1;
  /* background: green; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem 3rem 2rem;

  @media screen and (min-width: 1020px) {
    padding: 10rem;
  }

  @media screen and (max-width: 968px) {
    flex: 4;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem 2rem 1rem;
  }
`

const AboutImg = styled.img`
  width: 100%;
  border-radius: 20px;
`
