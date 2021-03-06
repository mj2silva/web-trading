import {
  FC, useContext, useEffect, useState,
} from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/dist/client/router';
import styles from '@styles/Header.module.scss';
import Logo from './Logo';
import Dropdown from './Dropdown';
import SessionControls from './SessionControls';
import { UserContext } from './UserProvider';
import ProfileMenu from './ProfileMenu';

const Header: FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean | null>(null);
  const [isTop, setIsTop] = useState<boolean>(true);
  const { asPath } = useRouter();
  const { user } = useContext(UserContext);

  const navClassName = cn(styles.Header_Nav, {
    [styles.Header_Nav_open]: navIsOpen,
    [styles.Header_Nav_closed]: (navIsOpen !== null) && !navIsOpen,
  });

  const headerClassName = cn(styles.Header, {
    [styles.Header_transparent]: isTop && !user,
    [styles.Header_black]: !isTop && !user,
  });

  const toggleNavOpen = (): void => setNavIsOpen((isOpen) => !isOpen);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsTop(window.scrollY < 100);
    });
  }, []);

  useEffect(() => {
    if (navIsOpen) setNavIsOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  return (
    <header className={headerClassName} id="header">
      <Logo className={styles.Header_Logo} />
      <div className={navClassName}>
        <button onClick={toggleNavOpen} type="button" className={styles.Header_CloseNavButton}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {
          (user)
            ? (
              <ProfileMenu className={styles.Header_ProfileMenu} />
            )
            : (
              <>
                <Dropdown className={styles.Header_Dropdown} />
                <SessionControls className={styles.Header_SessionControls} />
              </>
            )
        }
      </div>
      <div className={styles.Header_MobileTitle}>
        <h2>TRADING PARA TI</h2>
      </div>
      <button onClick={toggleNavOpen} type="button" className={styles.Header_OpenNavButton}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Header;
