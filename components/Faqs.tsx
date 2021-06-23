import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/Faqs.module.scss';
import Accordion from './Accordion/Accordion';

const Faqs: FC = () => {
  const className = cn('section', styles.Faqs);
  const faqsList = [
    {
      title: '¿Tengo acceso ilimitado a las clases?',
      content: 'Lorem ipsum sit amet',
    },
    {
      title: '¿Cuando inicia el curso?',
      content: 'Lorem ipsum sit amet',
    },
    {
      title: '¿Cómo me inscribo al curso?',
      content: 'Lorem ipsum sit amet',
    },
  ];
  return (
    <section className={className}>
      <span className="target" id="faqs" />
      <div className={styles.Faqs_Title}>
        <h2>
          PREGUNTAS
          {' '}
          <span className={styles.Faqs_Title_sub}>
            FRECUENTES
          </span>
        </h2>
      </div>
      <Accordion
        type="list-one-column"
        className={styles.Faqs_Accordion}
        content={faqsList}
      />
    </section>
  );
};

export default Faqs;
