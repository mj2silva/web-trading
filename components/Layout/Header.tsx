import { FC } from 'react';
import cn from 'classnames';
import Logo from './Logo';
import Dropdown from './Dropdown';
import SessionControls from './SessionControls';
import styles from '../../styles/Header.module.scss';

const Header: FC = () => (
  <header className={cn(styles.Header, styles.Header_transparent)} id="header">
    <Logo className={styles.Header_Logo} />
    <div className={cn(styles.Header_Nav, styles.Header_Nav_closed)}>
      <button type="button" className={styles.Header_CloseNavButton}>
        <i className="fas fa-times" />
      </button>
      <Dropdown className={styles.Header_Dropdown} />
      <SessionControls className={styles.Header_SessionControls} />
    </div>
    <div className={styles.Header_MobileTitle}>
      <h2>TRADING PARA TI</h2>
    </div>
    <button type="button" className={styles.Header_OpenNavButton}>
      <i className="fas fa-bars" />
    </button>
  </header>
);

export default Header;
