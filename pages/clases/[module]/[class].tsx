import CustomerStories from 'components/CustomerStories/CustomerStories';
import CourseView from 'components/CourseView';
import Head from 'next/head';
import { FC } from 'react';
import UserReview from 'components/UserReview';

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
      <UserReview />
    </main>
  </>
);

export default Course;
