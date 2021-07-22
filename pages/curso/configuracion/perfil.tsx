import { FC } from 'react';
import Head from 'next/head';
import ChangeUsername from 'components/UserConfiguration/ChangeUsername';

const Perfil: FC = () => (
  <main>
    <Head>
      <title>Trading para TI | Configuración</title>
    </Head>
    <h2>Configuración del perfil</h2>
    <ChangeUsername />
  </main>
);

export default Perfil;
