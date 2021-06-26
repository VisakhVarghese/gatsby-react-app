import React from "react"
import Footer from "../components/Footer"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactsPage = () => {
  return (
    <Layout bg="true">
      <Seo title="Page two" />
      <Stats />
      <Email />
      <Footer />
    </Layout>
  )
}

export default ContactsPage
