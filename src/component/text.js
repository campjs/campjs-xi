/* @jsx jsx */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Heading, Text } from '@rebass/emotion';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import themeGet from '@styled-system/theme-get';
import { color } from 'styled-system';
import useTransitionIn from 'util/use-transition-in';

export const FeatureText = ({ children, tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Heading
      ref={ref}
      as="h1"
      color="black"
      fontSize={['600', '700']}
      fontFamily="mono"
      fontWeight="400"
      mb="400"
      css={[
        css`
          word-break: break-word;
          hyphens: auto;
        `,
        transCss,
      ]}
      {...props}
    >
      {children}
    </Heading>
  );
};

export const SubFeatureText = props => {
  return <FeatureText as="h2" fontSize="500" {...props} />;
};

export const HeadingText = ({ children, tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Heading
      ref={ref}
      as="h2"
      color="black"
      fontSize="400"
      fontFamily="sans"
      fontWeight="700"
      mb="500"
      css={[transCss]}
      {...props}
    >
      {children}
    </Heading>
  );
};

export const SubHeadingText = ({ children, tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Heading
      ref={ref}
      as="h3"
      color="black"
      fontSize="400"
      fontFamily="sans"
      fontWeight="400"
      lineHeight="1"
      letterSpacing="1px"
      mb="500"
      css={[transCss]}
      {...props}
    >
      {children}
    </Heading>
  );
};

export const BodyText = ({ children, tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Text
      ref={ref}
      as="p"
      color="black"
      fontSize="300"
      fontWeight="400"
      lineHeight="1.6"
      fontFamily="sans"
      mt="0"
      mb="400"
      css={[transCss]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const SpeakerHeadingText = ({ children, tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Text
      ref={ref}
      as="h4"
      color="black"
      fontSize="350"
      fontWeight="700"
      lineHeight="1"
      fontFamily="mono"
      mt="0"
      mb="400"
      css={[transCss]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const ButtonText = ({ children, tin, ...props }) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Text
      ref={ref}
      as="span"
      color="black"
      fontSize="300"
      fontWeight="400"
      lineHeight="1"
      fontFamily="mono"
      mt="0"
      mb="0"
      css={[
        css`
          display: block;
        `,
        transCss,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export const MetaText = ({ children, ...props }) => {
  return (
    <Text
      as="span"
      color="gray300"
      fontSize="200"
      fontWeight="400"
      lineHeight="1.4"
      fontFamily="sans"
      mb="400"
      {...props}
    >
      {children}
    </Text>
  );
};

export const ScheduleRowTitle = ({ children, ...props }) => (
  <Text
    as="h3"
    color="black"
    fontSize="325"
    fontWeight="400"
    fontFamily="sans"
    textDecoration="none"
    {...props}
  >
    {children}
  </Text>
);

const processMDAnchors = str => {
  const matches = /\[([^\[\]]+)\]\(([^)]+)\)/.exec(str);
  return matches ? (
    <>
      {str.split(matches[0])[0]}
      <Anchor href={matches[2]}>{matches[1]}</Anchor>
      {str.split(matches[0])[1]}
    </>
  ) : (
    str
  );
};

export const ScheduleRowDesc = ({ children, ...props }) => {
  const content =
    typeof children === 'string' ? processMDAnchors(children) : children;
  return (
    <Text
      as="p"
      color="gray200"
      fontSize="300"
      fontWeight="400"
      fontFamily="sans"
      textDecoration="none"
      {...props}
    >
      {content}
    </Text>
  );
};

export const NavItemText = ({ children, ...props }) => (
  <Text
    as="span"
    color="black"
    fontSize="200"
    fontWeight="400"
    fontFamily="sans"
    letterSpacing="1px"
    textDecoration="none"
    style={{ textTransform: 'uppercase', textDecoration: 'none' }}
    {...props}
  >
    {children}
  </Text>
);

const OL = styled.ol`
  font-family: ${themeGet('fonts.sans')};
  font-weight: 700;
  margin: 0;
  padding-left: 1rem;
  list-style: none;
  ${color}
`;

const LI = styled.li`
  position: relative;
  padding-left: 0.9rem;
  margin-bottom: 1rem;
  counter-increment: level1;
  &:first-of-type {
    counter-reset: level1;
  }
  &:before {
    position: absolute;
    content: counter(level1) ' ';
    left: -0.9rem;
  }
  ${color}
`;

export const OrderList = ({ children, counterColor, color, ...props }) => (
  <OL {...props}>
    {children.map((child, i) => (
      <LI color={counterColor || color || 'currentColor'} key={i + child}>
        <BodyText as="span" color={color}>
          {child}
        </BodyText>
      </LI>
    ))}
  </OL>
);
OrderList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  ).isRequired,
};

const UL = styled.ul`
  font-family: ${themeGet('fonts.sans')};
  font-weight: 700;
  margin: 0;
  padding-left: 1rem;
  list-style: none;
  ${color}
`;

const ULI = styled.li`
  position: relative;
  padding-left: 0.9rem;
  margin-bottom: 1rem;
  &:before {
    content: '>';
    position: absolute;
    left: -0.9rem;
  }
  ${color}
`;

export const UnorderList = ({ children, color, counterColor, ...props }) => (
  <UL {...props}>
    {children.map((child, i) => (
      <ULI color={counterColor || color || 'currentColor'} key={i + child}>
        <BodyText as="span" color={color}>
          {child}
        </BodyText>
      </ULI>
    ))}
  </UL>
);
UnorderList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const Code = styled.code`
  background: ${themeGet('colors.gray100')};
  color: ${themeGet('colors.black')};
  font-size: 1em;
  font-weight: 400;
  border-radius: 2px;
  padding: 1px 2px 2px 2px;
`;

export const Anchor = props => {
  const LinkComp = props.to ? Link : 'a';
  return (
    <LinkComp
      css={css`
        color: currentColor;
        text-decoration: underline;
      `}
      {...props}
    />
  );
};
