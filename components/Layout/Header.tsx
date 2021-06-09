import { FC } from 'react';
import cn from 'classnames';
import Logo from './Logo';
import Dropdown from './Dropdown';
import headerStyles from '../../styles/Header.module.scss';

const Header: FC = () => (
  <header className={cn(headerStyles.Header, headerStyles.Header_transparent)} id="header">
    <Logo className={headerStyles.Header_Logo} />
    <div className={cn(headerStyles.Header_Nav, headerStyles.Header_Nav_closed)}>
      <button type="button" className={headerStyles.Header_CloseNavButton}>
        <i className="fas fa-times" />
      </button>
      <Dropdown className={headerStyles.Header_Dropdown} />
      <div className="session-controls header__session-controls">
        <button type="button" className="button session-controls__login">Iniciar Sesión</button>
        <button type="button" className="button session-controls__register">Registrarse</button>
      </div>
    </div>
    <div className="header__mobile-title">
      <h2>TRADING PARA TI</h2>
    </div>
    <button type="button" className="header__open-nav-button">
      <i className="fas fa-bars" />
    </button>
  </header>
);

export default Header;
