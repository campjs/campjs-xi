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
        🏕 Code of Conduct
      </Heading>
      <p style={paragraphStyles}>
        Harassment includes offensive verbal comments related to gender, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.
      </p>
      <p style={paragraphStyles}>
        Participants asked to stop any harassing behaviour are expected to comply immediately.
      </p>
      <p style={paragraphStyles}>
        Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Sponsor attendees should not use sexualised clothing / uniforms / costumes, or otherwise create a sexualised environment.
      </p>
      <p style={paragraphStyles}>
        If a participant engages in harassing behaviour, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
      </p>
      <p style={paragraphStyles}>
        If you are removed from a CampJS event:
        <ul>
          <li>You will not be welcome at any future events.</li>
          <li>You will not be entitled to a refund.</li>
          <li>Your behaviour may be communicated to other event organisers.</li>
        </ul>
        We have been very proud of the CampJS community for being mostly mature and well-behaved at our events thus far, and hopefully we will never have to enact any disciplinary measures. It is the purpose of this code of conduct to ensure everyone knows that we do not tolerate harassment or otherwise offensive behaviour and we want to know immediately if it’s happening at one of our events.
      </p>
    </Layout>
  )
}

export default Page

