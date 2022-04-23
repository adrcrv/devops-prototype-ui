import React from 'react';
import Head from 'next/head';
import { elementType, object } from 'prop-types';
import AppBarContainer from '../app/modules/app-bar/app-bar.container';
import FooterContainer from '../app/modules/footer/footer.container';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DevOps TCC</title>
        <meta name="description" content="DevOps TCC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBarContainer />
      <Component {...pageProps} />
      <FooterContainer />
    </>
  );
}

MyApp.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};

export default MyApp;
