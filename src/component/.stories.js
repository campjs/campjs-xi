import { Header } from 'component/navigation';
import React from 'react';
import { Flex, Box } from '@rebass/emotion';
import { addDecorator, storiesOf } from '@storybook/react';
import { css } from 'emotion';

import theme from 'util/theme';
import { Theme, GlobalStyles } from 'component/providers';
import LogoText from 'component/logo-text';
import LogoTent from 'component/logo-tent';
import {
  FeatureText,
  HeadingText,
  SubHeadingText,
  BodyText,
  OrderList,
  UnorderList,
  Code,
} from 'component/text';
import { Section, Grid, Block } from 'component/section';

addDecorator(storyFn => (
  <Theme>
    <GlobalStyles>{storyFn()}</GlobalStyles>
  </Theme>
));

const styles = {
  colorGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
    grid-gap: 2rem;
  `,
  colorBox: css`
    position: relative;
    width: 100%;
    height: 12rem;
    box-shadow: 0 4px 12px hsla(0, 0%, 0%, 0.15);
    border-radius: 20px;
  `,
  colorText: css`
    font-family: monospace;
    font-size: small;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    display: inline-block;
    color: white;
    background: hsla(0, 0%, 0%, 0.2);
    border-radius: 3px;
    padding: 2px 3px;
  `,
};

storiesOf('Brand', module)
  .add('Color', () => (
    <Box px={'500'} py={'500'} className={styles.colorGrid}>
      {Object.keys(theme.colors).map(name => (
        <Box
          title={`Color: ${name}`}
          bg={theme.colors[name]}
          className={styles.colorBox}
        >
          <span className={styles.colorText}>{name}</span>
        </Box>
      ))}
    </Box>
  ))
  .add('Logo', () => (
    <Flex flexDirection="column" px={4} py={4}>
      <FeatureText>Logos:</FeatureText>
      {/* Tent */}
      <Flex bg="white" p="5vw" justifyContent="stretch">
        <Box flex="1">
          <LogoTent />
        </Box>
      </Flex>
      <Flex flexDirection="row" flexWrap="wrap">
        <Flex flex="1" bg="white" p="5vw" justifyContent="stretch">
          <Box flex="1">
            <LogoTent hasText textColor="black" />
          </Box>
        </Flex>
        <Flex flex="1" bg="black" p="5vw" justifyContent="stretch">
          <Box flex="1">
            <LogoTent hasText textColor="white" />
          </Box>
        </Flex>
      </Flex>

      {/* Text Only */}
      <Flex flexDirection="row" flexWrap="wrap">
        <Flex flex="1" bg="black" p="5vw" justifyContent="stretch">
          <Box flex="1">
            <LogoText />
          </Box>
        </Flex>
        <Flex flex="1" bg="white" p="5vw" justifyContent="stretch">
          <Box flex="1">
            <LogoText color="black" />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  ))
  .add('Typography', () => (
    <Flex flexDirection="column" px={4} py={4}>
      <FeatureText>FeatureText</FeatureText>
      <HeadingText>HeadingText</HeadingText>
      <SubHeadingText>SubHeadingText</SubHeadingText>
      <BodyText>BodyText</BodyText>

      <br />

      <OrderList>
        {['This', 'This is a', 'This is a short!', '...Ordered list!']}
      </OrderList>

      <br />

      <UnorderList>
        {['This', 'This is a', 'This is a short!', '...Unordered list!']}
      </UnorderList>
    </Flex>
  ));

storiesOf('Layout', module)
  .add('Page Sections', () => (
    <>
      <Section isGrid isAlt renderPreblock={() => <Header />}>
        <Block w={12}>
          <FeatureText>Welcome to Camp JS XI</FeatureText>
          <SubHeadingText>
            I'm a Section with a <Code>renderPrefix={'<Navigation />'}</Code>
          </SubHeadingText>
        </Block>
      </Section>
      <Section isGrid>
        <Block w={12}>
          <HeadingText>'Ello Camper!</HeadingText>
          <BodyText></BodyText>
        </Block>
        <Block w={12}>
          <BodyText>I'm a Section, with a single Block.</BodyText>
        </Block>
      </Section>
      <Section isGrid isAlt>
        <Block w={12}>
          <HeadingText>Stay cozy.</HeadingText>
        </Block>
        <Block w={6}>
          <BodyText>I'm a Section (alt), first part.</BodyText>
        </Block>
        <Block w={6}>
          <BodyText>I'm a Section (alt), second part.</BodyText>
          <UnorderList>
            {['This', 'This is a', 'This is a short!', '...Unordered list!']}
          </UnorderList>
        </Block>
      </Section>
    </>
  ))
  .add('Content Grid', () => {
    return (
      <Section>
        <Grid rowGap="space.300">
          <Block w="12">
            <HeadingText>Responsive Grid</HeadingText>
            <BodyText>
              <strong>w:</strong> <Code>3</Code>, <Code>6</Code>, <Code>6</Code>
            </BodyText>
          </Block>
          <Block w="3" bg="gray200" pb="500">
            {' '}
          </Block>
          <Block w="6" bg="gray200" pb="500">
            {' '}
          </Block>
          <Block w="3" bg="gray200" pb="500">
            {' '}
          </Block>

          <Block w="12">
            <BodyText>
              <strong>w:</strong> <Code>[12,6,4]</Code>, <Code>[12,6,4]</Code>,{' '}
              <Code>[12,6,4]</Code>
            </BodyText>
          </Block>
          <Block w={[12, 6, 4]} bg="orange200" pb="500">
            {' '}
          </Block>
          <Block w={[12, 6, 4]} bg="orange200" pb="500">
            {' '}
          </Block>
          <Block w={[12, 6, 4]} bg="orange200" pb="500">
            {' '}
          </Block>

          <Block w="12">
            <BodyText>
              <strong>w:</strong> <Code>[12,6,null,4]</Code>,{' '}
              <Code>[12,6,null,4]</Code>, <Code>[12,6,null,4]</Code>
            </BodyText>
          </Block>
          <Block w={[12, 6, null, 4]} bg="orange200" pb="500">
            {' '}
          </Block>
          <Block w={[12, 6, null, 4]} bg="orange200" pb="500">
            {' '}
          </Block>
          <Block w={[12, 6, null, 4]} bg="orange200" pb="500">
            {' '}
          </Block>

          <Block w="12">
            <BodyText>
              <strong>w:</strong> <Code>3</Code>
            </BodyText>
            <BodyText>
              <strong>c:</strong> <Code>[1,6,9]</Code>
            </BodyText>
          </Block>
          <Block w={4} c={[1, 3, 7, 9]} bg="pink100" pb="500">
            {' '}
          </Block>
        </Grid>
      </Section>
    );
  });
