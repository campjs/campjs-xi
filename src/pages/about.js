/* @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import { Box, Flex } from '@rebass/emotion';
import { graphql, useStaticQuery } from 'gatsby';
import { Footer, Header } from 'component/navigation';
import { Block, Grid, Section } from 'component/section';
import {
  Anchor,
  BodyText,
  FeatureText,
  HeadingText,
  MetaText,
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
          <FeatureText color="orange400" tin="up">
            About CampJS
          </FeatureText>
          <BodyText tin="up">
            CampJS isn’t a regular conference. It’s time and space to learn new
            things, relax and really connect. Whether you’re a Javascript
            veteran, total newbie, into art, music or hardware, there’s
            something for everyone.
          </BodyText>
          <BodyText tin="up">
            We schedule a unique blend of expert-led content and self-directed
            learning and encourage attendees to run other activities like
            bushwalking, drone flying or knitting.
          </BodyText>
          <BodyText tin="up">
            To get a vibe for the event, check out the videos from previous
            camps or our{' '}
            <a className="anchor" href="http://twitter.com/campjs">
              Twitter page
            </a>
            .
          </BodyText>
        </Block>
      </Section>

      <Box as="section" id="location" bg="gray400">
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
                <HeadingText color="orange100">Lord Somers Camp</HeadingText>
                <BodyText color="gray100">
                  We lodge at{' '}
                  <a
                    className="anchor"
                    href="http://www.lordsomerscamp.com/"
                  >
                    Lord Somers Camp
                  </a> which is located approximately a one hour drive from Melbourne, on the southern side of the Mornington Peninsula in Victoria.
                </BodyText>
                <BodyText color="gray100">
                  We are perfectly located overlooking the beach and nestled in the local wilderness of Somers.
                </BodyText>
                <BodyText color="gray100">
                  Surrounding our campsite the local area hosts fantastic wildlife parks, natural and indigenous vegetation, hot springs, local wineries, and heaps more.
                </BodyText>
                <BodyText color="gray100">
                  Come and discover our fantastic campsite, visit us at the{' '}
                  <a
                    className="anchor"
                    title="Directions - Google Maps"
                    href="https://goo.gl/maps/QAKq6"
                  >
                    corner of Lord Somers Road & Parklands Avenue, Somers, Victoria, 3297
                  </a>{' '}.
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

      {/* <Section id="transport" isGrid bg="orange400">
        <Block w={[12, 8, 6, 4]} c={[1, 3, 3, 3]}>
          <HeadingText color="gray100">Getting there & back</HeadingText>
          <BodyText color="gray100">
            There will be a chartered ferry that will take everyone to the
            retreat leaving <b>exactly at 6pm on Friday 30th August</b> from the
            wharf opposite Brooklyn train station. Despite what Google says you
            cannot drive to Broken Bay Sport and Rec Centre.
          </BodyText>
          <BodyText color="gray100">
            There is only one ferry, so it's important that we reach Brooklyn
            train station on time and use the time to socialise or visit the
            local bottleshop to stock up on snacks or drinks before the camp.
            The parking at the train station is limited so we recommend you to
            catch a train.
          </BodyText>
          <BodyText color="gray100">
            There will be two ferries bringing you back to Brooklyn Train
            Station. A small ferry will leave Sunday, 1st September at 5pm (to
            have you back by ~6pm), spots on this ferry are limited. A larger
            ferry will leave Broken Bay at 10am (Brooklyn by ~11am) on Monday
            2nd September. Please book your flights and plan your trip
            accordingly.
          </BodyText>
          <BodyText color="gray100" mb="100">
            We recommend you use NSW Transport endorsed website{' '}
            <a
              className="anchor"
              href="https://transportnsw.info/"
              title="Transport Info"
            >
              https://transportnsw.info/
            </a>{' '}
            to plan your trip well in advance.
          </BodyText>
        </Block>
      </Section> */}

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
              href="https://github.com/campjs/campjs-xi/issues"
            >
              Github issue tracker
            </a>{' '}
            for the latest camp.
          </BodyText>
          <BodyText color="gray100" mb="100">
            Diversity tickets can be bought on the{' '}
            <a
              className="anchor"
              href="https://ti.to/campjs/campjs-xi"
              title="Visit the CampJS XI ticket page to purchase Diversity Tickets"
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

      <Section id="volunteer" bg="gray400">
        <Grid rowGap="space.600">
          <Block w={[12, 8, 6, 6]} c={[1, 3, 1, 1]}>
            <HeadingText color="gray100">Get involved</HeadingText>
            <BodyText color="yellow100">
              We organise as much of CampJS in the open as possible on{' '}
              <a
                className="anchor"
                href="https://github.com/campjs/campjs-xi/issues"
              >
                Github issues
              </a>
              .
            </BodyText>
            <BodyText color="yellow100">
              If you have a question or would like to suggest an improvement for
              the meetup,{' '}
              <Anchor
                href="https://github.com/campjs/campjs-xi/issues"
                title="Suggest an improvement"
              >
                open a new issue
              </Anchor>
              . We'll respond within a few hours.
            </BodyText>
          </Block>
          <Block w={[12, 8, 6, 6]} c={[1, 3, 7, 7]}>
            <HeadingText color="gray100">Volunteer</HeadingText>
            <BodyText color="yellow100" mb="100">
              We’re always looking for people to help out. To find the right for
              you, just fill out{' '}
              <Anchor
                href="https://docs.google.com/forms/d/e/1FAIpQLSfDTXIvVdgskbl_NgkW_E2UgDOLOGWm_E-79YuPGKAdFfDjHA/viewform"
                title="Volunteer Form"
              >
                our helpful Volunteer form
              </Anchor>{' '}
              and we’ll get in touch.
            </BodyText>
          </Block>
        </Grid>
      </Section>

      <Footer />
    </Stylings>
  );
};

export default AboutPage;
