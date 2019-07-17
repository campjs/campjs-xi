/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Box, Flex } from '@rebass/emotion';
import { graphql, useStaticQuery } from 'gatsby';
import { Footer, Header } from 'component/navigation';
import { Block, Grid, Section } from 'component/section';
import {
  BodyText,
  FeatureText,
  HeadingText,
  MetaText,
  SubHeadingText,
  UnorderList,
} from 'component/text';
import { Stylings } from 'component/providers';
import SEO from 'component/seo';

let map;
const setupMapBox = (mapboxgl, el, campIconUrl, ferryIconUrl) => {
  if (!el) return;
  if (map) return;
  map = new mapboxgl.Map({
    container: el,
    style: 'mapbox://styles/loklaan/cjy2terph22ia1crz06lg8vag',
    attributionControl: false,
    center: [151.255, -33.561],
    zoom: 12.3,
    bearing: 1.67,
    pitch: 32.5,
  });

  map.on('load', async () => {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [151.2274484, -33.5461374], // ferry start
              [151.238287, -33.545867],
              [151.247345, -33.549908], // ferry stop
              [151.241154, -33.55584],
              [151.246289, -33.561975],
              [151.256966, -33.573119],
              [151.262832, -33.571412],
              [151.262925, -33.564066], // camp
            ],
          },
        },
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#FFE0D7',
        'line-width': 3,
      },
    });

    const addIcon = (iconUrl, lngLat) => {
      const iconEl = document.createElement('div');
      iconEl.className = 'marker';
      iconEl.style.backgroundImage = `url(${iconUrl})`;
      iconEl.style.width = `19px`;
      iconEl.style.height = `19px`;
      new mapboxgl.Marker(iconEl).setLngLat(lngLat).addTo(map);
    };

    addIcon(campIconUrl, [151.262925, -33.563266]);
    addIcon(ferryIconUrl, [151.2274484, -33.5451374]);
  });
};

const AboutPage = () => {
  const { campMap, campIcon, ferryIcon } = useStaticQuery(
    graphql`
      query {
        campMap: file(relativePath: { eq: "campjsmap.png" }) {
          publicURL
        }
        campIcon: file(relativePath: { eq: "map-icons/campsite-15.svg" }) {
          publicURL
        }
        ferryIcon: file(relativePath: { eq: "map-icons/ferry-15.svg" }) {
          publicURL
        }
      }
    `
  );

  const mapRef = React.useRef();

  const onMapClick = React.useCallback(async () => {
    const mapboxCssPromise = import('mapbox-gl');
    const { default: mapboxgl } = await import('mapbox-gl');
    mapboxgl.accessToken =
      'pk.eyJ1IjoibG9rbGFhbiIsImEiOiJjanRzY21lb3Qwb2RxNDRsYWF2aWptaDJqIn0.8wlgn9L2GEOh9_aTTWxShw';
    await mapboxCssPromise;

    setupMapBox(
      mapboxgl,
      mapRef.current,
      campIcon.publicURL,
      ferryIcon.publicURL
    );
  }, [mapRef.current, campIcon.publicURL, ferryIcon.publicURL]);

  return (
    <Stylings>
      <SEO title="About the Code Retreat" />
      <Section isGrid bg="yellow100" renderPreblock={() => <Header />}>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 1]}>
          <FeatureText color="orange400">About CampJS</FeatureText>
          <BodyText>
            CampJS isn’t a regular conference. It’s time and space to learn new
            things, relax and really connect. Whether you’re a Javascript
            veteran, total newbie, into art, music or hardware, there’s
            something for everyone.
          </BodyText>
          <BodyText>
            We schedule a unique blend of expert-led content and self-directed
            learning and encourage attendees to run other activities like
            bushwalking, drone flying or knitting.
          </BodyText>
          <BodyText>
            To get a vibe for the event, check out the videos from previous
            camps.
          </BodyText>
        </Block>
      </Section>

      <Box id="location" bg="gray400">
        <Flex
          flexDirection="row"
          alignItems="stretch"
          flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
          css={css`
            max-width: 1440px;
            margin: 0 auto;
          `}
        >
          <Box
            order={[0, 0, 1, 1]}
            as="section"
            flex={['1 1 100%', '1 1 30%']}
            py="700"
            px="500"
          >
            <Grid>
              <Block w={[12, 8, 12, 12]} c={[1, 3, 1, 1]}>
                <HeadingText color="orange100">Broken Bay</HeadingText>
                <BodyText color="gray100">
                  We lodge at{' '}
                  <a
                    className="anchor"
                    href="https://sport.nsw.gov.au/facilities/brokenbay/tour"
                  >
                    Broken Bay Sports & Rec Centre
                  </a>
                  .
                </BodyText>
                <BodyText color="gray100">
                  It is an hours drive north of Sydney, or a 2-stop{' '}
                  <a
                    className="anchor"
                    href="https://www.google.com/maps/dir/Sydney+Airport+(SYD),+Sydney+NSW/-33.546003,151.2274676/@-33.7359813,151.0053596,11z/data=!3m1!4b1!4m8!4m7!1m5!1m1!1s0x6b12b0f11b3383db:0xafdf355d5a4b6577!2m2!1d151.1752764!2d-33.9399228!1m0"
                  >
                    train ride
                  </a>{' '}
                  that stops at the Ferry that will take everyone over to the
                  retreat.
                </BodyText>
              </Block>
            </Grid>
          </Box>
          <Box
            onClick={onMapClick}
            order={[1, 1, 0, 0]}
            css={css`
              outline: none !important;
              overflow: hidden;
              cursor: pointer;
              background-repeat: no-repeat;
              background-position: center;
              background-image: url(${campMap.publicURL});
              flex: 1 1 70%;
              display: flex;
              width: 100%;
              min-width: 50%;
              min-height: 30vh;
              justify-content: stretch;
              align-items: stretch;
              & > * {
                flex: 1 0 0;
              }
            `}
          >
            <div ref={mapRef} />
          </Box>
        </Flex>
      </Box>

      <Section id="checklist" isGrid bg="yellow100">
        <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
          <HeadingText color="orange400">What's included</HeadingText>
        </Block>
        <Block mb="600" w={[12, 8, 4, 4]} c={[1, 3, 7, 7]}>
          <UnorderList color="pink400">
            {[
              <>
                Meals & snacks
                <br />
                <MetaText color="tan200">
                  *Please note any dietary requirements on your registration
                  form.
                </MetaText>
              </>,
              <>
                Juice, soft drinks & other beverages
                <br />
                <MetaText color="tan200">
                  *You may bring a personal supply of BYO alcohol but you are
                  expected to drink responsibily. You may be asked to leave if
                  your behaviour is affecting other campers, aren't complying
                  with an organiser's request or generally aren't upholding the
                  Code of Conduct.
                </MetaText>
              </>,
              'Coffee (Pod machine) & tea',
              'Power & limited internet',
              'Excellent company to socialise with and learn from',
            ]}
          </UnorderList>
        </Block>

        <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
          <HeadingText color="tan100">What to bring</HeadingText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]}>
          <UnorderList color="pink400">
            {[
              'Sleeping bag & pillow',
              'Warm cloths',
              <>
                Toiletries
                <br />
                <MetaText color="tan200">
                  *No soap or hygeine products are provided.
                </MetaText>
              </>,
              'Medications',
              "Earplugs if you're a light sleeper",
              'Snacks to share',
              'Electronics & chargers',
              'Board / card games',
              <>
                A good attitude
                <br />
                <MetaText color="tan200">
                  *Make sure to read out Code of Conduct.
                </MetaText>
              </>,
            ]}
          </UnorderList>
        </Block>
      </Section>

      <Section id="diversity" isGrid bg="orange400">
        <Block w={[12, 8, 6, 4]} c={[1, 3, 3, 3]}>
          <HeadingText color="gray100">
            Diversity &<br />
            Inclusivity
          </HeadingText>
          <BodyText color="gray100">
            CampJS values the diversity and inclusion of under-represented and
            marginalised people in tech.
          </BodyText>
          <BodyText color="gray100">
            We work hard to make the camp a friendly and welcoming environment.
            and do not tolerate discrimination or harrassment of any kind.
          </BodyText>
          <BodyText color="gray100">
            You can see the range of initiatives we’re working on, and suggest
            others on the{' '}
            <a
              className="anchor"
              href="https://github.com/campjs/campjs-x/issues"
            >
              Github issue tracker
            </a>{' '}
            for the latest camp.
          </BodyText>
          <BodyText color="gray100" mb="100">
            Diversity tickets can be bought on the{' '}
            <a
              className="anchor"
              href="https://ti.to/campjs/campjs-x"
              title="Visit the CampJS X ticket page to find Diversity Tickets"
            >
              Tickets page
            </a>
            .
          </BodyText>
        </Block>
      </Section>

      <Section id="a11y" isGrid bg="yellow100">
        <Block w={[12, 8, 6, 4]} c={[1, 3, 5, 7]}>
          <HeadingText color="orange400">Accessibility</HeadingText>
          <BodyText>
            We do our best to make CampJS accessible to all. Our transport and
            venue providers have accessibility options available including
            wheelchair accessible buses, ramps, shower chairs and accessible
            bathrooms.
          </BodyText>
          <BodyText>
            The venue provides ramps, accessible bathrooms and shower chairs and
            welcomes guide dogs.
          </BodyText>
          <BodyText mb="100">
            Please{' '}
            <a className="anchor" href="mailto:organisers-team@campjs.com">
              contact us
            </a>{' '}
            if you require assistance or additional facilities so that we can
            support your attendance.
          </BodyText>
        </Block>
      </Section>

      <Section id="volunteer" bg="orange100">
        <Grid rowGap="space.600">
          <Block w={[12, 8, 6, 6]} c={[1, 3, 1, 1]}>
            <SubHeadingText color="pink400">Get involved</SubHeadingText>
            <BodyText color="pink300">
              Issue tracker: We organise as much of CampJS in the open as
              possible on{' '}
              <a
                className="anchor"
                href="https://github.com/campjs/campjs-x/issues"
              >
                Github issues
              </a>
              .
            </BodyText>
          </Block>
          <Block w={[12, 8, 6, 6]} c={[1, 3, 7, 7]}>
            <SubHeadingText color="pink400">Volunteer</SubHeadingText>
            <BodyText color="pink300" mb="100">
              We’re always looking for people to help out, if you can’ find the
              right jobs for you, just fill out this form and we’ll get in
              touch.
            </BodyText>
          </Block>
        </Grid>
      </Section>

      <Footer />
    </Stylings>
  );
};

export default AboutPage;
