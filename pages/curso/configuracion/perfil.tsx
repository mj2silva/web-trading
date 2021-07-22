import { FC } from 'react';
import Head from 'next/head';
import ChangeUsername from 'components/UserConfiguration/ChangeUsername';
import ChangeNames from 'components/UserConfiguration/ChangeNames';
import ChangeLastNames from 'components/UserConfiguration/ChangeLastNames';
import ChangeProfilePicture from 'components/UserConfiguration/ChangeProfilePicture';

const Perfil: FC = () => (
  <main>
    <Head>
      <title>Trading para TI | Configuración</title>
    </Head>
    <h2>Configuración del perfil</h2>
    <ChangeUsername />
    <ChangeNames />
    <ChangeLastNames />
    <ChangeProfilePicture />
  </main>
);

export default Perfil;
