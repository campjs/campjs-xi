/* @jsx jsx */
import LogoTent from 'component/logo-tent';
import React from 'react';
import { jsx, css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Box, Button, Flex } from '@rebass/emotion';
import themeGet from '@styled-system/theme-get';
import LogoText from 'component/logo-text';
import { PrimaryButton } from 'component/button';
import { Block, Section } from 'component/section';
import { NavItemText } from 'component/text';
import { flex, margin } from 'styled-system';
import theme from 'util/theme';

const CampShooshKF = keyframes`
  0% { background-color: ${theme.colors.pink200}; }
  50% { background-color: ${theme.colors.orange300}; }
  100% { background-color: ${theme.colors.pink200}; }
`;

const Pulsate = keyframes`
  0% { transform: scale(1) }
  35% { transform: scale(1) }
  45% { transform: scale(1.05) }
  55% { transform: scale(1) }
  100% { transform: scale(1) }
`;

const BurgerBox = styled.span`
  width: 27px;
  height: 23px;
  display: inline-block;
  position: relative;
`;

const BurgerInner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  &,
  &:after,
  &:before {
    width: 27px;
    height: 2px;
    background-color: #000;
    border-radius: 2px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  &:after,
  &:before {
    content: '';
    display: block;
  }
  &:before {
    top: -10px;
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }
  &:after {
    bottom: -10px;
    transition: bottom 0.075s 0.12s ease,
      transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
`;

const activeBurgerStyles = css`
  & ${BurgerInner} {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  & ${BurgerInner}:before {
    top: 0;
    opacity: 0;
    transition: top 0.075s ease, opacity 0.075s 0.12s ease;
  }
  & ${BurgerInner}:after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease,
      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  & ${BurgerInner}, & ${BurgerInner}:before, & ${BurgerInner}:after {
    background-color: #000;
  }
`;

/* prettier-ignore */
const BurgerButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  appearance: none;
  padding: 0;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  &:focus {
    outline: none;
  }
  &:hover {
    animation: ${Pulsate} 2.5s linear;
    animation-iteration-count: infinite;
  }
  &:hover ${BurgerInner},
  &:hover ${BurgerInner}:before,
  &:hover ${BurgerInner}:after {
    animation: ${CampShooshKF} 2.5s linear;
    animation-iteration-count: infinite;
  }
  ${p => p.isOpen && activeBurgerStyles}
  ;@media (min-width: ${themeGet('breakpoints.2')}) {
    display: none;
  }
`;

const NavLeft = styled.div`
  position: absolute;
  top: ${themeGet('space.500')};
  left: ${themeGet('space.500')};
  width: 90px;
`;

const NavRight = styled.div`
  position: absolute;
  top: ${themeGet('space.500')};
  right: ${themeGet('space.500')};
  max-width: calc(100vw - ${themeGet('space.500')});
  z-index: 1;
`;

const VerticalMenu = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${themeGet('space.400')};
  @media (max-width: ${themeGet('breakpoints.2')}) {
    display: none;
    background: ${p => themeGet(`colors.${p.bg}`)(p)};
    padding-left: ${themeGet('space.500')};
    padding-bottom: ${themeGet('space.500')};
    border-left: solid ${themeGet('colors.black')} 1px;
    border-bottom: solid ${themeGet('colors.black')} 1px;
    border-bottom-left-radius: 3px;
    box-shadow: -1px 8px 8px -2px hsla(0, 0%, 0%, 0.2);
    margin-top: -${themeGet('space.500')};
    margin-right: -${themeGet('space.500')};
    padding-right: calc(${themeGet('space.500')});
    padding-top: calc(${themeGet('space.500')});

    ${p =>
      p.isOpen &&
      css`
        display: grid !important;
      `}
  }
`;

const linkStyles = css`
  display: inline;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
  }
`;
const NavLink = props => {
  const LinkComp = props.to ? Link : 'a';
  return <LinkComp css={linkStyles} {...props} />;
};

const Input = styled.input`
  display: flex;
  width: 13.2rem;
  flex: 0 0 auto;
  appearance: none;
  background: transparent;
  border: none;
  border-bottom: solid ${themeGet('colors.black')} 1px;
  padding: 5px 0 5px 0;
  margin: -5px 0 0 0;
  color: ${themeGet('colors.black')};
  font-family: ${themeGet('fonts.sans')};
  font-size: ${themeGet('fontSizes.200')};
  font-weight: ${themeGet('fontWeights.400')};
  letter-spacing: 1px;
  margin-right: ${themeGet('space.300')};
  &::placeholder {
    color: ${themeGet('colors.black')};
    opacity: 0.3;
  }
  ${flex}
  ${margin}
`;

export const Header = ({ ...props }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const handleMenuClick = React.useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen, setMenuOpen]);
  const bg = 'yellow100';

  return (
    <Box bg={bg} width="100%" height="0%" mb={700} {...props}>
      <NavLeft>
        <Link to="/">
          <LogoText color="black" />
        </Link>
      </NavLeft>

      <NavRight>
        <BurgerButton onClick={handleMenuClick} isOpen={isMenuOpen}>
          <BurgerBox>
            <BurgerInner></BurgerInner>
          </BurgerBox>
        </BurgerButton>

        <VerticalMenu bg={bg} isOpen={isMenuOpen}>
          <NavLink
            to="/speakers"
            title="Talks & Workshops as volunteered by Speakers"
          >
            <NavItemText>Talks & Workshops</NavItemText>
          </NavLink>
          <NavLink
            to="/call-for-papers"
            title="Call for Papers - Round one ends on the 22nd July"
          >
            <NavItemText>
              Call for Papers{' '}
              <span role="img" aria-label="Clock">
                🕑
              </span>
            </NavItemText>
          </NavLink>
          <NavLink to="/about" title="About CampJS">
            <NavItemText>About CampJS</NavItemText>
          </NavLink>
          <NavLink
            to="/about#volunteer"
            title="Volunteer to help out on the day!"
          >
            <NavItemText>Get Involved</NavItemText>
          </NavLink>
          <NavLink
            href="https://twitter.com/campjs"
            title="Visit the CampJS Twitter"
          >
            <NavItemText>Tweet Tweet</NavItemText>
          </NavLink>
          <NavLink
            href="https://ti.to/campjs/campjs-x"
            title="Purchase the ticket page for CampJS X"
          >
            <NavItemText>Buy Tickets</NavItemText>
          </NavLink>
          <NavLink to="/schedule" title="Events Schedule">
            <NavItemText>Schedule</NavItemText>
          </NavLink>
          {/*<NavLink to="/things" title="Misc Resources for CampJS">*/}
          {/*  <NavItemText>Things to Click</NavItemText>*/}
          {/*</NavLink>*/}
          <Flex
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <form
              action="https://campjs.us17.list-manage.com/subscribe/post?u=9e86f175da4d21a075d7c3e68&amp;id=f5b9c96d69"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
            >
              <Flex
                alignItems="baseline"
                justifyContent="flex-start"
                flexWrap={['wrap', 'nowrap']}
              >
                <Input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="CAMPJSFAN@EMAIL.COM"
                  title="Your email for the CampJS X mailing list"
                  flex={['1 0 100%', '0 0 auto']}
                  required
                />
                {/* form bot protection */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-5000px',
                  }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_9e86f175da4d21a075d7c3e68_f5b9c96d69"
                    tabIndex="-1"
                  />
                </div>
                <Button
                  role="button"
                  color="black"
                  fontSize="200"
                  fontWeight="400"
                  fontFamily="sans"
                  letterSpacing="1px"
                  bg="transparent"
                  px="100"
                  py="100"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  flex={['1 0 100%', '0 0 auto']}
                  title="Join the CampJS X mailing list"
                  css={css`
                    cursor: pointer;
                    text-align: left;
                    padding-bottom: 5px;
                    border: none;
                    border-radius: initial;
                    &:hover,
                    &:active,
                    &:hover {
                      border-bottom: solid 1px;
                    }
                  `}
                >
                  <NavItemText>Submit ></NavItemText>
                </Button>
              </Flex>
            </form>
          </Flex>
        </VerticalMenu>
      </NavRight>
    </Box>
  );
};

const FooterNavBlock = ({ children, ...props }) => (
  <Block as="nav" {...props}>
    <Box
      css={theme => css`
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: ${themeGet('space.400')({ theme })};
      `}
    >
      {children}
    </Box>
  </Block>
);

export const Footer = () => {
  const { sponsorKitPdf } = useStaticQuery(
    graphql`
      query {
        sponsorKitPdf: file(
          relativePath: { eq: "campjs-x-sponsorkit.pdf" }
          sourceInstanceName: { eq: "downloads" }
        ) {
          publicURL
        }
      }
    `
  );
  return (
    <Section
      isGrid
      as="footer"
      pt="600"
      pb="700"
      bg="yellow100"
      css={css`
        position: relative;
      `}
      renderPreblock={() => (
        <LogoTent
          css={theme => css`
            width: 60px;
            position: absolute;
            bottom: ${themeGet('space.400')({ theme })};
            left: ${themeGet('space.400')({ theme })};
          `}
        />
      )}
    >
      <FooterNavBlock
        order={[1, 0, 0, 0]}
        mb={[400, 400, 100, 100]}
        w={[12, 6, 3, 3]}
        c={[1, 1, 1, 1]}
      >
        <NavLink
          to="/speakers"
          title="Talks & Workshops as volunteered by Speakers"
        >
          <NavItemText>Talks & Workshops</NavItemText>
        </NavLink>
        <NavLink to="/schedule" title="Events Schedule">
          <NavItemText>Schedule</NavItemText>
        </NavLink>
        <NavLink to="/about#location" title="About CampJS">
          <NavItemText>Accommodation</NavItemText>
        </NavLink>
        <NavLink to="/about#location" title="About CampJS">
          <NavItemText>Transport</NavItemText>
        </NavLink>
        <NavLink
          href="https://twitter.com/campjs"
          title="Visit the CampJS Twitter"
        >
          <NavItemText>Tweet Tweet</NavItemText>
        </NavLink>
      </FooterNavBlock>

      <FooterNavBlock order={[2, 2, 1, 1]} w={[12, 6, 3, 3]} c={[1, 1, 4, 4]}>
        <NavLink to="/code-of-conduct" title="Code of Conduct">
          <NavItemText>Code of Conduct</NavItemText>
        </NavLink>
        <NavLink
          to="/about#volunteer"
          title="Volunteer to help out on the day!"
        >
          <NavItemText>Volunteer</NavItemText>
        </NavLink>
        <NavLink
          href="mailto:organisers-team@campjs.com"
          title="Email the Organisers"
        >
          <NavItemText>Contact</NavItemText>
        </NavLink>
        <NavLink
          href={sponsorKitPdf.publicURL}
          download="campjs-x-sponsorkit.pdf"
          title="Infopack for Sponsors"
        >
          <NavItemText>Sponsorkit</NavItemText>
        </NavLink>
        <NavLink href="/sitemap.xml" title="CampJS X Sitemap">
          <NavItemText>Sitemap</NavItemText>
        </NavLink>
      </FooterNavBlock>

      <Block
        mb={[500, 100, 100, 100]}
        order={[0, 1, 2, 2]}
        w={[12, 6, 3, 3]}
        c={[1, 7, 7, 7]}
      >
        <PrimaryButton
          width="100%"
          title="Purchase the ticket page for CampJS X"
          href="https://ti.to/campjs/campjs-x"
        >
          Buy your ticket
        </PrimaryButton>
      </Block>

      <Block
        mt={[500, 100, 100, 100]}
        order={[3, 3, 3, 3]}
        w={[12, 12, 3, 3]}
        c={[1, 1, 10, 10]}
      >
        <Flex width="100%" justifyContent="flex-end">
          <NavLink href="#" title="Go to top of page">
            <NavItemText
              onClick={() => {
                window.scrollY = 0;
              }}
            >
              Scroll to top ^
            </NavItemText>
          </NavLink>
        </Flex>
      </Block>
    </Section>
  );
};
