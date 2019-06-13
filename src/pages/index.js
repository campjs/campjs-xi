import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to CampJS X!</h1>
    <dl>
      <dt>Venue</dt>
      <dd>Broken Bay, NSW</dd>

      <dt>Dates</dt>
      <dd>30th August 2019 - 2nd September 2019</dd>

      <dt>CFPs</dt>
      <dd>Coming Soon!</dd>

      <dt>Sponsorships</dt>
      <dd>Coming Soon!</dd>

      <dt>Tickets</dt>
      <dd>Coming Soon!</dd>

      <dt>Contact</dt>
      <dd><a href="mailto:kartik@campjs.com">kartik@campjs.com</a>, <a href="mailto:garrows@campjs.com">garrows@campjs.com</a></dd>

      <dt>Twitter</dt>
      <dd><a href="https://twitter.com/campjs">@campjs</a></dd>
    </dl>
  </Layout>
)

export default IndexPage
