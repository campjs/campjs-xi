import React from 'react';
import PropTypes from 'prop-types';
import themeGet from '@styled-system/theme-get';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import normalize from 'emotion-normalize';
import theme from 'util/theme';

const GlobalStyles = ({ children }) => (
  <ThemeProvider theme={theme}>
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
            background: ${themeGet('colors.pink200')({ theme })};
          }
        `}
      />
      {children}
    </>
  </ThemeProvider>
);

GlobalStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyles;
