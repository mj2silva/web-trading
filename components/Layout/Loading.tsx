import { FC } from 'react';
import styles from '@styles/LoadingScreen.module.scss';
import Image from 'next/image';

const Loading: FC = () => (
  <div className={styles.LoadingScreen_Container}>
    <div className={styles.LoadingScreen_Logo}>
      <Image src="/img/logo.png" layout="fill" />
    </div>
    <h2>TRADING PARA TI</h2>
    <h6>Cargando...</h6>
  </div>
);

export default Loading;
