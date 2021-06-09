import { FC } from 'react';
import cn from 'classnames';
import dropdownStyles from '../../styles/Dropdown.module.scss';

const Dropdown: FC = ({ className }) => (
  <div className={cn(dropdownStyles.Dropdown, className)}>
    <div className={dropdownStyles.Dropdown_Title}>
      Sobre el programa
      <span className={dropdownStyles.Dropdown_Arrow}>
        <i className="fas fa-chevron-down" />
      </span>
    </div>
    <ul className={dropdownStyles.Dropdown_Content}>
      <li className={dropdownStyles.Dropdown_Item}>
        <a className="link Dropdown_Link" href="./#beneficios">Beneficios</a>
      </li>
      <li className={dropdownStyles.Dropdown_Item}>
        <a className="link Dropdown_Link" href="./#Temario">Temario</a>
      </li>
      <li className={dropdownStyles.Dropdown_Item}>
        <a className="link Dropdown_Link" href="./#Testimonios">Testimonios</a>
      </li>
      <li className={dropdownStyles.Dropdown_Item}>
        <a className="link Dropdown_Link" href="./#FAQ">FAQ</a>
      </li>
      <li className={dropdownStyles.Dropdown_Item}>
        <a className="link Dropdown_Link" href="./#Comunidad">Comunidad</a>
      </li>
    </ul>
  </div>
);

export default Dropdown;
