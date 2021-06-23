import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/Benefits.module.scss';
import titleStyles from '@styles/Title.module.scss';
import Accordion from './Accordion/Accordion';

const Benefits: FC = () => {
  const benefitsList = [
    {
      title: 'Certificado',
      content: 'En este programa obtendrás información clave procesada y explicada '
        + 'paso a paso para que logres gestionar tus inversiones de forma efectiva.',
    },
    {
      title: '12 módulos de video',
      content: 'En este programa obtendrás información clave procesada y explicada '
      + 'paso a paso para que logres gestionar tus inversiones de forma efectiva.',
    },
    {
      title: '12 módulos de video',
      content: 'En este programa obtendrás información clave procesada y explicada '
      + 'paso a paso para que logres gestionar tus inversiones de forma efectiva.',
    },
    {
      title: '12 módulos de video',
      content: 'En este programa obtendrás información clave procesada y explicada '
      + 'paso a paso para que logres gestionar tus inversiones de forma efectiva.',
    },
    {
      title: '12 módulos de video',
      content: 'En este programa obtendrás información clave procesada y explicada '
      + 'paso a paso para que logres gestionar tus inversiones de forma efectiva.',
    },
    {
      title: '12 módulos de video',
      content: 'En este programa obtendrás información clave procesada y explicada '
      + 'paso a paso para que logres gestionar tus inversiones de forma efectiva.',
    },
    {
      title: '12 módulos de video',
      content: 'En este programa obtendrás información clave procesada y explicada '
      + 'paso a paso para que logres gestionar tus inversiones de forma efectiva.',
    },
  ];
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
          <Accordion content={benefitsList} className={styles.Benefits_Accordion} />
        </div>
        <div className={styles.Benefits_Image}>
          <img
            className="image"
            src="/img/monitor.png"
            alt="Imagen de acompañamiento de sección beneficios"
          />
        </div>
      </div>
      <div className={styles.Benefits_CallToAction}>
        <button type="button" className={cn('button', styles.Benefits_Button)}>
          ¡INGRESA AL CURSO AHORA!
        </button>
      </div>
    </section>
  );
};

export default Benefits;
