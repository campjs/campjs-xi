import * as React from "react"
import Layout from "../components/layout"
import Heading from "../components/heading"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const paragraphStyles = {
  marginBottom: 48,
}


const Page = ({ location }) => {
  return (
    <Layout location={location}>
      <Heading>
        🏕 About CampJS
      </Heading>
      <p style={paragraphStyles}>
        CampJS isn’t a regular conference. It’s time and space to learn new things, relax and really connect. Whether you’re a Javascript veteran, total newbie, into art, music or hardware, there’s something for everyone.
      </p>
      <p style={paragraphStyles}>
        We schedule a unique blend of expert-led content and self-directed learning and encourage attendees to run other activities like bushwalking, drone flying or knitting.
      </p>
      <p style={paragraphStyles}>
        To get a vibe for the event, check out the videos from previous camps or our Twitter page.
      </p>
      <img src={'/tent.svg'} alt="CampJS Tent Logo" />
    </Layout>
  )
}

export default Page

