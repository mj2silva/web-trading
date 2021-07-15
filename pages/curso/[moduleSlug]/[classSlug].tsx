import CustomerStories from 'components/CustomerStories/CustomerStories';
import Head from 'next/head';
import { FC, useEffect } from 'react';
import UserReview from 'components/UserReview';
import { useRouter } from 'next/router';

const Course: FC = () => {
  const { moduleSlug, classSlug } = useRouter().query;
  useEffect(() => {
    console.log(moduleSlug, classSlug);
  }, [moduleSlug, classSlug]);
  return (
    <>
      <Head>
        <title>Trading para Ti</title>
        <meta name="description" content="El mejor curso de trading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CustomerStories />
        <UserReview />
      </main>
    </>
  );
};

export default Course;
