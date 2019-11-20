import React, { Fragment } from "react"

import Name from "../components/name"
import About from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Name/>
    <About />
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Fragment>
)

export default IndexPage
