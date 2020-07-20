import React from 'react';

import Layout from '../components/layout';
import Pad from '../components/pad';

export default function ContactUs() {
  return (
    <Layout>
      <Pad>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-brand-bold pb-4">
            Have questions? Need help?
          </h1>
          <h2 className="text-2xl font-brand">
            Reach us via live chat or give us a ring at{' '}
            <a href="tel:+18332940005" className="text-brand-primary">1-833-294-0005</a>
          </h2>
        </div>
      </Pad>
    </Layout>
  );
}
