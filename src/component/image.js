/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export const SpeakerImage = ({ src, alt, width, height, ...props }) => {
  const baseStyle = css`
    border-radius: 2px;
    max-width: ${width};
    width: 100%;
  `;
  return (
    <div
      {...props}
      css={[
        baseStyle,
        css`
          height: 0;
          padding-bottom: 100%;
          background-color: #9da7c1;
        `,
      ]}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={alt}
        css={[
          baseStyle,
          css`
            mix-blend-mode: soft-light;
            filter: grayscale(1);
            height: auto;
          `,
        ]}
        {...props}
      />
    </div>
  );
};
