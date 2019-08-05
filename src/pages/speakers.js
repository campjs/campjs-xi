/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import SEO from 'component/seo';
import { Stylings } from 'component/providers';
import { Footer, Header } from 'component/navigation';
import { Grid, Block, Section } from 'component/section';
import { FeatureText } from 'component/text';
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
          `}
        >
          {speakers.map((speaker, idx) => {
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

      <Footer />
    </Stylings>
  );
};

export default SpeakersPage;
