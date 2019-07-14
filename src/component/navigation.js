import { PrimaryButton } from 'component/button';
import { Block, Section } from 'component/section';
import { NavItemText } from 'component/text';
import React from 'react';
import { css, jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { Box, Button, Flex, Text } from '@rebass/emotion';
import themeGet from '@styled-system/theme-get';
import LogoText from 'component/logo-text';
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

/* prettier-ignore */
const BurgerButton = styled.button`
  appearance: none;
  padding: 15px 15px;
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
  ${p => p.isOpen && css`
    & ${BurgerInner} {
      transform: rotate(45deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    & ${BurgerInner}:before {
      top: 0;
      opacity: 0;
      transition: top 0.075s ease,
      opacity 0.075s 0.12s ease;
    }
    & ${BurgerInner}:after {
      bottom: 0;
      transform: rotate(-90deg);
      transition: bottom 0.075s ease,
      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    & ${BurgerInner},
    & ${BurgerInner}:before,
    & ${BurgerInner}:after {
      background-color: #000;
    }
  `}
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
`;

export const Header = ({ isAlt, ...props }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const handleMenuClick = React.useCallback(
    e => {
      setMenuOpen(!isMenuOpen);
    },
    [isMenuOpen, setMenuOpen]
  );

  return (
    <Box bg={isAlt ? 'yellow100' : 'white'} width="100%" height="0%" mb={700}>
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
      </NavRight>
    </Box>
  );
};

export const Footer = ({ isAlt = true }) => {
  return (
    <Section isGrid isAlt={isAlt}>
      <Block w={[6, 6, 3, 3]} c={[1, 1, 1, 1]}>
        <NavItemText>Organisers</NavItemText>
        <NavItemText>Presskit</NavItemText>
        <NavItemText>Tweet tweet</NavItemText>
      </Block>
      <Block w={[6, 6, 3, 3]} c={[1, 1, 4, 4]}>
        <NavItemText>Code of Conduct</NavItemText>
        <NavItemText>Contact</NavItemText>
        <NavItemText>Sitemap</NavItemText>
      </Block>
      <Block w={[6, 6, 3, 3]} c={[7, 7, 7, 7]}>
        <PrimaryButton
          title="Visit the ticket page for CampJS X"
          href="https://ti.to/campjs/campjs-x"
        >
          Buy your ticket
        </PrimaryButton>
      </Block>
      <Block w={[6, 6, 3, 3]} c={[7, 7, 10, 10]}>
        <Flex width="100%" justifyContent="flex-end">
          <NavItemText>Scroll to top ^</NavItemText>
        </Flex>
      </Block>
    </Section>
  );
};
