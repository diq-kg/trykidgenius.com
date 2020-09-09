import React from 'react';
import Layout from '../components/layout';
import Pad from '../components/pad';
import SEO from '../components/seo';

export default function FAQ() {
  const title = 'KidGenius | Childcare management software FAQ';
  const desc =
    'Frequently asked questions about KidGenius childcare management software.';
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <Pad>
        <div className="flex">
          <h1>FAQs</h1>
        </div>
      </Pad>
    </Layout>
  );
}
