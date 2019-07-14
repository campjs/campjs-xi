/** @jsx jsx */
import React from 'react';
import { css as createClassName } from 'emotion';
import { css, jsx } from '@emotion/core';
import { Box, Flex } from '@rebass/emotion';
import themeGet from '@styled-system/theme-get';
import theme from '../util/theme';

const mq = (minWidth, rules) => createClassName`
  @media (min-width: ${minWidth}) {
    ${rules}
  }
`;

const gx = { w: {}, c: {} };
const bps = [null].concat(theme.breakpoints);
const autoCol = `
  grid-column-start: auto;
`;
for (let bpi in bps) {
  const bp = bps[bpi];
  gx.w[bpi] = {};
  gx.c[bpi] = { auto: bp ? mq(bp, autoCol) : createClassName(autoCol) };

  for (let step = 1; step <= 12; step++) {
    const wStep = `
      grid-column-end: span ${step};
    `;
    const cStep = `
      grid-column-start: ${step};
    `;
    gx.w[bpi][step] = bp ? mq(bp, wStep) : createClassName(wStep);
    gx.c[bpi][step] = bp ? mq(bp, cStep) : createClassName(cStep);
  }
}

export const Grid = ({ children, rowGap, ...props }) => (
  <div
    css={css`
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-column-gap: ${themeGet('space.500')({ theme })};
      ${rowGap && `grid-row-gap: ${themeGet(rowGap)({ theme })}`};
    `}
    {...props}
  >
    {children}
  </div>
);

export const Block = ({ w = 1, c = 'auto', children, ...props }) => {
  const classes = [];
  [].concat(w).forEach((width, bp) => {
    if (gx.w[bp] && gx.w[bp][width]) classes.push(gx.w[bp][width]);
  });
  [].concat(c).forEach((column, bp) => {
    column = column == null ? 'auto' : column;
    if (gx.w[bp] && gx.c[bp][column]) classes.push(gx.c[bp][column]);
  });
  return (
    <Box className={classes.join(' ')} {...props}>
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
    py="700"
    px="500"
    {...props}
  >
    {renderPreblock && renderPreblock()}
    <Box mx="auto" style={{ width: '100%', maxWidth: '960px' }}>
      {isGrid ? <Grid>{children}</Grid> : children}
    </Box>
  </Box>
);
