/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Button, Text } from '@rebass/emotion';
import useTransitionIn from 'util/use-transition-in';

export const PrimaryButton = ({
  onClick,
  title,
  href,
  tin,
  children,
  ...props
}) => {
  const [ref, transCss] = useTransitionIn(tin);
  return (
    <Button
      ref={ref}
      onClick={onClick}
      as={href ? 'a' : undefined}
      title={title}
      href={href}
      color="white"
      borderRadius="none"
      bg="orange400"
      borderColor="orange400"
      borderWidth="2px"
      borderStyle="solid"
      px={'425'}
      py={'425'}
      css={[
        css`
          box-shadow: -2px 4px 6px 0px hsla(0, 0%, 0%, 0.15);
          word-break: break-word;
          hyphens: auto;
        `,
        transCss,
      ]}
      {...props}
    >
      <Text as="span" fontFamily="mono" fontWeight="400" fontSize="300">
        {children}
      </Text>
    </Button>
  );
};

export const SecondaryButton = ({
  onClick,
  title,
  href,
  children,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      as={href ? 'a' : undefined}
      title={title}
      href={href}
      color="white"
      borderRadius="none"
      bg="orange300"
      borderColor="orange300"
      borderWidth="2px"
      borderStyle="solid"
      px={'425'}
      py={'425'}
      css={css`
        box-shadow: -2px 4px 6px 0px hsla(0, 0%, 0%, 0.15);
        word-break: break-word;
        hyphens: auto;
      `}
      {...props}
    >
      <Text as="span" fontFamily="mono" fontWeight="400" fontSize="300">
        {children}
      </Text>
    </Button>
  );
};

export const TertiaryButton = ({
  onClick,
  title,
  href,
  children,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      as={href ? 'a' : undefined}
      title={title}
      href={href}
      color="white"
      borderRadius="none"
      bg="transparent"
      borderColor="white"
      borderWidth="2px"
      borderStyle="solid"
      px={'425'}
      py={'425'}
      css={css`
        box-shadow: -2px 4px 6px 0px hsla(0, 0%, 0%, 0.15);
        word-break: break-word;
        hyphens: auto;
      `}
      {...props}
    >
      <Text
        as="span"
        fontFamily="mono"
        fontWeight="400"
        fontSize="300"
        css={css`
          text-shadow: -2px 3px 2px hsla(0, 0%, 0%, 0.15);
        `}
      >
        {children}
      </Text>
    </Button>
  );
};
