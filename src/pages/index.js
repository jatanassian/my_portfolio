import React, { Fragment } from "react"

import Name from "../components/name"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Fragment>
    <SEO title="Home" />
    <Name/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Fragment>
)

export default IndexPage
