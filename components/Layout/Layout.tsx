import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: ReactNode,
}

const Layout: FC<Props> = ({ children }: Props) => (
  <>
    <Header />
    <main>
      { children }
    </main>
    <Footer />
  </>
);

export default Layout;
