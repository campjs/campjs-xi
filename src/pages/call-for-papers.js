import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from 'component/button';
import React from 'react';
import { Footer, Header } from 'component/navigation';
import { Block, Section } from 'component/section';
import {
  BodyText,
  FeatureText,
  HeadingText,
  MetaText,
  OrderList,
  SubHeadingText,
} from 'component/text';
import { Stylings } from 'component/providers';
import SEO from 'component/seo';

const CallForPapersPage = () => {
  return (
    <Stylings>
      <SEO title="Call for Papers - First round closes midnight of July 22nd!" />
      <Section isGrid bg="yellow100" renderPreblock={() => <Header />}>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 1]}>
          <FeatureText color="orange400">
            Call for
            <br />
            papers
          </FeatureText>
          <BodyText>
            Submissions for the first CFP close on midnight of July 22nd! (you
            can still run an activity)
          </BodyText>
          <BodyText>
            We organise as much of CampJS in the open as possible with Github
            issues.
          </BodyText>
          {/*<BodyText>*/}
          {/*  Access Slack chat on WeAllJS using /join-private #campjs*/}
          {/*</BodyText>*/}
        </Block>
        <Block mt={[400, 400, 500, 500]} w={[8, 6, 4, 4]} c={[3, 4, 7, 5]}>
          <PrimaryButton
            width="100%"
            title="Google Form: CampJS X Call For Papers"
            href="https://docs.google.com/forms/d/e/1FAIpQLSed626uXBFYK9paH6vkZSh6GyDmAVauxgWcBDIYKkf24hD_wA/viewform"
          >
            Submit a talk or workshop
          </PrimaryButton>
        </Block>
      </Section>

      <Section isGrid bg="gray400">
        <Block w={[12, 8, 5, 5]} c={[1, 3, 1, 1]}>
          <HeadingText color="orange100">Talks</HeadingText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 1, 1]}>
          <BodyText color="gray100">
            Out in the wilderness, CampJS is a laid back atmosphere perfect for
            first time speakers! We aim for a diverse and thoughtful schedule so
            don’t be shy.
          </BodyText>
          <BodyText color="gray100">
            We’re very keen to help speakers out as part of this process. If you
            want feedback on your submission, please let us know and we will get
            back to you with any critique and feedback.
          </BodyText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 5, 5]}>
          <OrderList color="gray100" counterColor="gray200">
            {[
              "Submit by the round's due date",
              'Submissions are anonymised',
              <>
                Talks are reviewed, shortlisted, and voted on by our organisers
                based on the value added to the community,
                <br />
                <MetaText color="gray200">
                  *relevance, clarity, originality, whimsy
                </MetaText>
              </>,
              'Submissions are de-anonymised and the final schedule is created',
              'Speakers are notified (regardless of outcome)',
            ]}
          </OrderList>
        </Block>

        <Block mt="600" w={[12, 8, 5, 5]} c={[1, 3, 5, 5]}>
          <HeadingText color="orange100">Activities</HeadingText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 5, 5]}>
          <BodyText color="gray100">
            We’re always looking for people to run activities on the side. If
            you have a hobby to bring to camp–think crafts, drone flying,
            knitting, music–let us know.
          </BodyText>
          <BodyText color="gray100">
            Workshops are intended to be a bit of fun, so you’ll still need to
            buy a ticket and get yourself to camp. If there are resources or
            materials required we may be able to help cover costs on a
            case-by-case basis.
          </BodyText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 9, 9]}>
          <OrderList color="gray100" counterColor="gray200">
            {[
              'Create an issue in Github letting us know what your activity is and how much time should be set aside for it',
              'Include details about what your activity will be like, and what campers need to bring to take part',
            ]}
          </OrderList>
        </Block>

        <Block mt="600" w={[12, 8, 12, 12]} c={[1, 3, 1, 1]}>
          <SubHeadingText color="orange100">Important info</SubHeadingText>
        </Block>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 1, 1]}>
          <BodyText color="gray100">
            By applying to participate you agree to follow the camp Code of
            Conduct. Please ensure you understand this before submitting your
            proposal.
          </BodyText>
          <BodyText color="gray100">
            We are committed to providing a harassment-free, professional and
            welcoming environment for all attendees.
          </BodyText>
          <BodyText color="gray100">
            Speakers should pay particular attention to and avoid using visuals,
            audio or language that may potentially be considered offensive or
            harmful.
          </BodyText>
          <BodyText color="gray100" mb="100">
            Check out the talks from some of our past events or, for more info,
            you can{' '}
            <a className="anchor" href="mailto:organisers-team@campjs.com">
              contact
            </a>{' '}
            one of our organisers or tweet us at{' '}
            <a className="anchor" href="https://twitter.com/campjs">
              @campjs
            </a>
            .
          </BodyText>
        </Block>
        <Block mt={[500, 500, 100, 100]} w={[8, 6, 4, 4]} c={[3, 4, 9, 9]}>
          <SecondaryButton
            width="100%"
            title="Google Form: CampJS X Call For Papers"
            href="https://docs.google.com/forms/d/e/1FAIpQLSed626uXBFYK9paH6vkZSh6GyDmAVauxgWcBDIYKkf24hD_wA/viewform"
          >
            Submit a talk or workshop
          </SecondaryButton>
        </Block>
      </Section>

      <Section isGrid bg="orange100">
        <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
          <FeatureText as="h4" color="pink400">
            Other
            <br />
            talents?
          </FeatureText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 8, 7]}>
          <BodyText color="pink300">
            There is always extra help to be lent on the days for random tasks
            and fun corralling.
          </BodyText>
          <BodyText color="pink300" mb="100">
            If you want to volunteer but don’t know where to start,{' '}
            <a className="anchor" href="mailto:organisers-team@campjs.com">
              get in touch
            </a>{' '}
            with an organiser. Or, check out our{' '}
            <a
              className="anchor"
              href="https://github.com/campjs/campjs-x/issues"
            >
              Github
            </a>
            , where we organise as much of the Camp in the open as possible.
          </BodyText>
        </Block>
      </Section>

      <Footer isAlt={false} />
    </Stylings>
  );
};

export default CallForPapersPage;
