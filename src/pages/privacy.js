import React from 'react';
import Layout from '../components/layout';
import Pad from '../components/pad';

function Privacy() {
  return (
    <Layout>
      <Pad>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-brand-bold">Privacy</h1>
          <h2 className="font-bold">
            KidGenius is committed to respecting your privacy as a visitor of
            this site.
          </h2>
          <div className="w-2/3 sm:w-3/4 pt-8">
            <h3 className="text-2xl">Collection of Information</h3>
            <p className="pt-2">
              This site automatically recognizes visitors’ domain names and IP
              addresses (the number assigned to computers on the Internet). No
              personal information about you is revealed in this process. The
              Site may also gather "traffic data" that may be helpful for
              marketing purposes or for improving the site in general. The Site
              uses Google Analytics (and other third-party tools) to analyze how
              people use the Site. Information about your visit is collected and
              transmitted to 3rd parties, where it is then analyzed and compiled
              into statistical reports. This information is collected to allow
              content, the service and its marketing to be optimized to better
              meet the needs of customers and the Site.
            </p>
            <h3 className="text-2xl pt-6">Cookies</h3>
            <p className="pt-2">
              From time to time, we may use the standard "cookies" feature of
              major browser applications that allows us to store a small piece
              of data on your computer about your visit to our Web site. Cookies
              help us learn which areas of our site are useful and which areas
              need improvement. You can choose whether to accept cookies by
              changing the settings on your browser. However, if you choose to
              disable this function, your experience at our Web site may be
              diminished and some features may not work as they were intended.{' '}
            </p>
            <h3 className="text-2xl pt-6">Use of Collected Information</h3>
            <p className="pt-2">
              We reserve the right, at any time, to add to, change, update, or
              modify this Policy, simply by posting such change, update, or
              modification on the Site and without any other notice to you. Any
              such change, update, or modification will be effective immediately
              upon posting on the Site. It is your responsibility to review this
              Policy from time to time to ensure that you continue to agree with
              all of its terms.
            </p>
            <p className="pt-4">
              We use anonymous information to analyze our Site traffic. In
              addition, we may use anonymous IP addresses to help diagnose
              problems with our server, to administer our site, or to display
              the content according to your preferences. Traffic and transaction
              information may also be shared with business partners and
              advertisers on an aggregate and anonymous basis.
            </p>
            <p className="pt-4">
              We may use cookies to deliver content specific to your interests
              or for other purposes. Promotions or advertisements displayed on
              our site may contain cookies.
            </p>
            <p className="pt-4">
              We may disclose personally identifiable information if required to
              do so by law or in the good-faith belief that such action is
              necessary to (1) conform to the edicts of the law, (2) protect and
              defend the rights or property of users of the Site, or (3) act
              under exigent circumstances to protect the safety of the public or
              users of the Site.
            </p>
            <p className="pt-4">
              Information collected may be stored indefinitely.
            </p>
            <h3 className="text-2xl pt-6">
              Changes in this Privacy Policy Statement
            </h3>
            <p className="pt-2">
              We reserve the right, at any time, to add to, change, update, or
              modify this Policy, simply by posting such change, update, or
              modification on the Site and without any other notice to you. Any
              such change, update, or modification will be effective immediately
              upon posting on the Site. It is your responsibility to review this
              Policy from time to time to ensure that you continue to agree with
              all of its terms.
            </p>
          </div>
        </div>
      </Pad>
    </Layout>
  );
}

export default Privacy;
