import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"
import Aos from "aos"
import "aos/dist/aos.css"

const Trips = ({ heading }) => {
  React.useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 300,
      easing: "ease-in-out",
    })
  }, [])
  const data = useStaticQuery(graphql`
    query TripQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getTrip(data) {
    const tripArray = []
    data.allTripsJson.edges.forEach((item, index) => {
      tripArray.push(
        <ProductCard
          key={index}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <ProductImg
            // src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button
              primary="true"
              round="true"
              to="/trips"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripArray
  }
  return (
    <ProductContainer>
      <ProductHeading data-aos="fade-up" data-aos-easing="ease-in-out">
        {heading}
      </ProductHeading>
      <ProductWrapper>{getTrip(data)}</ProductWrapper>
    </ProductContainer>
  )
}

export default Trips

const ProductContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-color: #fff;
  color: #fff;
`
const ProductHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 18px;
  justify-content: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const ProductImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.02, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const ProductTitle = styled.div`
  font-weight: 400px;
  font-size: 1rem;
  margin-left: 0.5rem;
`
