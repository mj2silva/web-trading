import { FC } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import dropdownStyles from '@styles/Dropdown.module.scss';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: '',
};

const itemClassName = dropdownStyles.Dropdown_Item;
const linkClassName = cn('link', dropdownStyles.Dropdown_Link);

const Dropdown: FC<Props> = ({ className }: Props) => (
  <div className={cn(dropdownStyles.Dropdown, className)}>
    <div className={dropdownStyles.Dropdown_Title}>
      Sobre el programa
      <span className={dropdownStyles.Dropdown_Arrow}>
        <FontAwesomeIcon icon={faChevronDown} />
      </span>
    </div>
    <ul className={dropdownStyles.Dropdown_Content}>
      <li className={itemClassName}>
        <a className={linkClassName} href="./#beneficios">Beneficios</a>
      </li>
      <li className={itemClassName}>
        <a className={linkClassName} href="./#Temario">Temario</a>
      </li>
      <li className={itemClassName}>
        <a className={linkClassName} href="./#Testimonios">Testimonios</a>
      </li>
      <li className={itemClassName}>
        <a className={linkClassName} href="./#FAQ">FAQ</a>
      </li>
      <li className={itemClassName}>
        <a className={linkClassName} href="./#Comunidad">Comunidad</a>
      </li>
    </ul>
  </div>
);

Dropdown.defaultProps = defaultProps;

export default Dropdown;
