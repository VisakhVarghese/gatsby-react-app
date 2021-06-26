import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinkWrp>
        <FooterDesc>
          <h1>AlphaExplore</h1>
          <p>We are strive to creare best experiences for our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about"> Contact</FooterLink>
          <FooterLink to="/suppor"> Support</FooterLink>
          <FooterLink to="/destinations"> Destinations</FooterLink>
          <FooterLink to="/sponserships"> Sponserships</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrp>
      <FooterLinkWrp>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about"> Contact</FooterLink>
          <FooterLink to="/suppor"> Support</FooterLink>
          <FooterLink to="/destinations"> Destinations</FooterLink>
          <FooterLink to="/sponserships"> Sponserships</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about"> Contact</FooterLink>
          <FooterLink to="/suppor"> Support</FooterLink>
          <FooterLink to="/destinations"> Destinations</FooterLink>
          <FooterLink to="/sponserships"> Sponserships</FooterLink>
        </FooterLinkItems>
      </FooterLinkWrp>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
const FooterDesc = styled.p`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a26;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkWrp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
