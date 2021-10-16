import AuthorPresentation from 'components/AuthorPresentation/AuthorPresentation';
import Benefits from 'components/Benefits';
import Contact from 'components/Contact';
import CustomerStories from 'components/CustomerStories/CustomerStories';
import Faqs from 'components/Faqs';
import Modules from 'components/Modules';
import SocialMedia from 'components/SocialMedia';
import { getCourseBenefits, getFaqs, getPublicModules } from 'lib/repository/modulesRepository';
import { CourseBenefits, Faq, Module } from 'lib/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import Presentation from '../components/Presentation';

export const getStaticProps: GetStaticProps = async () => {
  const publicModules = await getPublicModules();
  const benefitsList = await getCourseBenefits();
  const faqsList = await getFaqs();
  return {
    props: { publicModules, benefitsList, faqsList },
    revalidate: 1000,
  };
};

type Props = {
  publicModules: Module[],
  benefitsList: CourseBenefits[],
  faqsList: Faq[],
}

const Home: FC<Props> = ({ publicModules, benefitsList, faqsList }: Props) => (
  <>
    <Head>
      <title>Trading para Ti</title>
      <meta name="description" content="Compra el mejor curso de trading" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Presentation />
      <Benefits benefitsList={benefitsList} />
      <Modules modules={publicModules} />
      <CustomerStories />
      <Faqs faqsList={faqsList} />
      <AuthorPresentation />
      <SocialMedia />
      <Contact />
    </main>
  </>
);

export default Home;
