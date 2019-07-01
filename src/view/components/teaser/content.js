/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Box, Flex, Button, Text, Link as RebassLink } from '@rebass/emotion';
import { fontSize, fontFamily, padding, margin, flex } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import Title from '../title';
import Background from './background';

const Link = styled(RebassLink)`
  color: ${themeGet('colors.white')};
  text-decoration: underline;
  ${fontSize};
  ${fontFamily};
`;

const Input = styled.input`
  appearance: none;
  border: none;
  background: hsla(226, 31%, 71%, 0.4);
  color: white;
  padding: ${themeGet('spacing.0')};
  margin: 0;
  border-top: solid 2px transparent;
  border-bottom: solid 2px white;
  font-family: ${themeGet('fonts.sans')};
  font-size: ${themeGet('fontSizes.3')};
  &::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }
  ${flex}
  ${padding}
  ${margin}
`;

const TeaserContent = () => (
  <Flex
    flexDirection={['column', 'colmn', 'row']}
    padding={[4, 4, 5]}
    css={css`
      position: relative;
      min-height: 100vh;
      overflow: hidden;
    `}
  >
    <Background />

    <Flex
      flex={['initial', 'initial', '1 0 auto']}
      flexDirection="column"
      minWidth={508}
      mb={[5, null, null]}
      css={css`
        position: relative;
      `}
    >
      <Box>
        <Title />
      </Box>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        mb={[5, 5, 6]}
        order={-1}
      >
        <Text
          mb={1}
          fontFamily="mono"
          fontWeight={400}
          color="white"
          fontSize={3}
        >
          31 Aug - 2 Sep
        </Text>

        <Text
          mb={4}
          fontFamily="mono"
          fontWeight={400}
          color="white"
          fontSize={3}
        >
          Broken Bay, NSW
        </Text>

        <Button
          as="a"
          title="Visit the ticket page for CampJS X"
          // TITO LINK HERE
          href="https://ti.to/campjs/campjs-x"
          variant="primary"
          color="white"
          bg="transparent"
          borderColor="white"
          borderWidth="2px"
          px={[3, 4, 4]}
          py={[2, 2, 2]}
        >
          <Text fontFamily="mono" fontWeight="700" fontSize={3}>
            Buy your ticket >
          </Text>
        </Button>
      </Flex>
    </Flex>

    <Flex
      flex={1}
      flexDirection="column"
      justifyContent={['space-between', 'space-between', 'flex-end']}
      alignItems={['flex-start', 'flex-start', 'flex-end']}
      css={css`
        position: relative;
      `}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box mb={4}>
          <Link
            title="Google Form: CampJS X Call For Papers"
            fontFamily="mono"
            fontSize={3}
            href="https://docs.google.com/forms/d/e/1FAIpQLSed626uXBFYK9paH6vkZSh6GyDmAVauxgWcBDIYKkf24hD_wA/viewform"
          >
            Submit a talk or workshop >
          </Link>
        </Box>
        <form
          action="https://campjs.us17.list-manage.com/subscribe/post?u=9e86f175da4d21a075d7c3e68&amp;id=f5b9c96d69"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          novalidate
        >
          <Flex
            alignItems={['flex-start']}
            justifyContent="flex-start"
            flexWrap={['wrap', 'nowrap', 'nowrap']}
            mb={4}
          >
            <Input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="campjsfan@email.com"
              title="Your email for the CampJS X mailing list"
              required
              fontSize={3}
              px={[3, 4, 4]}
              py={[2, 2, 2]}
              flex={['1', 0, 0]}
            />
            {/* form bot protection */}
            <div
              css={css`
                position: absolute;
                left: -5000px;
              `}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_9e86f175da4d21a075d7c3e68_f5b9c96d69"
                tabindex="-1"
              />
            </div>
            <Button
              role="submit"
              variant="primary"
              color="white"
              bg="transparent"
              borderColor="white"
              borderWidth="2px"
              px={[3, 4, 4]}
              py={[2, 2, 2]}
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              css={css`
                cursor: pointer;
              `}
              title="Join the CampJS X mailing list"
              flex={['1', 0, 0]}
            >
              <Text fontFamily="mono" fontWeight="700" fontSize={3}>
                Submit
              </Text>
            </Button>
          </Flex>
        </form>
      </Flex>
      <Box alignSelf="flex-end">
        <Text fontFamily="sans" fontWeight={400} color="white" fontSize={2}>
          <Link href="https://ix.campjs.org/code-of-conduct/" fontFamily="sans">
            Code of Conduct
          </Link>{' '}
          • Organised by Tech Etcetra (Non-Profit)
        </Text>
      </Box>
    </Flex>
  </Flex>
);

export default TeaserContent;
