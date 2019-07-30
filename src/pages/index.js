/* @jsx jsx */
import { MidBG, TopBG } from 'component/backgrounds/frontpage';
import { SpeakerImage } from 'component/image';
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Flex, Box } from '@rebass/emotion';
import themeGet from '@styled-system/theme-get';
import { Stylings } from 'component/providers';
import SEO from 'component/seo';
import { Footer, Header } from 'component/navigation';
import { Block, Section } from 'component/section';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from 'component/button';
import {
  BodyText,
  FeatureText,
  SubFeatureText,
  HeadingText,
  Anchor,
  OrderList,
  SubHeadingText,
  SpeakerHeadingText,
  ButtonText,
} from 'component/text';

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

const SpeakersSection = props => (
  <Section isGrid bg="transparent" {...props}>
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
        Speaker Name #1
      </SpeakerHeadingText>
      <BodyText
        color="white"
        css={css`
          text-align: right;
        `}
      >
        One liner about speaker
      </BodyText>
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
        More about name >
      </ButtonText>
    </Block>
    <Block w={[6, 4, 4, 4]} c={[7, 9, 9, 9]} mb={['700', '700', '600']}>
      <SpeakerImage
        src="https://i.pravatar.cc/300?1"
        alt="Speaker #1"
        width="300px"
        height="300px"
      />
    </Block>

    <Block w={[6, 4, 4, 4]} c={[1, 1, 1, 1]} mb={['700', '700', '600']}>
      <SpeakerImage
        src="https://i.pravatar.cc/300?2"
        alt="Speaker #2"
        width="300px"
        height="300px"
      />
    </Block>
    <Block w={[5, 4, 3, 3]} c={[8, 5, 5, 5]} mb={['700', '700', '600']}>
      <SpeakerHeadingText color="white">Speaker Name #2</SpeakerHeadingText>
      <BodyText color="white">One liner about speaker</BodyText>
      <ButtonText
        color="white"
        css={[
          css`
            text-decoration: underline;
          `,
          sTextShadow,
        ]}
      >
        More about name >
      </ButtonText>
    </Block>

    <Block w={[5, 4, 3, 3]} c={[1, 5, 6, 6]}>
      <SpeakerHeadingText
        color="white"
        css={[
          css`
            text-align: right;
          `,
          sTextShadow,
        ]}
      >
        Speaker Name #3
      </SpeakerHeadingText>
      <BodyText
        color="white"
        css={[
          css`
            text-align: right;
          `,
          sTextShadow,
        ]}
      >
        One liner about speaker
      </BodyText>
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
        More about name >
      </ButtonText>
    </Block>
    <Block w={[6, 4, 4, 4]} c={[7, 9, 9, 9]} mb={['600']}>
      <SpeakerImage
        src="https://i.pravatar.cc/300?3"
        alt="Speaker #3"
        width="300px"
        height="300px"
      />
    </Block>
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
        View more speakers >
      </ButtonText>
    </Block>
  </Section>
);

const SponsorsSection = () => (
  <Section
    isGrid
    gridProps={{ rowGap: 'space.500', colGap: 'space.500' }}
    bg="white"
    className="no-sticky-footer"
  >
    <Block
      w={[12, 8, 12]}
      c={[1, 3, 1]}
      css={theme =>
        css`
          margin-bottom: -${themeGet('space.500')({ theme })};
        `
      }
    >
      <HeadingText>Thanks, sponsors!</HeadingText>
    </Block>

    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
    <Block w={[6, 4, 3, 3]}>
      <Box width="100%" style={{ height: '120px' }} bg="gray300"></Box>
    </Block>
  </Section>
);

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
        `}
      >
        <MidBG />
        <GetInvolvedSection
          css={css`
            position: relative;
          `}
        />
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
      </Box>
      <SponsorsSection />
      <Footer isAlt={false} />
    </Stylings>
  );
};

export default IndexPage;
