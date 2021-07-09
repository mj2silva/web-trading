import AuthorPresentation from 'components/AuthorPresentation';
import Benefits from 'components/Benefits';
import Contact from 'components/Contact';
import CustomerStories from 'components/CustomerStories/CustomerStories';
import Faqs from 'components/Faqs';
import Modules from 'components/Modules';
import SocialMedia from 'components/SocialMedia';
import { getPublicModules } from 'lib/repository/modulesRepository';
import { Module } from 'lib/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import Presentation from '../components/Presentation';

export const getStaticProps: GetStaticProps = async () => {
  const publicModules = await getPublicModules();
  return {
    props: { publicModules },
    revalidate: 1000,
  };
};

type Props = {
  publicModules: Module[],
}

const Home: FC<Props> = ({ publicModules }: Props) => (
  <>
    <Head>
      <title>Trading para Ti</title>
      <meta name="description" content="Compra el mejor curso de trading" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Presentation />
      <Benefits />
      <Modules modules={publicModules} />
      <CustomerStories />
      <Faqs />
      <AuthorPresentation />
      <SocialMedia />
      <Contact />
    </main>
  </>
);

export default Home;
