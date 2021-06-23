import AuthorPresentation from 'components/AuthorPresentation';
import Benefits from 'components/Benefits';
import CustomerStories from 'components/CustomerStories/CustomerStories';
import Faqs from 'components/Faqs';
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
      <Faqs />
      <AuthorPresentation />
    </main>
  </>
);

export default Home;
