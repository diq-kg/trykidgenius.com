import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Try Kidgenius" keywords={[`daycare`, `childcare`, `saas`]} />
      <Hero />
    </Layout>
  );
}

export default IndexPage;
