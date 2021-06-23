import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import UserProvider from './UserProvider';

type Props = {
  children: ReactNode,
}

const Layout: FC<Props> = ({ children }: Props) => (
  <UserProvider>
    <Header />
    <main>
      { children }
    </main>
    <Footer />
  </UserProvider>
);

export default Layout;
