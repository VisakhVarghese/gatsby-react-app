import * as React from "react"

import Header from "./header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children, bg }) => {
  return (
    <>
      <GlobalStyle />
      <Header bg={bg} />
      <main>{children}</main>
    </>
  )
}

export default Layout
