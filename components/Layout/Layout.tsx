import { FC, ReactNode } from 'react';
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
  </>
);

export default Layout;
