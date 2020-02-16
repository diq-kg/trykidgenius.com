import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={[`daycare`, `childcare`, `saas`]} />

      <div className="flex">Goole</div>
    </Layout>
  );
}

export default IndexPage;
