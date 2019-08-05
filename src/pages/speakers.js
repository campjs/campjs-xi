/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import SEO from 'component/seo';
import { Stylings } from 'component/providers';
import { Footer, Header } from 'component/navigation';
import { Grid, Block, Section } from 'component/section';
import {
  FeatureText,
  SubFeatureText,
  HeadingText,
  BodyText,
  Anchor,
} from 'component/text';
import {
  SpeakerTalksBlockLeft,
  SpeakerTalksBlockRight,
} from 'component/speakers';

import speakers from 'asset/data/speakers.json';

const SpeakersPage = () => {
  return (
    <Stylings>
      <SEO title="Schedule" />
      <Section isGrid isAlt renderPreblock={() => <Header />}>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 3]}>
          <FeatureText mb="600" tin="up" color="pink200">
            Speakers
          </FeatureText>
        </Block>
      </Section>

      <Section bg="pink200">
        <Grid
          css={css`
            grid-auto-flow: column;
            & > *:last-child {
              margin-bottom: 0;
            }
          `}
        >
          <Block w={12} c={1} mb={['700', '700', '700']}>
            <SubFeatureText color="yellow100">Talks</SubFeatureText>
          </Block>
          {speakers
            .filter(speaker => speaker.type === 'talk')
            .map((speaker, idx) => {
              if (idx % 2) {
                return (
                  <SpeakerTalksBlockLeft
                    key={idx}
                    image={speaker.headshot}
                    headingColor="yellow100"
                    textColor="gray100"
                    metaColor="gray200"
                    {...speaker}
                  />
                );
              } else {
                return (
                  <SpeakerTalksBlockRight
                    key={idx}
                    image={speaker.headshot}
                    headingColor="yellow100"
                    textColor="gray100"
                    metaColor="gray200"
                    {...speaker}
                  />
                );
              }
            })}
        </Grid>
      </Section>

      <Section bg="gray100">
        <Grid
          css={css`
            grid-auto-flow: column;
            & > *:last-child {
              margin-bottom: 0;
            }
          `}
        >
          <Block w={12} c={1} mb={['700', '700', '700']}>
            <SubFeatureText color="gray400">Workshops</SubFeatureText>
          </Block>

          {speakers
            .filter(speaker => speaker.type === 'workshop')
            .map((speaker, idx) => {
              if (idx % 2) {
                return (
                  <SpeakerTalksBlockLeft
                    key={idx}
                    image={speaker.headshot}
                    headingColor="black"
                    textColor="gray400"
                    metaColor="gray300"
                    {...speaker}
                  />
                );
              } else {
                return (
                  <SpeakerTalksBlockRight
                    key={idx}
                    image={speaker.headshot}
                    headingColor="black"
                    textColor="gray400"
                    metaColor="gray300"
                    {...speaker}
                  />
                );
              }
            })}
        </Grid>
      </Section>

      <Section isGrid bg="orange400">
        <Block w={[12, 12, 6]} c={[1, 1, 4]}>
          <HeadingText color="yellow100">More Talks & Workshops</HeadingText>
          <BodyText color="yellow100">
            We've finished our first round of submissions, and we'll soon start
            our second, so expect more talks and workshops soon!
          </BodyText>
          <BodyText color="yellow100">
            Take a look at our{' '}
            <Anchor to="/call-for-papers">Call For Speakers</Anchor> for more
            information.
          </BodyText>
        </Block>
      </Section>

      <Footer />
    </Stylings>
  );
};

export default SpeakersPage;
