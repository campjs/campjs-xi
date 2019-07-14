import React from 'react';
import SEO from 'component/seo';
import { Stylings } from 'component/providers';
import Content from 'component/teaser/content';

const IndexPage = () => (
  <Stylings>
    <SEO />
    <Content />
  </Stylings>
);

export default IndexPage;
