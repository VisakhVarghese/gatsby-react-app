import React from "react"
import About from "../components/About"
import Footer from "../components/Footer"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout bg="true">
      <Seo title="About" />
      <About />
      <Footer />
    </Layout>
  )
}

export default AboutPage
