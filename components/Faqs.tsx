import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/Faqs.module.scss';
import { Faq } from 'lib/types';
import Accordion from './Accordion/Accordion';

type Props = {
  faqsList: Faq[],
};

const Faqs: FC<Props> = ({ faqsList }: Props) => {
  const className = cn('section', styles.Faqs);
  const accordionContent = faqsList.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));
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
        content={accordionContent}
      />
    </section>
  );
};

export default Faqs;
