import React from 'react';
import PropTypes from 'prop-types';
import themeGet from '@styled-system/theme-get';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import normalize from 'emotion-normalize';
import theme from 'util/theme';

const ProviderProps = {
  children: PropTypes.node.isRequired,
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
Theme.propTypes = ProviderProps;

export const GlobalStyles = ({ children }) => (
  <>
    <Global styles={normalize} />
    <Global
      styles={theme => css`
        html,
        body {
          text-rendering: geometricPrecision;
          -webkit-font-smoothing: antialiased;
          font-size: 16px;
          font-family: ${themeGet('fonts.sans')({ theme })};
        }
      `}
    />
    {children}
  </>
);
GlobalStyles.propTypes = ProviderProps;

export const SiteStyles = ({ children }) => (
  <>
    <Global
      styles={theme => css`
        html,
        body {
          background: ${themeGet('colors.pink200')({ theme })};
        }
      `}
    />
    {children}
  </>
);
SiteStyles.propTypes = ProviderProps;

export const Stylings = ({ children }) => (
  <Theme>
    <GlobalStyles>
      <SiteStyles>{children}</SiteStyles>
    </GlobalStyles>
  </Theme>
);

Stylings.propTypes = {
  children: PropTypes.node.isRequired,
};
