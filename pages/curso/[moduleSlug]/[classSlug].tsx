import CustomerStories from 'components/CustomerStories/CustomerStories';
import Head from 'next/head';
import {
  FC, useContext, useEffect, useState,
} from 'react';
import UserReview from 'components/UserReview';
import { useRouter } from 'next/router';
import { UserContext } from 'components/Layout/UserProvider';
import { ModuleClass } from 'lib/types';
import CourseView from 'components/CourseView';

const Course: FC = () => {
  const { moduleSlug, classSlug } = useRouter().query;
  const { user, userModules } = useContext(UserContext);
  const [moduleClassData, setModuleClassData] = useState<ModuleClass>();

  useEffect(() => {
    if (user) {
      const currentModule = userModules?.filter((module) => module.slug === moduleSlug);
      if (currentModule && currentModule?.length > 0) {
        const currentClass = currentModule[0].classes?.filter((
          moduleClass,
        ) => moduleClass.slug === classSlug)[0];
        setModuleClassData(currentClass);
      }
    }
  }, [moduleSlug, classSlug, user, userModules]);
  return (
    <>
      <Head>
        <title>Trading para Ti</title>
        <meta name="description" content="El mejor curso de trading" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CourseView moduleClass={moduleClassData} />
        <CustomerStories />
        <UserReview />
      </main>
    </>
  );
};

export default Course;
