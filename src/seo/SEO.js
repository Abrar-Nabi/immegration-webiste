import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title, description = "Best immigration services in your city." }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default SEO;
