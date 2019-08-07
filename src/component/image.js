/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Box } from '@rebass/emotion';
import { getAllFluidImages } from 'util/queries';

const speakerImageStyles = {};
const getSpeakerImageStyle = width => {
  if (!(width in speakerImageStyles)) {
    speakerImageStyles[width] = css`
      max-width: ${width};
    `;
  }

  return speakerImageStyles[width];
};

export const SpeakerImage = ({
  image,
  alt,
  color = '#9da7c1',
  width,
  height,
  extraContainerStyles = '',
  ...props
}) => {
  const images = getAllFluidImages();
  const matchingImage = images.find(i => i.name === image);

  if (!matchingImage) {
    throw new Error(`Unavailable image: ${image}`);
  }
  return (
    <Box
      css={[
        getSpeakerImageStyle(width),
        css`
          background-color: ${color};
          height: 0;
          width: 100%;
          padding-bottom: calc(100% - 2px);
          border-radius: 3px;
          border: solid 1px transparent;
          ${extraContainerStyles}
        `,
      ]}
    >
      <img
        src={matchingImage.src || ''}
        alt={alt}
        width={matchingImage.width}
        height={matchingImage.height}
        css={[
          getSpeakerImageStyle(width),
          css`
            mix-blend-mode: soft-light;
            filter: grayscale(1);
            height: auto;
            width: 100%;
            border-radius: 3px;
          `,
        ]}
        {...props}
      />
    </Box>
  );
};
