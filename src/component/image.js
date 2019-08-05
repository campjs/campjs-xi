/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Box } from '@rebass/emotion';
import { getAllFluidImages } from 'util/queries';

const speakerImageStyles = {};
const getSpeakerImageStyle = width => {
  if (!(width in speakerImageStyles)) {
    speakerImageStyles[width] = css`
      border-radius: 2px;
      max-width: ${width};
      width: 100%;
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
  ...props
}) => {
  const images = getAllFluidImages();
  const matchingImage = images.find(i => i.name === image);

  if (!matchingImage) {
    throw new Error(`Unavailable image: ${image}`);
  }
  return (
    <Box
      {...props}
      css={[
        getSpeakerImageStyle(width),
        css`
          height: 0;
          padding-bottom: 100%;
          background-color: ${color};
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
          `,
        ]}
        {...props}
      />
    </Box>
  );
};
