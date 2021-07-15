import CustomerStories from 'components/CustomerStories/CustomerStories';
import CourseView from 'components/CourseView';
import Head from 'next/head';
import { FC } from 'react';
import UserReview from 'components/UserReview';
import { GetStaticProps } from 'next';
import { Module } from 'lib/types';
import { getModules } from 'lib/repository/modulesRepository';

export const getStaticProps: GetStaticProps = async () => {
  const modules = await getModules();
  return {
    props: { modules },
    revalidate: 1000,
  };
};

type Props = {
  modules: Module[],
}

const Course: FC<Props> = ({ modules }: Props) => (
  <>
    <Head>
      <title>Trading para Ti</title>
      <meta name="description" content="El mejor curso de trading" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <CourseView modulesList={modules} />
      <CustomerStories />
      <UserReview />
    </main>
  </>
);

export default Course;
