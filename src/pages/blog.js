import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Blog() {
  return (
    <Layout>
      <SEO title="Blog - Try KidGenius" />
      <div className="flex pt-16 pl-3">
        <div className="flex flex-col">
          <div className="pb-1">
            <span className="font-mono">Date</span>
          </div>
          <h1 className="font-brand-bold text-2xl">Post Title</h1>
          <div className="pt-2 text-xl">Above the fold content.</div>
        </div>
      </div>
    </Layout>
  );
}
