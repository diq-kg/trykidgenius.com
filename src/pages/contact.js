import React from 'react';

import Layout from '../components/layout';
import Pad from '../components/pad';
import SEO from '../components/seo';

export default function ContactUs() {
  const title = 'KidGenius | Contact our daycare management software team';
  const desc =
    'If you have any questions about KidGenius daycare management software, give us a call.';
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <Pad>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-brand-bold pb-4">
            Have questions? Need help?
          </h1>
          <h2 className="text-2xl font-brand">
            Reach us via live chat or give us a ring at{' '}
            <a href="tel:+18332940005" className="text-brand-primary">
              1-833-294-0005
            </a>
          </h2>
        </div>
      </Pad>
    </Layout>
  );
}
