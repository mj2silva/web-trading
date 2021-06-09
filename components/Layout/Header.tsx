import { FC, useState } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import Dropdown from './Dropdown';
import SessionControls from './SessionControls';
import styles from '../../styles/Header.module.scss';

const Header: FC = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean | null>(null);

  const navClassName = cn(styles.Header_Nav, {
    [styles.Header_Nav_open]: navIsOpen,
    [styles.Header_Nav_closed]: (navIsOpen !== null) && !navIsOpen,
  });

  const toggleNavOpen = (): void => setNavIsOpen((isOpen) => !isOpen);

  return (
    <header className={cn(styles.Header, styles.Header_transparent)} id="header">
      <Logo className={styles.Header_Logo} />
      <div className={navClassName}>
        <button onClick={toggleNavOpen} type="button" className={styles.Header_CloseNavButton}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Dropdown className={styles.Header_Dropdown} />
        <SessionControls className={styles.Header_SessionControls} />
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
