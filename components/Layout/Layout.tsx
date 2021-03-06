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
  const {
    isLoading, user, userModules, userGroup, error, signOut,
  } = useContext(UserContext);
  const { pathname, push } = useRouter();
  const isPublic = pathname === '/';
  const loadingScreen = (isLoading && !isPublic) || (isPublic && user) || (!user && !isPublic);
  useEffect(() => {
    if (!isLoading) {
      if (pathname.startsWith('/curso') && !user) {
        push('/');
      } else if (isPublic && user) {
        push('/curso/modulo-1/introduccion');
      }
    }
  }, [isLoading, isPublic, pathname, user, push]);

  if (error && userGroup && !userModules) {
    return (
      <main>
        Su acceso al curso ha expirado
        <button onClick={signOut} className="link" type="button">Cerrar sesión</button>
      </main>
    );
  }

  return loadingScreen
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
