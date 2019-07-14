import { jsx } from '@emotion/core';
import { PrimaryButton } from 'component/button';
import React from 'react';
import { css } from 'emotion';
import { Box, Flex } from '@rebass/emotion';
import { Footer, Header } from 'component/navigation';
import { Block, Grid, Section } from 'component/section';
import {
  BodyText,
  FeatureText,
  HeadingText,
  MetaText,
  OrderList,
  UnorderList,
} from 'component/text';
import { Stylings } from 'component/providers';
import SEO from 'component/seo';

const styles = {};

const CallForPapersPage = () => {
  return (
    <Stylings>
      <SEO />
      <Section isGrid isAlt renderPreblock={() => <Header />}>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 1]}>
          <FeatureText>
            Call for
            <br />
            papers
          </FeatureText>
          <BodyText>
            Submissions for the first CFP close on midnight of July 22nd! (you
            can still run an activity)
          </BodyText>
          <BodyText>
            We organise as much of CampJS in the open as possible on Github
            issues.
          </BodyText>
          <BodyText>
            Access Slack chat on WeAllJS using /join-private #campjs
          </BodyText>
        </Block>
      </Section>

      <Section isGrid>
        <Block w={[12, 8, 5, 5]} c={[1, 3, 1, 1]}>
          <HeadingText>Talks</HeadingText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 1, 1]}>
          <BodyText>
            Out in the wilderness, CampJS is a laid back atmosphere prefect for
            first time speakers! We aim for a diverse and thoughtful schedule so
            don’t be shy.
          </BodyText>
          <BodyText>
            We’re very keen to help speakers out as part of this process. If you
            want feedback on your submission, please let us know and we will get
            back to you with any critique and feedback.
          </BodyText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 5, 5]}>
          <OrderList>
            {[
              "Submit by the round's due date",
              'Submissions are anonymised',
              <>
                Talks are reviewed, shortlisted, and voted on by our organisers
                based on the value added to the community,
                <br />
                <MetaText>*relevance, clarity, originality, whimsy</MetaText>
              </>,
              'Submissions are de-anonymised and the final schedule is created',
              'Speakers are notified (regardless of outcome)',
            ]}
          </OrderList>
        </Block>

        <Block mt="600" w={[12, 8, 5, 5]} c={[1, 3, 5, 5]}>
          <HeadingText>Activities</HeadingText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 5, 5]}>
          <BodyText>
            We’re always looking for people to run activities on the side. If
            you have a hobby to bring to camp–think crafts, drone flying,
            knitting, music–let us know.
          </BodyText>
          <BodyText>
            Workshops are intended to be a bit of fun, so you’ll still need to
            buy a ticket and get yourself to camp. If there are resources or
            materials required we may be able to help cover costs on a
            case-by-case basis.
          </BodyText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 9, 9]}>
          <OrderList>
            {[
              'Create an issue in Github letting us know what your activity is and how much time should be set aside for it',
              'Include details about what your activity will be like, and what campers need to bring to take part',
            ]}
          </OrderList>
        </Block>

        <Block mt="600" w={[12, 8, 12, 12]} c={[1, 3, 1, 1]}>
          <HeadingText>Activities</HeadingText>
        </Block>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 1, 1]}>
          <BodyText>
            By applying to participate you agree to follow the camp Code of
            Conduct. Please ensure you understand this before submitting your
            proposal.
          </BodyText>
          <BodyText>
            We are committed to providing a harassment-free, professional and
            welcoming environment for all attendees.
          </BodyText>
          <BodyText>
            Speakers should pay particular attention to and avoid using visuals,
            audio or language that may potentially be considered offensive or
            harmful.
          </BodyText>
          <BodyText>
            Check out the talks from some of our past events or, for more info,
            you can contact one of our organisers or tweet us at @campjs.
          </BodyText>
        </Block>
        <Block mt={[500, 500, 100, 100]} w={[8, 6, 4, 4]} c={[3, 4, 9, 9]}>
          <PrimaryButton
            width="100%"
            title="Google Form: CampJS X Call For Papers"
            href="https://docs.google.com/forms/d/e/1FAIpQLSed626uXBFYK9paH6vkZSh6GyDmAVauxgWcBDIYKkf24hD_wA/viewform"
          >
            Submit a talk or workshop
          </PrimaryButton>
        </Block>
      </Section>

      <Section isGrid isAlt>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
          <FeatureText as="h4">
            Other
            <br />
            talents?
          </FeatureText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 8, 7]}>
          <BodyText>
            If you want to volunteer but don’t know where to start, fill out
            this volunteer form. We’ll get in touch to let you know what kind of
            jobs you can do.
          </BodyText>
          <PrimaryButton mt="500">Volunteer</PrimaryButton>
        </Block>
      </Section>

      <Footer isAlt={false} />
    </Stylings>
  );
};

export default CallForPapersPage;
