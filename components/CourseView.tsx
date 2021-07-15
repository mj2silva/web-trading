import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/CourseView.module.scss';
import moduleAbstractStyles from '@styles/Modules.module.scss';
import { Module } from 'lib/types';
import Link from 'next/link';
import Accordion from './Accordion/Accordion';
import VimeoVideo from './VimeoVideo';

type Props = {
  modulesList: Module[],
};

const CourseView: FC<Props> = (props: Props) => {
  const { modulesList } = props;
  const courseViewClassName = cn('section', styles.CourseView);

  const modulesListAccordionContent = modulesList.map((item) => ({
    title: item.name,
    content: item.classes?.map((moduleItem, index) => (
      <li key={`mod-item-acc-${index + 1}`} className={moduleAbstractStyles.ModuleAbstract_Topic}>
        <Link href={`/curso/${item.slug}/${moduleItem.slug}`}>
          <a className={moduleAbstractStyles.ModuleAbstract_TopicName}>
            {index + 1}
            .
            {' '}
            { moduleItem.name }
          </a>
        </Link>
      </li>
    )),
  }));

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
          <Accordion
            className={styles.CourseView_Accordion}
            content={modulesListAccordionContent}
            type="with-list"
            columns={1}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseView;
