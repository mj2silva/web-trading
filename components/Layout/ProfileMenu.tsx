import { FC, useContext } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import styles from '@styles/ProfileMenu.module.scss';
import dropdownStyles from '@styles/Dropdown.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './UserProvider';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: undefined,
};

const ProfileMenu: FC<Props> = (props: Props) => {
  const { user, signOut } = useContext(UserContext);
  const { className } = props;
  const dropdownClassName = cn(dropdownStyles.Dropdown_Title, styles.ProfileMenu_Selector);
  const dropdownContentClassName = cn(dropdownStyles.Dropdown_Content, styles.ProfileMenu_Options);
  const buttonClassName = cn('button', styles.ProfileMenu_Button);
  const linkClassName = cn('link', styles.ProfileMenu_Link);
  const profileMenuClassName = cn(styles.ProfileMenu, className);
  return (user && (
    <div className={profileMenuClassName}>
      <div className={dropdownClassName}>
        <div className={styles.ProfileMenu_Picture}>
          <img
            src={user.photoURL || '/img/profesor.png'}
            className="image"
            alt={`${user?.displayName} profile`}
          />
        </div>
        <span className={dropdownStyles.Dropdown_Arrow}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      <div className={dropdownContentClassName}>
        <div className={styles.ProfileMenu_OptionsPicture}>
          <img src={user.photoURL || '/img/profesor.png'} className="image" alt={`${user?.displayName} profile`} />
        </div>
        <div className={styles.ProfileMenu_Username}>
          @
          {user.username}
        </div>
        <h3 className={styles.ProfileMenu_Names}>
          {user.names}
        </h3>
        <h3 className={styles.ProfileMenu_LastNames}>
          {user.lastNames}
        </h3>
        <Link href="/curso/configuracion/perfil">
          <a className={buttonClassName}>EDITAR PERFIL</a>
        </Link>
        <Link href="/curso/configuracion/seguridad">
          <a className={buttonClassName}>CAMBIAR CONTRASE??A</a>
        </Link>
        <button type="button" onClick={signOut} className={linkClassName}>Cerrar sesi??n</button>
      </div>
    </div>
  )) || null;
};

ProfileMenu.defaultProps = defaultProps;

export default ProfileMenu;
