import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Module } from 'lib/types';
import cn from 'classnames';
import styles from '@styles/Modules.module.scss';
import { capitalizeFirst } from 'lib/utils';
import Accordion from './Accordion/Accordion';

type Props = {
  modules: Module[],
}

const Modules: FC<Props> = (props: Props) => {
  const { modules: modulesList } = props;
  const modulesListAccordionContent = modulesList.map((item) => ({
    title: capitalizeFirst(item.name),
    content: item.classes?.map((moduleItem, index) => (
      <li key={`mod-item-acc-${index + 1}`} className={styles.ModuleAbstract_Topic}>
        <span className={styles.ModuleAbstract_TopicName}>
          {index + 1}
          .
          {' '}
          { moduleItem.name }
        </span>
        <span className={styles.ModuleAbstract_Icon}>
          <FontAwesomeIcon icon={faLock} />
        </span>
      </li>
    )),
  }));
  const modulesClassName = cn('section', styles.Modules);
  return (
    <section className={modulesClassName}>
      <span className="target" id="temario" />
      <div className={styles.Module_Title}>
        <h2 className={styles.Module_TitleMain}>MÓDULOS DEL PROGRAMA</h2>
        <div className={styles.Module_TitleBar} />
      </div>
      <Accordion
        className={styles.Modules_Accordion}
        content={modulesListAccordionContent}
        type="with-list"
        contentClassName={styles.ModuleAbstract}
      />
    </section>
  );
};

export default Modules;
