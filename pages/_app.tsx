/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { FC } from 'react';

import '../styles/globals.scss';

import Layout from '../components/Layout/Layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
export default MyApp;
