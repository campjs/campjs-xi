/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Button } from '@rebass/emotion';
import useTransitionIn from 'util/use-transition-in';
import { ButtonText } from 'component/text';

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
      borderRadius="none"
      bg="orange400"
      borderColor="orange400"
      borderWidth="1px"
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
      <ButtonText color="white">{children}</ButtonText>
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
      borderRadius="none"
      bg="orange300"
      borderColor="orange300"
      borderWidth="1px"
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
      <ButtonText color="white">{children}</ButtonText>
    </Button>
  );
};

export const TertiaryButton = ({
  onClick,
  title,
  href,
  tin,
  color = 'white',
  textShadow = '-2px 3px 2px hsla(0, 0%, 0%, 0.15)',
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
      borderRadius="none"
      bg="transparent"
      borderColor={color}
      borderWidth="1px"
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
      <ButtonText
        color={color}
        css={css`
          text-shadow: ${textShadow};
        `}
      >
        {children}
      </ButtonText>
    </Button>
  );
};
