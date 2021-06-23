import CustomerStories from 'components/CustomerStories/CustomerStories';
import CourseView from 'components/Layout/CourseView';
import Head from 'next/head';
import { FC } from 'react';

const Course: FC = () => (
  <>
    <Head>
      <title>Trading para Ti</title>
      <meta name="description" content="El mejor curso de trading" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <CourseView />
      <CustomerStories />
    </main>
  </>
);

export default Course;
