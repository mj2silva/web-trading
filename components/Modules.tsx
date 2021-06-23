import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import styles from '@styles/Modules.module.scss';
import Accordion from './Accordion/Accordion';

const Modules: FC = () => {
  const modulesList = [
    {
      title: 'Módulo 1',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 2',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 3',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
    {
      title: 'Módulo 4',
      moduleItems: [
        'Introducción',
        'Broker: ¿Qué es? ¿Cuál uso? ¿Cómo aperturar MT4?',
        'Exchanges y Wallets',
        'TradingView',
      ],
    },
  ];
  const modulesListAccordionContent = modulesList.map((item) => ({
    title: item.title,
    content: item.moduleItems.map((moduleItem, index) => (
      <li key={`mod-item-acc-${index + 1}`} className={styles.ModuleAbstract_Topic}>
        <span className={styles.ModuleAbstract_TopicName}>
          {index + 1}
          .
          {' '}
          { moduleItem }
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
