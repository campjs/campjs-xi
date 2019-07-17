/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Box } from '@rebass/emotion';
import themeGet from '@styled-system/theme-get';
import theme from '../util/theme';

const mq = (minWidth, rules) => css`
  @media (min-width: ${minWidth}) {
    ${rules}
  }
`;

const gx = { w: {}, c: {} };
const bps = [null].concat(theme.breakpoints);
const autoCol = css`
  grid-column-start: auto;
`;
for (let bpi in bps) {
  const bp = bps[bpi];
  gx.w[bpi] = {};
  gx.c[bpi] = { auto: bp ? mq(bp, autoCol) : css(autoCol) };

  for (let step = 1; step <= 12; step++) {
    const wStep = css`
      grid-column-end: span ${step};
    `;
    const cStep = css`
      grid-column-start: ${step};
    `;
    gx.w[bpi][step] = bp ? mq(bp, wStep) : css(wStep);
    gx.c[bpi][step] = bp ? mq(bp, cStep) : css(cStep);
  }
}

export const Grid = ({ children, rowGap, ...props }) => (
  <div
    css={theme => css`
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: ${themeGet('space.500')({ theme })};
      ${rowGap && `grid-row-gap: ${themeGet(rowGap)({ theme })}`};
      @media screen and (max-width: ${themeGet('breakpoints.0')({ theme })}) {
        grid-column-gap: 0;
      }
    `}
    {...props}
  >
    {children}
  </div>
);

export const Block = ({ w = 1, c = 'auto', children, ...props }) => {
  const styles = [];
  [].concat(w).forEach((width, bp) => {
    if (gx.w[bp] && gx.w[bp][width]) styles.push(gx.w[bp][width]);
  });
  [].concat(c).forEach((column, bp) => {
    column = column == null ? 'auto' : column;
    if (gx.w[bp] && gx.c[bp][column]) styles.push(gx.c[bp][column]);
  });
  return (
    <Box css={css(styles)} {...props}>
      {children}
    </Box>
  );
};

export const Section = ({
  children,
  isAlt,
  isGrid,
  renderPreblock,
  ...props
}) => (
  <Box
    as="section"
    bg={isAlt ? 'yellow100' : 'white'}
    flex="1 1 100%"
    pt="700"
    pb="700"
    pr="500"
    pl="500"
    {...props}
  >
    {renderPreblock && renderPreblock()}
    <Box mx="auto" style={{ width: '100%', maxWidth: '960px' }}>
      {isGrid ? <Grid>{children}</Grid> : children}
    </Box>
  </Box>
);
