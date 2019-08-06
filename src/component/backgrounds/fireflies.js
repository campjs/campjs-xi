/* @jsx jsx */
import React from 'react';
import { jsx, css, keyframes as createKeyframes } from '@emotion/core';
import styled from '@emotion/styled';

const MAX_FIREFLIES = 35;

const random = (max = 1) => Math.ceil(Math.random() * max);

const keyframes = {
  drift: createKeyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,
  flash: createKeyframes`
  0%, 30%, 100% { 
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
`,
};

const styles = {
  firefly: css`
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0.4vw;
    min-width: 5px;
    height: 0.4vw;
    min-height: 5px;
    margin: -0.2vw 0 0 9.8vw;
    animation: ease 200s alternate infinite;
    pointer-events: none;
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform-origin: -10vw;
    }
    &::before {
      background: #36293b;
      opacity: 0.4;
      animation: ${keyframes.drift} ease alternate infinite;
    }
    &::after {
      background: white;
      opacity: 0;
      box-shadow: 0 0 0vw 0vw yellow;
      animation: ${keyframes.drift} ease alternate infinite,
        ${keyframes.flash} ease infinite;
    }
  `,
};

for (let i = 0; i < MAX_FIREFLIES; i++) {
  const name = `firefly_${i}`;
  // Randomise a fireflies keys
  const steps = random(12) + 16;
  const frames = [];
  for (let cStep = 0; cStep < steps; cStep++) {
    frames.push(`
    ${cStep * (100 * cStep)}% {
      transform:
        translateX(${random(100) - 50}vw)
        translateY(-${random(120)}vh)
        scale(${random(75) / 100 + 0.25});
    }
`);
  }
  keyframes[name] = createKeyframes`
    ${frames.join('\n')}
  `;
  // Randomise a fireflies delay and duration
  const durationDrift = `${random(10) + 8}s`;
  const durationFlash = `${random(10000) + 6000}ms`;
  const delayDrift = `${random(8000)}ms`;
  styles[name] = css`
    bottom: ${random(50)}%;
    animation-name: ${keyframes[name]};
    &::before {
      animation-duration: ${durationDrift};
    }
    &::after {
      animation-duration: ${durationDrift}, ${durationFlash};
      animation-delay: 0ms, ${delayDrift};
    }
  `;
}

const Container = styled.div`
  pointer-events: none;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  max-height: 75%;
  height: 110vh;
`;

export const FirefliesBG = () => {
  const fireflies = [];
  for (let i = 0; i < MAX_FIREFLIES; i++) {
    const name = `firefly_${i}`;
    fireflies.push(<div key={i} css={[styles.firefly, styles[name]]} />);
  }
  return <Container>{fireflies}</Container>;
};
