import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Stylings } from 'component/providers';

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
    render={data => <Stylings>{children}</Stylings>}
  />
);

SatelliteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SatelliteLayout;
