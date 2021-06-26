import React from "react"
import Footer from "../components/Footer"
import { Testimonials } from "../components/Testimonial"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CareersPage = () => {
  return (
    <Layout bg="true">
      <Seo title="Testimonial" />
      <Testimonials />
      <Footer />
    </Layout>
  )
}

export default CareersPage
