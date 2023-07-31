import * as React from "react"
import Layout from "../components/layout"
import Heading from "../components/heading"

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  borderRadius: 4,
}

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Heading>
        CampJS is a 3-night code retreat for anyone who is interested in web technology.
      </Heading>
      <p style={paragraphStyles}>
        The 2023 camp will be held at Koonjewarre (in Springbrook), on the Gold Coast Hinterland. The official camp schedule includes talks and workshops, but attendees also run other activities like bushwalking, drone flying, and even knitting.
      </p>
      <p style={paragraphStyles}>
        The schedule is yet to be published however if you'd like to get an idea on what talks and workshops are usually run, check out the <a href="https://x.campjs.org/schedule" rel="noopener noreferrer" target="_blank">schedule from CampJS X</a>.
      </p>
      <Heading>
        <code style={codeStyles}><a href="https://ti.to/campjs/campjs-xi" rel="noopener noreferrer" target="_blank">Early bird tickets</a> available now.</code>
      </Heading>
      <Heading>
        <code style={codeStyles}><a href="https://cfp.campjs.org/campjs-xi/cfp" rel="noopener noreferrer" target="_blank">Call for Proposals</a> now open.</code>
      </Heading>
    </Layout>
  )
}

export default IndexPage

