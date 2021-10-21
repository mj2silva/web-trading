import { FC, useContext } from 'react';
import cn from 'classnames';
import styles from '@styles/CourseView.module.scss';
import moduleAbstractStyles from '@styles/Modules.module.scss';
import { ModuleClass } from 'lib/types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Accordion from './Accordion/Accordion';
import VimeoVideo from './VimeoVideo';
import { UserContext } from './Layout/UserProvider';
import Spinner from './Spinner';

type Props = {
  moduleClass?: ModuleClass,
};

const defaultProps = {
  moduleClass: undefined,
};

const CourseView: FC<Props> = (props: Props) => {
  const { moduleClass } = props;
  const { userModules } = useContext(UserContext);
  const courseViewClassName = cn('section', styles.CourseView);

  const modulesListAccordionContent = userModules?.map((item) => ({
    title: item.name,
    content: item.classes?.map((moduleItem, index) => (
      <li key={`mod-item-acc-${index + 1}`} className={moduleAbstractStyles.ModuleAbstract_Topic}>
        {
            moduleItem.videoUrl
              ? (
                <Link href={`/curso/${item.slug}/${moduleItem.slug}`}>
                  <a className={moduleAbstractStyles.ModuleAbstract_TopicName}>
                    {index + 1}
                    .
                    {' '}
                    { moduleItem.name }
                  </a>
                </Link>
              )
              : (
                <>
                  <span className={moduleAbstractStyles.ModuleAbstract_TopicName}>
                    {index + 1}
                    .
                    {' '}
                    { moduleItem.name }
                  </span>
                  <span className={moduleAbstractStyles.ModuleAbstract_Icon}>
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                </>
              )
          }
      </li>
    )),
  }));

  return (
    <section className={courseViewClassName}>
      {
        userModules && moduleClass
          ? (
            <div className={styles.CourseView_Container}>
              <VimeoVideo vimeoPlayerUrl={moduleClass?.videoUrl || ''} />
              <div className={styles.CourseView_NavColumn}>
                <h2 className={styles.CourseView_NavTitle}>
                  <span className={styles.CourseView_TitleSub}>MÓDULOS</span>
                  {' '}
                  DEL PROGRAMA
                </h2>
                {
            modulesListAccordionContent && (
              <Accordion
                className={styles.CourseView_Accordion}
                content={modulesListAccordionContent}
                type="with-list"
                columns={1}
              />
            )
                }
              </div>
            </div>
          )
          : (
            <div className={styles.CourseView_Container}>
              <Spinner />
            </div>
          )
      }

    </section>
  );
};

CourseView.defaultProps = defaultProps;

export default CourseView;
