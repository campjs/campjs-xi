import React from 'react';

import SatelliteLayout from 'layout/satellite';
import SEO from 'component/seo';

const NotFoundPage = () => (
  <SatelliteLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </SatelliteLayout>
);

export default NotFoundPage;
