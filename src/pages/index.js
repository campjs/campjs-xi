import * as React from "react"
import Layout from "../components/layout"
import Heading from "../components/heading"


const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Heading>
        🏕 CampJS XI
        <br />
        <span style={headingAccentStyles}>3 night javascript code retreat</span>
      </Heading>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Fri 3rd - Mon 6th November 2023</code>
      </p>
      <p style={paragraphStyles}>
        <code style={codeStyles}>Koonjewarre, Springbrook, QLD, Australia</code>
      </p>
      <p style={paragraphStyles}>
        <a href="https://ti.to/campjs/campjs-xi" rel="noopener noreferrer" target="_blank">Early bird tickets</a> available now.
      </p>
      <img src={'/tent.svg'} alt="CampJS Tent Logo" />
    </Layout>
  )
}

export default IndexPage

