/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Flex } from '@rebass/emotion';
import Background from 'component/teaser/background';

import SatelliteLayout from 'layout/satellite';
import SEO from 'component/seo';

const NotFoundPage = () => (
  <SatelliteLayout>
    <SEO title="404: Not found" />
    <Flex
      justifyContent="center"
      alignItems="center"
      css={css`
        position: relative;
        min-height: 100vh;
        overflow: hidden;
        color: white;
      `}
    >
      <Background />
      <Flex
        flexDirection={'column'}
        css={css`
          position: relative;
        `}
      >
        <h1>404: NOT FOUND</h1>
        <sub>Meep morp.</sub>
        <p>You just hit a route that doesn&#39;t exist, sorry camper!</p>
      </Flex>
    </Flex>
  </SatelliteLayout>
);

export default NotFoundPage;
