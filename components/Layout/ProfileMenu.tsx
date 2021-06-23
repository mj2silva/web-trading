import { FC, useContext } from 'react';
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
            src={user.pictureUrl}
            className="image"
            alt={`${user?.name} profile`}
          />
        </div>
        <span className={dropdownStyles.Dropdown_Arrow}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      <div className={dropdownContentClassName}>
        <div className={styles.ProfileMenu_OptionsPicture}>
          <img src={user.pictureUrl} className="image" alt={`${user?.name} profile`} />
        </div>
        <div className={styles.ProfileMenu_Username}>
          @
          {user.name}
        </div>
        <h3 className={styles.ProfileMenu_Names}>
          {user.name}
        </h3>
        <h3 className={styles.ProfileMenu_LastNames}>
          {user.name}
        </h3>
        <button type="button" className={buttonClassName}>EDITAR PERFIL</button>
        <button type="button" className={buttonClassName}>CAMBIAR CONTRASEÑA</button>
        <button type="button" onClick={signOut} className={linkClassName}>Cerrar sesión</button>
      </div>
    </div>
  )) || null;
};

ProfileMenu.defaultProps = defaultProps;

export default ProfileMenu;
