import * as React from "react"
import "aos"
import About from "../components/About"
import Email from "../components/Email"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import { Testimonials } from "../components/Testimonial"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Trips heading="My Favourite Destinations" />
    <Testimonials />
    <Stats />
    <Email />
    <Footer />
  </Layout>
)

export default IndexPage
