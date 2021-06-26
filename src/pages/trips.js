import React from "react"
import Footer from "../components/Footer"
import Trips from "../components/Trips"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TripPage = () => {
  return (
    <Layout bg="true">
      <Seo title="Trips" />
      <Trips heading="My Favourite Destinations" />
      <Footer />
    </Layout>
  )
}

export default TripPage
