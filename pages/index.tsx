import Benefits from 'components/Benefits';
import CustomerStories from 'components/CustomerStories/CustomerStories';
import Modules from 'components/Modules';
import Head from 'next/head';
import { FC } from 'react';
import Presentation from '../components/Presentation';

const Home: FC = () => (
  <>
    <Head>
      <title>Trading para Ti</title>
      <meta name="description" content="Compra el mejor curso de trading" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Presentation />
      <Benefits />
      <Modules />
      <CustomerStories />
    </main>
  </>
);

export default Home;
