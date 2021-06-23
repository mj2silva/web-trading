import { FC } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import dropdownStyles from '@styles/Dropdown.module.scss';
import Link from 'next/link';

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
        <Link href="/#beneficios">
          <a className={linkClassName}>Beneficios</a>
        </Link>
      </li>
      <li className={itemClassName}>
        <Link href="/#temario">
          <a className={linkClassName}>Temario</a>
        </Link>
      </li>
      <li className={itemClassName}>
        <Link href="/#testimonios">
          <a className={linkClassName}>Testimonios</a>
        </Link>
      </li>
      <li className={itemClassName}>
        <Link href="/#faqs">
          <a className={linkClassName}>FAQ</a>
        </Link>
      </li>
      <li className={itemClassName}>
        <Link href="/#comunidad">
          <a className={linkClassName}>Comunidad</a>
        </Link>
      </li>
    </ul>
  </div>
);

Dropdown.defaultProps = defaultProps;

export default Dropdown;
