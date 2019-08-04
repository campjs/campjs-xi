/* @jsx jsx */
import { MidBG, TopBG } from 'component/backgrounds/frontpage';
import { SpeakerImage, SponsorImage } from 'component/image';
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Flex, Box } from '@rebass/emotion';
import themeGet from '@styled-system/theme-get';
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
  SpeakerHeadingText,
  ButtonText,
} from 'component/text';
import { graphql, useStaticQuery } from 'gatsby';

import speakers from 'asset/data/speakers.json';

const sTextShadow = css`
  text-shadow: 0 4px 2px hsla(0, 0%, 0%, 0.1);
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
        href="https://ti.to/campjs/campjs-x"
      >
        Buy tickets
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
        Take the to main hall to hack on self-directed or collaborative
        projects.
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

const GetInvolvedSection = props => (
  <Section isGrid bg="transparent" {...props}>
    <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 3]} mb="600">
      <SubFeatureText color="white" css={sTextShadow}>
        Get involved
      </SubFeatureText>
      <BodyText mb="100" color="white" css={sTextShadow}>
        Issue tracker: We organise as much of CampJS in the open as possible on{' '}
        <a className="anchor" href="https://github.com/campjs/campjs-x/issues">
          Github issues
        </a>
        .
      </BodyText>
    </Block>
    <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 3]} mb="100">
      <SubFeatureText color="white" css={sTextShadow}>
        Volunteer
      </SubFeatureText>
      <BodyText mb="100" color="white" css={sTextShadow}>
        We’re always looking for people to help out, if you can’ find the right
        jobs for you, just fill out this form and we’ll get in touch.
      </BodyText>
    </Block>
  </Section>
);

const DiversitySection = props => (
  <Section isGrid bg="transparent" {...props}>
    <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
      <HeadingText color="white" css={sTextShadow}>
        Diversity & Inclusivity
      </HeadingText>
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

const speakerHeadshots = () => (
  useStaticQuery(
    graphql`
      query {
        developersteve: file(relativePath: { eq: "speakers/developersteve.jpg" }) {
          publicURL
        }
        calvindass: file(relativePath: { eq: "speakers/calvindass.jpg" }) {
          publicURL
        }
        devxcong: file(relativePath: { eq: "speakers/devxcong.jpg" }) {
          publicURL
        }
        devdevcharlie: file(relativePath: { eq: "speakers/devdevcharlie.jpg" }) {
          publicURL
        }
        julian: file(relativePath: { eq: "speakers/julian.jpg" }) {
          publicURL
        }
        ingapflaumer: file(relativePath: { eq: "speakers/ingapflaumer.jpg" }) {
          publicURL
        }
        dalanmiller: file(relativePath: { eq: "speakers/dalanmiller.png" }) {
          publicURL
        }
        bendechrai: file(relativePath: { eq: "speakers/bendechrai.png" }) {
          publicURL
        }
        damncabbage: file(relativePath: { eq: "speakers/damncabbage.jpg" }) {
          publicURL
        }
        butenkome: file(relativePath: { eq: "speakers/butenkome.jpg" }) {
          publicURL
        }
      }
    `
  )
);

const SpeakersSection = props => {
  const myFace = speakerHeadshots();
  return <Section isGrid bg="transparent" {...props}>
    {
      speakers.filter(speaker => !speaker.ignore).map((speaker, idx) => {
        if (idx%2) {
          return <SpeakerLeft key={idx} image={myFace[speaker.headshot].publicURL} {...speaker} />
        } else {
          return <SpeakerRight key={idx} image={myFace[speaker.headshot].publicURL} {...speaker} />
        }
      })
    }
  </Section>
};

const SpeakerLeft = props => (
  <>
   <Block w={[6, 4, 4, 4]} c={[1, 1, 1, 1]} mb={['700', '700', '600']}>
      <SpeakerImage
        src={props.image}
        alt={props.name}
        width="300px"
        height="300px"
      />
    </Block>
    <Block w={[5, 4, 3, 3]} c={[8, 5, 5, 5]} mb={['700', '700', '600']}>
      <SpeakerHeadingText color="white">{props.name}</SpeakerHeadingText>
      <BodyText color="white">{props.title}</BodyText>
    </Block>
  </>
)

const SpeakerRight = props => (
  <>
  <Block w={[5, 4, 3, 3]} c={[1, 5, 6, 6]} mb={['700', null, '600']}>
      <SpeakerHeadingText
        color="white"
        css={[
          css`
            text-align: right;
          `,
          sTextShadow,
        ]}
      >
        {props.name}
      </SpeakerHeadingText>
      <BodyText
        color="white"
        css={css`
          text-align: right;
        `}
      >
        {props.title}
      </BodyText>
  </Block>
  <Block w={[6, 4, 4, 4]} c={[7, 9, 9, 9]} mb={['700', '700', '600']}>
    <SpeakerImage
      src={props.image}
      alt={props.name}
      width="300px"
      height="300px"
    />
  </Block>
  </>
);

export default IndexPage;
