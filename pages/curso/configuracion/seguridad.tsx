import { FC } from 'react';
import Head from 'next/head';
import ChangePassword from 'components/UserConfiguration/ChangePassword';

const Seguridad: FC = () => (
  <main>
    <Head>
      <title>Trading para TI | Seguridad</title>
    </Head>
    <h2>Configuración de seguridad</h2>
    <ChangePassword />
  </main>
);

export default Seguridad;
