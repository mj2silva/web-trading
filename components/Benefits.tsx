import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/Benefits.module.scss';
import titleStyles from '@styles/Title.module.scss';
import { CourseBenefits } from 'lib/types';
import Accordion from './Accordion/Accordion';
import OpenLoginButton from './Layout/OpenLoginButton';

type Props = {
  benefitsList: CourseBenefits[];
};

const Benefits: FC<Props> = ({ benefitsList } : Props) => {
  const accordionContent = benefitsList?.map((benefit) => ({
    title: benefit.name,
    content: benefit.description,
  }));

  return (
    <section className={cn('section', styles.Benefits)}>
      <span className="target" id="beneficios" />
      <div className={cn(titleStyles.Title, styles.Benefits_Title)}>
        <h1 className={titleStyles.Title_Main}>PROGRAMA VIRTUAL: TRADING PARA TI</h1>
        <h3 className={titleStyles.Title_Secondary}>
          Logra dominar el arte del trading, accediendo a contenido y tendencias claves en el
          mercado bursátil y extrabursátil (criptomonedas).
        </h3>
      </div>
      <div className={styles.Benefits_Body}>
        <div className={styles.Benefits_Content}>
          <h2 className={styles.Benefits_ContentTitle}>BENEFICIOS</h2>
          <Accordion content={accordionContent} className={styles.Benefits_Accordion} />
        </div>
        <div className={styles.Benefits_Image}>
          <img
            className="image"
            src="/img/tablet.png"
            alt="Imagen de acompañamiento de sección beneficios"
          />
        </div>
      </div>
      <div className={styles.Benefits_CallToAction}>
        <OpenLoginButton className={styles.Benefits_Button}>
          ¡INGRESA AL CURSO AHORA!
        </OpenLoginButton>
      </div>
    </section>
  );
};

export default Benefits;
