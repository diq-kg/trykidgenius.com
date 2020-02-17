import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Try Kidgenius" keywords={[`daycare`, `childcare`, `saas`]} />

      <div className="flex">Content</div>
    </Layout>
  );
}

export default IndexPage;
