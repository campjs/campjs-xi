/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Box, Flex, Button, Text } from '@rebass/emotion';
import { fontSize, fontFamily, padding, margin, flex } from 'styled-system';
import themeGet from '@styled-system/theme-get';
import useTransitionIn from 'util/use-transition-in';
import LogoText from '../logo-text';
import Background from './background';

// const Link = styled(RebassLink)`
//   color: ${themeGet('colors.white')};
//   text-decoration: underline;
//   ${fontSize};
//   ${fontFamily};
// `;

const GLink = styled(GatsbyLink)`
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
  padding: ${themeGet('spacing.100')};
  margin: 0;
  border-top: solid 2px transparent;
  border-bottom: solid 2px white;
  font-family: ${themeGet('fonts.sans')};
  font-size: ${themeGet('fontSizes.400')};
  &::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }
  ${flex}
  ${padding}
  ${margin}
`;

const Info = ({ tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Flex
      ref={ref}
      flexDirection="column"
      alignItems="flex-start"
      mb={['600', '600', '700']}
      order={-1}
      css={transCss}
      {...props}
    >
      <Text
        mb="200"
        fontFamily="mono"
        fontWeight={400}
        color="white"
        fontSize="400"
      >
        30 Aug - 2 Sep
      </Text>

      <Text
        mb="500"
        fontFamily="mono"
        fontWeight={400}
        color="white"
        fontSize="400"
      >
        Broken Bay, NSW
      </Text>

      <Button
        as="a"
        title="Visit the ticket page for CampJS X"
        href="https://ti.to/campjs/campjs-x"
        variant="primary"
        color="white"
        bg="transparent"
        borderColor="white"
        borderWidth="2px"
        px={['400', '500']}
        py={['300', '300', '300']}
      >
        <Text fontFamily="mono" fontWeight="700" fontSize="400">
          Buy your ticket >
        </Text>
      </Button>
    </Flex>
  );
};

const Interact = ({ tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Flex
      ref={ref}
      flex={1}
      flexDirection="column"
      justifyContent={['space-between', 'space-between', 'flex-end']}
      alignItems={['flex-start', 'flex-start', 'flex-end']}
      css={[
        css`
          position: relative;
        `,
        transCss,
      ]}
      {...props}
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Box mb="500">
          <GLink
            title="Google Form: CampJS X Call For Papers"
            fontFamily="mono"
            fontSize="400"
            to="/call-for-papers"
          >
            Submit a talk or workshop >
          </GLink>
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
            mb="500"
          >
            <Input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="campjsfan@email.com"
              title="Your email for the CampJS X mailing list"
              required
              fontSize="400"
              px={['400', '500', '500']}
              py={'300'}
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
              px={['400', '500', '500']}
              py="300"
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
              <Text fontFamily="mono" fontWeight="700" fontSize="400">
                Submit
              </Text>
            </Button>
          </Flex>
        </form>
      </Flex>
      <Box alignSelf="flex-end">
        <Text fontFamily="sans" fontWeight={400} color="white" fontSize="300">
          <GLink to="/code-of-conduct" fontFamily="sans">
            Code of Conduct
          </GLink>{' '}
          • Organised by Tech Etcetra (Non-Profit)
        </Text>
      </Box>
    </Flex>
  );
};

const TeaserContent = () => (
  <Flex
    flexDirection={['column', 'colmn', 'row']}
    padding={['500', '500', '600']}
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
      mb={['600', null]}
      css={css`
        position: relative;
      `}
    >
      <Box>
        <LogoText tin="up" />
      </Box>

      <Info tin="right" />
    </Flex>

    <Interact tin="left" />
  </Flex>
);

export default TeaserContent;
