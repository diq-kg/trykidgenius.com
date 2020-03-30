import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import Features from '../components/features';
import Pricing from '../components/pricing';
import Pad from '../components/pad';
import Try from '../components/try';
import Quotes from '../components/quotes';
import Faq from '../components/faq';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Try Kidgenius" keywords={[`daycare`, `childcare`, `saas`]} />
      <Pad>
        <Hero />
      </Pad>
      <Pad>
        <Features id="features" />
      </Pad>
      <Pad>
        <Pricing id="pricing" />
      </Pad>
      <Pad>
        <Faq id="faq" />
      </Pad>
      <Pad>
        <Quotes />
      </Pad>
      <Pad>
        <Try />
      </Pad>
    </Layout>
  );
}

export default IndexPage;
