import {
  FC, ReactNode, useContext, useEffect,
} from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import { UserContext } from './UserProvider';

type Props = {
  children: ReactNode,
}

const Layout: FC<Props> = ({ children }: Props) => {
  const { isLoading, user } = useContext(UserContext);
  const { pathname, push } = useRouter();
  useEffect(() => {
    if (!isLoading) {
      if (pathname.startsWith('/curso') && !user) {
        push('/');
      } else if (pathname === '/' && user) {
        push('/curso');
      }
    }
  }, [pathname, user, push, isLoading]);
  return isLoading && pathname !== '/'
    ? <Loading />
    : (
      <>
        <Header />
        <main>
          { children }
        </main>
        <Footer />
      </>
    );
};

export default Layout;
