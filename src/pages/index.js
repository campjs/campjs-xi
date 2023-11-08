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
        The 2023 camp was held at Koonjewarre (in Springbrook), on the Gold Coast Hinterland. The official camp schedule includes talks and workshops, but 
        attendees also run other activities like bushwalking, drone flying, and even knitting.
      </p>
      <Heading>
        <code style={codeStyles}><a href="https://campjs.org/slack" rel="noopener noreferrer" target="_blank">Join our slack</a> to be the first to know
          about the next camp (Sydney, some time in April 2024) to stay up to date & connect with our loving community.</code>
      </Heading>
            
      <Heading>
        <code style={codeStyles}><a href="https://youtube.com/@CampJS" rel="noopener noreferrer" target="_blank">Subscribe to our YouTube channel</a> and you'll
            get to see the talks as they are released over the next few months.</code>
      </Heading>
          
      {/*
      <Heading>
        <code style={codeStyles}>Check out the <a href="https://cfp.campjs.org/campjs-xi/schedule/" rel="noopener noreferrer" target="_blank">Schedule</a>.</code>
      </Heading>
      <p style={paragraphStyles}>
        The schedule is yet to be published however if you'd like to get an idea on what talks and workshops are usually run, check out the 
        <a href="https://x.campjs.org/schedule" rel="noopener noreferrer" target="_blank">schedule from CampJS X</a>.
      </p>  
      <Heading>
        <code style={codeStyles}><a href="https://ti.to/campjs/campjs-xi" rel="noopener noreferrer" target="_blank">Tickets</a> available now.</code>
      </Heading>
      */}
      <iframe width="840" height="472" src="https://www.youtube.com/embed/G1ObNPCYkOg?si=avJOp8qrWfwlURG4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}

export default IndexPage

