import React from 'react';

import {Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Pad from '../components/pad';

function NotFoundPage() {
  return (
    <Layout>
      <Pad>
        <SEO title="404: Not found" />
        <div className="flex flex-col justify-center items-center p-10">
          <h2 className="text-2xl font-brand-bold">
            Looks like this page does not exist :(
          </h2>
          <Link to="/" className="p-6 font-bold text-brand-primary">Go Home</Link>
        </div>
      </Pad>
    </Layout>
  );
}

export default NotFoundPage;
