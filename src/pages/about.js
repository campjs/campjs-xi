import React from 'react';
import { css } from 'emotion';
import { Box, Flex } from '@rebass/emotion';
import { graphql, useStaticQuery } from 'gatsby';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Footer, Header } from 'component/navigation';
import { Block, Grid, Section } from 'component/section';
import {
  BodyText,
  FeatureText,
  HeadingText,
  MetaText,
  UnorderList,
} from 'component/text';
import { Stylings } from 'component/providers';
import SEO from 'component/seo';

mapboxgl.accessToken =
  'pk.eyJ1IjoibG9rbGFhbiIsImEiOiJjanRzY21lb3Qwb2RxNDRsYWF2aWptaDJqIn0.8wlgn9L2GEOh9_aTTWxShw';

const styles = {
  mapBox: css`
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
  `,
};

let map;
const setupMapBox = (el, campIconUrl, ferryIconUrl) => {
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
  map.scrollZoom.disable();

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

  let enabled = false;
  const listenForFocus = () => {
    if (enabled) return;
    map.scrollZoom.enable();
    enabled = true;
  };
  el.addEventListener('click', listenForFocus);

  return () => {
    el.removeEventListener('click', listenForFocus);
  };
};

const AboutPage = () => {
  const { campIcon, ferryIcon } = useStaticQuery(
    graphql`
      query {
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
  React.useEffect(() => {
    const cleanup = setupMapBox(
      mapRef.current,
      campIcon.publicURL,
      ferryIcon.publicURL
    );
    return () => {
      cleanup();
    };
  }, [mapRef.current, campIcon.publicURL, ferryIcon.publicURL]);

  return (
    <Stylings>
      <SEO />
      <Section isGrid isAlt renderPreblock={() => <Header />}>
        <Block w={[12, 8, 8, 8]} c={[1, 3, 3, 1]}>
          <FeatureText>About CampJS</FeatureText>
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

      <Flex
        flexDirection="row"
        alignItems="stretch"
        flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
      >
        <Box
          order={[0, 0, 1, 1]}
          as="section"
          bg="gray400"
          flex="1 1 30%"
          py="700"
          px="500"
        >
          <Grid>
            <Block w={[12, 8, 12, 12]} c={[1, 3, 1, 1]}>
              <HeadingText color="orange100">Broken Bay</HeadingText>
              <BodyText color="gray100">
                We camp at Broken Bay Sports & Recreation Centre.
              </BodyText>
            </Block>
          </Grid>
        </Box>
        <Box order={[1, 1, 0, 0]} className={styles.mapBox}>
          <div ref={mapRef} />
        </Box>
      </Flex>

      <Section isGrid isAlt>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 3, 3]}>
          <HeadingText>What's included</HeadingText>
        </Block>
        <Block mb="600" w={[12, 8, 4, 4]} c={[1, 3, 7, 7]}>
          <UnorderList>
            {[
              <>
                Meals & snack
                <br />
                <MetaText>
                  *Please note any dietary requirements on your registration
                  form.
                </MetaText>
              </>,
              <>
                Juice, soft drinks & other beverages
                <br />
                <MetaText>
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
          <HeadingText>What to bring</HeadingText>
        </Block>
        <Block w={[12, 8, 4, 4]} c={[1, 3, 7, 7]}>
          <UnorderList>
            {[
              'Sleeping bag & pillow',
              'Warm cloths',
              <>
                Toiletries
                <br />
                <MetaText>*No soap or hygeine products are provided.</MetaText>
              </>,
              'Medications',
              "Earplugs if you're a light sleeper",
              'Snacks to share',
              'Electronics & chargers',
              'Board / card games',
              <>
                A good attitude
                <br />
                <MetaText>*Make sure to read out Code of Conduct.</MetaText>
              </>,
            ]}
          </UnorderList>
        </Block>
      </Section>

      <Section isGrid>
        <Block w={[12, 8, 6, 4]} c={[1, 3, 3, 3]}>
          <HeadingText>
            Diversity &<br />
            Inclusivity
          </HeadingText>
          <BodyText>
            CampJS values the diversity and inclusion of under-represented and
            marginalised people in tech.
          </BodyText>
          <BodyText>
            We work hard to make the camp a friendly and welcoming environment.
            and do not tolerate discrimination or harrassment of any kind.
          </BodyText>
          <BodyText>
            You can see the range of initiatives we’re working on, and suggest
            others on the Github issue tracker for the latest camp.
          </BodyText>
          <BodyText>
            Buy diversity tickets for underrepresented groups here.
          </BodyText>
        </Block>
      </Section>

      <Section isGrid isAlt>
        <Block w={[12, 8, 6, 4]} c={[1, 3, 5, 7]}>
          <HeadingText>Accessibility</HeadingText>
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
          <BodyText>
            Please contact us if you require assistance or additional facilities
            so that we can support your attendance.
          </BodyText>
        </Block>
      </Section>

      <Section>
        <Grid rowGap="space.600">
          <Block w={[12, 8, 6, 6]} c={[1, 3, 1, 1]}>
            <HeadingText>Get involved</HeadingText>
            <BodyText>
              Issue tracker: We organise as much of CampJS in the open as
              possible on Github issues.
            </BodyText>
            <BodyText>
              Slack: Access Slack chat on WeAllJS using /join-private #campjs
            </BodyText>
          </Block>
          <Block w={[12, 8, 6, 6]} c={[1, 3, 7, 7]}>
            <HeadingText>Volunteer</HeadingText>
            <BodyText>
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
