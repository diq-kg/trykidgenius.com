import React, { useState, useEffect } from 'react';

import { track } from '../util/mixpanel';
import { demo } from '../components/urls';
import Layout from '../components/layout';
import SEO from '../components/seo';

import Hero from '../components/hero';
import Features from '../components/features';
import Pricing from '../components/pricing';
import Pad from '../components/pad';
import Try from '../components/try';
import Quotes from '../components/quotes';
import Faq from '../components/faq';
import Model from '../components/modal';

function addBodyClass(className) {
  document.body.classList.add(className);
}

function removeBodyClass(className) {
  document.body.classList.remove(className);
}

function IndexPage() {
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      addBodyClass('modal-open');
    } else {
      removeBodyClass('modal-open');
    }
  });

  function tryDemo(payload) {
    track('Try Demo', payload, () => (window.location.href = demo));
  }

  function closeModal() {
    setModal(false);
    track('Cancel Try Live Demo Modal');
  }

  function openModal() {
    setModal(true);
  }

  const title = 'KidGenius | Childcare management software';
  const desc =
    'KidGenius is the easiest way to manage and grow your childcare';

  return (
    <Layout>
      {showModal ? <Model close={closeModal} confirm={tryDemo} /> : ''}
      <SEO title={title} description={desc} />
      <Pad>
        <Hero try={openModal} />
      </Pad>
      <Pad>
        <Features id="features" />
      </Pad>
      <Pad>
        <Quotes />
      </Pad>
      <Pad>
        <Pricing id="pricing" />
      </Pad>
      <Pad>
        <Faq id="faq" />
      </Pad>
      <Pad>
        <Try />
      </Pad>
    </Layout>
  );
}

export default IndexPage;
