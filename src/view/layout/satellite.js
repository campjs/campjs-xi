import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import GlobalStyles from 'view/components/global-styles';

const SatelliteLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <GlobalStyles></GlobalStyles>}
  />
);

SatelliteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SatelliteLayout;
