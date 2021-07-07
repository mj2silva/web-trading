/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { FC } from 'react';

import '../styles/globals.scss';

import UserProvider from 'components/Layout/UserProvider';
import Layout from '../components/Layout/Layout';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </UserProvider>
);
export default MyApp;
