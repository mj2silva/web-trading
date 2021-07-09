import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/CourseView.module.scss';
import moduleAbstractStyles from '@styles/Modules.module.scss';
import Accordion from './Accordion/Accordion';
import VimeoVideo from './VimeoVideo';

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
    <li key={`mod-item-acc-${index + 1}`} className={moduleAbstractStyles.ModuleAbstract_Topic}>
      <span className={moduleAbstractStyles.ModuleAbstract_TopicName}>
        {index + 1}
        .
        {' '}
        { moduleItem }
      </span>
    </li>
  )),
}));

const CourseView: FC = () => {
  const courseViewClassName = cn('section', styles.CourseView);
  return (
    <section className={courseViewClassName}>
      <div className={styles.CourseView_Container}>
        <VimeoVideo />
        <div className={styles.CourseView_NavColumn}>
          <h2 className={styles.CourseView_NavTitle}>
            <span className={styles.CourseView_TitleSub}>MÓDULOS</span>
            {' '}
            DEL PROGRAMA
          </h2>
          <Accordion className={styles.CourseView_Accordion} content={modulesListAccordionContent} type="with-list" columns={1} />
        </div>
      </div>
    </section>
  );
};

export default CourseView;
