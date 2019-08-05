/* @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import themeGet from '@styled-system/theme-get';
import { SpeakerImage } from 'component/image';
import { Block } from 'component/section';
import {
  BodyText,
  SpeakerHeadingText,
  HeadingText,
  SubHeadingText,
  MetaText,
  SubFeatureText,
  UnorderList,
} from 'component/text';
import useTransitionIn from 'util/use-transition-in';

const defaultTextStyle = css``;

export const SpeakerBlockLeft = ({
  image,
  name,
  title,
  textColor = 'white',
  textStyle = defaultTextStyle,
}) => {
  const [rRef, rTransCss] = useTransitionIn('right');
  return (
    <>
      <Block
        ref={rRef}
        css={rTransCss}
        w={[6, 4, 4, 4]}
        c={[1, 1, 1, 1]}
        mb={['700', '700', '600']}
      >
        <SpeakerImage image={image} alt={name} width="300px" height="300px" />
      </Block>
      <Block
        css={rTransCss}
        w={[5, 4, 3, 4]}
        c={[8, 5, 5, 5]}
        mb={['700', '700', '600']}
      >
        <SpeakerHeadingText color={textColor} css={[textStyle]}>
          {name}
        </SpeakerHeadingText>
        <BodyText color={textColor} css={[textStyle]}>
          {title}
        </BodyText>
      </Block>
    </>
  );
};

export const SpeakerBlockRight = ({
  image,
  name,
  title,
  textColor = 'white',
  textStyle = defaultTextStyle,
}) => {
  const [lRef, lTransCss] = useTransitionIn('left');
  return (
    <>
      <Block
        ref={lRef}
        css={lTransCss}
        w={[5, 4, 3, 4]}
        c={[1, 5, 6, 5]}
        mb={['700', null, '600']}
      >
        <SpeakerHeadingText
          color={textColor}
          css={[
            css`
              text-align: right;
            `,
            textStyle,
          ]}
        >
          {name}
        </SpeakerHeadingText>
        <BodyText
          color={textColor}
          css={[
            css`
              text-align: right;
            `,
            textStyle,
          ]}
        >
          {title}
        </BodyText>
      </Block>
      <Block
        css={lTransCss}
        w={[6, 4, 4, 4]}
        c={[7, 9, 9, 9]}
        mb={['700', '700', '600']}
      >
        <SpeakerImage image={image} alt={name} width="300px" height="300px" />
      </Block>
    </>
  );
};

const TalkDescription = ({ textStyle, textColor, description }) => {
  let lines = [];
  let list;

  {
    description.split('\n').forEach((block, i, blocks) => {
      if (block.startsWith('*')) {
        list = list || [];
        list.push(block.slice(2));
        const nextBlock = blocks[i + 1];
        if (nextBlock == null || !nextBlock.startsWith('*')) {
          lines.push(
            <UnorderList color={textColor} key={`list_${i}`}>
              {list}
            </UnorderList>
          );
          list = undefined;
        }
        return;
      }

      lines.push(
        <BodyText key={i} color={textColor} css={[textStyle]}>
          {block}
        </BodyText>
      );
    });
  }

  return <>{lines}</>;
};

export const SpeakerTalksBlockLeft = ({
  title,
  name,
  twitter,
  image,
  type,
  length,
  description,
  headingColor = 'white',
  textColor = 'white',
  metaColor,
  textStyle = defaultTextStyle,
}) => {
  const [lRef, lTransCss] = useTransitionIn('left');
  const [rRef, rTransCss] = useTransitionIn('right');
  return (
    <>
      <Block
        ref={rRef}
        css={rTransCss}
        w={[6, 4, 3, 4]}
        c={[4, 1, 2, 1]}
        mb={['500', '100']}
      >
        <SpeakerImage
          image={image}
          alt={name}
          color={'#bfbcce'}
          width="300px"
          height="300px"
        />
        <SpeakerHeadingText
          color={textColor}
          mt={'400'}
          fontWeight="400"
          css={theme =>
            css`
              @media (max-width: ${themeGet('breakpoints.0')({ theme })}) {
                display: none;
              }
            `
          }
        >
          by {name}
          {twitter && (
            <>
              <br />
              <MetaText color={metaColor}>
                <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
              </MetaText>
            </>
          )}
        </SpeakerHeadingText>
      </Block>
      <Block
        ref={lRef}
        css={lTransCss}
        w={[12, 8, 8, 8]}
        c={[1, 5, 5, 5]}
        mb={['700', '700', '800']}
      >
        <HeadingText
          color={headingColor}
          css={theme =>
            css`
              @media (max-width: ${themeGet('breakpoints.0')({ theme })}) {
                text-align: center;
              }
            `
          }
        >
          {title}
        </HeadingText>
        <SpeakerHeadingText
          fontWeight="400"
          color={textColor}
          css={theme =>
            css`
              @media (min-width: ${themeGet('breakpoints.0')({ theme })}) {
                display: none;
              }
              @media (max-width: ${themeGet('breakpoints.0')({ theme })}) {
                text-align: center;
              }
            `
          }
        >
          by {name}
          {twitter && (
            <>
              <br />
              <MetaText color={metaColor}>
                <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
              </MetaText>
            </>
          )}
        </SpeakerHeadingText>
        <TalkDescription
          description={description}
          textColor={textColor}
          textStyle={textStyle}
        />
      </Block>
    </>
  );
};

export const SpeakerTalksBlockRight = ({
  title,
  name,
  twitter,
  image,
  type,
  length,
  description,
  headingColor = 'white',
  textColor = 'white',
  metaColor,
  textStyle = defaultTextStyle,
}) => {
  const [lRef, lTransCss] = useTransitionIn('left');
  const [rRef, rTransCss] = useTransitionIn('right');
  return (
    <>
      <Block
        ref={lRef}
        css={lTransCss}
        w={[6, 4, 3, 4]}
        c={[4, 9, 9, 9]}
        mb={['500', '700', '600']}
      >
        <SpeakerImage
          image={image}
          alt={name}
          color={'#bfbcce'}
          width="300px"
          height="300px"
        />
        <SpeakerHeadingText
          color={textColor}
          mt={'400'}
          fontWeight="400"
          css={theme =>
            css`
              @media (max-width: ${themeGet('breakpoints.0')({ theme })}) {
                display: none;
              }
            `
          }
        >
          by {name}
          {twitter && (
            <>
              <br />
              <MetaText color={metaColor}>
                <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
              </MetaText>
            </>
          )}
        </SpeakerHeadingText>
      </Block>
      <Block
        ref={rRef}
        css={rTransCss}
        w={[12, 8, 8, 8]}
        c={[1, 1, 1, 1]}
        mb={['700', '700', '800']}
      >
        <HeadingText
          color={headingColor}
          css={theme =>
            css`
              @media (max-width: ${themeGet('breakpoints.0')({ theme })}) {
                text-align: center;
              }
            `
          }
        >
          {title}
        </HeadingText>
        <SpeakerHeadingText
          color={textColor}
          fontWeight="400"
          css={theme =>
            css`
              @media (min-width: ${themeGet('breakpoints.0')({ theme })}) {
                display: none;
              }
              @media (max-width: ${themeGet('breakpoints.0')({ theme })}) {
                text-align: center;
              }
            `
          }
        >
          by {name}
          {twitter && (
            <>
              <br />
              <MetaText color={metaColor}>
                <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
              </MetaText>
            </>
          )}
        </SpeakerHeadingText>
        <TalkDescription
          description={description}
          textColor={textColor}
          textStyle={textStyle}
        />
      </Block>
    </>
  );
};
