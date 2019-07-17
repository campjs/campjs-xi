import React from 'react';
import { Footer, Header } from 'component/navigation';
import { Block, Section } from 'component/section';
import {
  BodyText,
  FeatureText,
  HeadingText,
  UnorderList,
} from 'component/text';
import { Stylings } from 'component/providers';
import SEO from 'component/seo';

const CodeOfConductPage = () => {
  return (
    <Stylings>
      <SEO title="Code of Conduct" />
      <Section isGrid isAlt renderPreblock={() => <Header />}>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 3]}>
          <FeatureText mb="600" tin="up">
            Code of
            <br />
            Conduct
          </FeatureText>
          <BodyText>
            Harassment includes offensive verbal comments related to gender,
            sexual orientation, disability, physical appearance, body size,
            race, religion, sexual images in public spaces, deliberate
            intimidation, stalking, following, harassing photography or
            recording, sustained disruption of talks or other events,
            inappropriate physical contact, and unwelcome sexual attention.
          </BodyText>
          <BodyText>
            Participants asked to stop any harassing behaviour are expected to
            comply immediately.
          </BodyText>
          <BodyText>
            Sponsors are also subject to the anti-harassment policy. In
            particular, sponsors should not use sexualised images, activities,
            or other material. Sponsor attendees should not use sexualised
            clothing / uniforms / costumes, or otherwise create a sexualised
            environment.
          </BodyText>
          <BodyText>
            If a participant engages in harassing behaviour, the conference
            organisers may take any action they deem appropriate, including
            warning the offender or expulsion from the conference with no
            refund.
          </BodyText>
          <BodyText>If you are removed from a CampJS event:</BodyText>
          <UnorderList>
            {[
              'You will not be welcome at any future events.',
              'You will not be entitled to a refund.',
              'Your behaviour may be communicated to other event organisers.',
            ]}
          </UnorderList>
          <BodyText>
            We have been very proud of the CampJS community for being mostly
            mature and well-behaved at our events thus far, and hopefully we
            will never have to enact any disciplinary measures. It is the
            purpose of this code of conduct to ensure everyone knows that we do
            not tolerate harassment or otherwise offensive behaviour and we want
            to know immediately if it’s happening at one of our events.
          </BodyText>
        </Block>
      </Section>

      <Section isGrid>
        <Block w={[12, 8, 5, 4]} c={[1, 3, 6, 6]}>
          <HeadingText>Who to contact</HeadingText>
        </Block>
        <Block w={[12, 8, 5, 4]} c={[1, 3, 6, 6]}>
          <BodyText>
            The CampJS team is here to help attendees feel safe for the duration
            of the camp.
          </BodyText>
          <BodyText>
            If you need to report an issue, you can approach any of the CampJS
            organisers during the event, get in touch via{' '}
            <a
              className="anchor"
              href="mailto:organisers-team@campjs.com"
              title="Organiser Team Email"
            >
              email
            </a>
            .
          </BodyText>
          <BodyText>
            We take every issue seriously and aim to resolve issues as soon as
            possible.
          </BodyText>
        </Block>
      </Section>

      <Footer />
    </Stylings>
  );
};

export default CodeOfConductPage;
