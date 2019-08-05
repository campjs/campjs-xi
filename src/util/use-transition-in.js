import React from 'react';
import { css } from '@emotion/core';
import { useInView } from 'react-intersection-observer';

const transitions = {
  up: isInView => css`
    .js & {
      opacity: 0;
      transition: transform 1s, opacity 1s;
      transform: translateY(30px);
      ${isInView &&
        css`
          opacity: 1;
          transform: translateY(0);
        `}
    }
  `,
  down: isInView => css`
    .js & {
      opacity: 0;
      transition: 1s;
      transform: translateY(-30px);
      ${isInView &&
        css`
          opacity: 1;
          transform: translateY(0);
        `}
    }
  `,
  left: isInView => css`
    .js & {
      opacity: 0;
      transition: 1s;
      transform: translateX(30px);
      ${isInView &&
        css`
          opacity: 1;
          transform: translateX(0);
        `}
    }
  `,
  right: isInView => css`
    .js & {
      opacity: 0;
      transition: 1s;
      transform: translateX(-30px);
      ${isInView &&
        css`
          opacity: 1;
          transform: translateX(0);
        `}
    }
  `,
};

const useTransitionIn = (transitionInType, transitionMap = transitions) => {
  const isInRef = React.useRef(false);
  let ref;
  let isInView;
  let transCss;
  if (transitionInType) {
    let inView = useInView();
    ref = inView[0];
    isInView = inView[1];
    if (isInView && !isInRef.current) {
      isInRef.current = isInView;
    }
    transCss = transitionMap[transitionInType](isInRef.current);
  }
  return [ref, transCss];
};

export default useTransitionIn;
