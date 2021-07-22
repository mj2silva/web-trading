import { FC } from 'react';
import styles from '@styles/LoadingScreen.module.scss';
import Image from 'next/image';
import Head from 'next/head';

const Loading: FC = () => (
  <div className={styles.LoadingScreen_Container}>
    <Head>
      <title>Trading Para Ti | Cargando...</title>
    </Head>
    <div className={styles.LoadingScreen_Logo}>
      <Image src="/img/logo.png" layout="fill" />
    </div>
    <h2>TRADING PARA TI</h2>
    <h6>Cargando...</h6>
  </div>
);

export default Loading;
