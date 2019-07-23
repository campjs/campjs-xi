import React from 'react';
import SEO from 'component/seo';
import { Stylings } from 'component/providers';
import Content from 'component/teaser/content';

const TeaserPage = () => (
  <Stylings>
    <SEO title="Teaser" />
    <Content />
  </Stylings>
);

export default TeaserPage;
