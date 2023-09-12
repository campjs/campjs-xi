import * as React from "react"
import Layout from "../components/layout"
import Heading from "../components/heading"

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
      <iframe width="840" height="472" src="https://www.youtube.com/embed/G1ObNPCYkOg?si=avJOp8qrWfwlURG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}

export default Page

