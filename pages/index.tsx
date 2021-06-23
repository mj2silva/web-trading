import Benefits from 'components/Benefits';
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
    </main>
  </>
);

export default Home;
