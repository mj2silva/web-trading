import { FC } from 'react';
import Head from 'next/head';
import ChangePassword from 'components/UserConfiguration/ChangePassword';
import ConfigLayout from 'components/UserConfiguration/ConfigLayout';

const Seguridad: FC = () => (
  <ConfigLayout>
    <Head>
      <title>Trading para TI | Seguridad</title>
    </Head>
    <h2>Configuración de seguridad</h2>
    <ChangePassword />
  </ConfigLayout>
);

export default Seguridad;
