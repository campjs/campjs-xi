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
          font-size: 16px;
          font-family: ${themeGet('fonts.sans')({ theme })};
          scroll-behavior: smooth;
          box-sizing: border-box;
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
          background: ${themeGet('colors.orange300')({ theme })};
        }
        a {
          text-decoration: none;
          color: currentColor;
        }
        a.anchor {
          text-decoration: underline;
        }
        body > div > div > section {
          position: relative;
          z-index: 1;
        }
        body > div > div > section:last-of-type {
          box-shadow: 0px 14px 16px 0px hsla(0, 0%, 0%, 0.13),
            -1px 4px 4px 0px hsla(0, 0%, 0%, 0.09);
        }
        body > div > div > section + footer {
          position: sticky;
          bottom: 0;
          z-index: 0;
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
