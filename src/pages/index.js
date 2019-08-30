/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Flex, Box } from '@rebass/emotion';
import themeGet from '@styled-system/theme-get';
import { graphql, useStaticQuery } from 'gatsby';
import { Stylings } from 'component/providers';
import SEO from 'component/seo';
import { Footer, Header } from 'component/navigation';
import { Block, Section } from 'component/section';
import { SecondaryButton } from 'component/button';
import {
  BodyText,
  FeatureText,
  SubFeatureText,
  HeadingText,
  Anchor,
  SubHeadingText,
  ButtonText,
} from 'component/text';
import { SpeakerBlockLeft, SpeakerBlockRight } from 'component/speakers';
import { MidBG, TopBG } from 'component/backgrounds/frontpage';
import { FirefliesBG } from 'component/backgrounds/fireflies';

import speakers from 'asset/data/speakers.json';

const sTextShadow = css`
  text-shadow: 0 2px 1px hsla(264, 28%, 21%, 0.3);
`;

const HeaderSection = props => (
  <Section isGrid bg="transparent" renderPreblock={() => <Header />} {...props}>
    <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 1]}>
      <FeatureText
        tin="up"
        mb="500"
        css={css`
          hyphens: initial;
        `}
      >
        Retreat to
        <br />
        code, connect
        <br />
        and learn.
      </FeatureText>
      <Flex flexWrap="wrap">
        <SubHeadingText
          tin="up"
          mr="450"
          mb="500"
          css={css`
            text-transform: uppercase;
          `}
        >
          Broken Bay, NSW
        </SubHeadingText>
        <SubHeadingText
          tin="up"
          mb="600"
          css={css`
            text-transform: uppercase;
          `}
        >
          30 Aug - 2 Sep
        </SubHeadingText>
      </Flex>
    </Block>

    <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 1]}>
      <SecondaryButton
        textShadow="initial"
        px="575"
        tin="up"
        title="Purchase the ticket page for CampJS X"
        href="#"
      >
        Sold out!
      </SecondaryButton>
    </Block>
  </Section>
);

const DetailsSection = props => (
  <Section isGrid bg="transparent" {...props}>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
      <HeadingText mb="400" color="white" css={sTextShadow}>
        Chill time
      </HeadingText>
    </Block>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]} mb="500">
      <BodyText color="white" css={sTextShadow}>
        Fly a kite, game on the grass. There’s heaps of free time to relax and
        mingle.
      </BodyText>
    </Block>

    <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
      <HeadingText mb="400" color="white" css={sTextShadow}>
        Workshops
      </HeadingText>
    </Block>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]} mb="500">
      <BodyText color="white" css={sTextShadow}>
        Art, craft, music – participate or{' '}
        <Anchor to="/call-for-papers#activities">lead a group activity</Anchor>{' '}
        to make something great.
      </BodyText>
    </Block>

    <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
      <HeadingText mb="400" color="white" css={sTextShadow}>
        Community
      </HeadingText>
    </Block>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]} mb="500">
      <BodyText color="white" css={sTextShadow}>
        Create real friendships and connections.
      </BodyText>
    </Block>

    <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
      <HeadingText mb="400" color="white" css={sTextShadow}>
        Hacking
      </HeadingText>
    </Block>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]} mb="500">
      <BodyText color="white" css={sTextShadow}>
        Take to main hall to hack on self-directed or collaborative projects.
      </BodyText>
    </Block>

    <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
      <HeadingText mb="400" color="white" css={sTextShadow}>
        Talks
      </HeadingText>
    </Block>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]} mb="100">
      <BodyText mb="100" color="white" css={sTextShadow}>
        Learn new things from experts, like coding, cool tech, robots or mindful
        communication.
      </BodyText>
    </Block>
  </Section>
);

const DiversitySection = props => (
  <Section isGrid bg="transparent" {...props}>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
      <SubFeatureText color="white" css={sTextShadow}>
        Diversity & Inclusivity
      </SubFeatureText>
    </Block>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]} mb="100">
      <BodyText mb="100" color="white" css={sTextShadow}>
        We’re committed to creating an inclusive and welcoming event for people
        from all walks of life. Read more about{' '}
        <Anchor to="/about#diversity">our initatives</Anchor> and purchase a{' '}
        <Anchor href="https://github.com/campjs/campjs-x/issues">
          diversity ticket
        </Anchor>{' '}
        if you qualify.
      </BodyText>
    </Block>
  </Section>
);

const SpeakersSection = props => {
  return (
    <Section isGrid bg="transparent" {...props}>
      {speakers
        .filter(speaker => !!speaker.featured)
        .map((speaker, idx) => {
          if (idx % 2) {
            return (
              <SpeakerBlockLeft
                key={idx}
                image={speaker.headshot}
                textStyle={sTextShadow}
                {...speaker}
              />
            );
          } else {
            return (
              <SpeakerBlockRight
                key={idx}
                image={speaker.headshot}
                textStyle={sTextShadow}
                {...speaker}
              />
            );
          }
        })}
      <Block w={[12]} c={[1]} alignItems="flex-end">
        <ButtonText
          color="white"
          css={[
            css`
              text-align: right;
              text-decoration: underline;
            `,
            sTextShadow,
          ]}
        >
          <Anchor to="/speakers">
            View all speakers (talks & workshops) >
          </Anchor>
        </ButtonText>
      </Block>
    </Section>
  );
};

const IndexPage = () => {
  return (
    <Stylings>
      <SEO />
      <Box
        bg="#adb6d5"
        css={css`
          position: relative;
        `}
      >
        <TopBG />
        <HeaderSection
          css={css`
            position: relative;
          `}
        />
        <DetailsSection
          css={css`
            position: relative;
          `}
        />
      </Box>
      <Box
        bg="#adb6d5"
        css={css`
          position: relative;
          padding-bottom: 20vw;
          overflow: hidden;
        `}
      >
        <MidBG />
        <SpeakersSection
          css={css`
            position: relative;
          `}
        />
        <DiversitySection
          css={theme => css`
            position: relative;
          `}
        />
        <FirefliesBG />
      </Box>
      <Footer isAlt={false} />
    </Stylings>
  );
};

export default IndexPage;
