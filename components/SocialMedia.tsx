import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/SocialMedia.module.scss';
import SocialCard from './SocialCard';

const SocialMedia: FC = () => {
  const className = cn('section', styles.SocialMedia);
  const socialCardList = [
    {
      logoUrl: '/img/conocenos-tiktok.png',
      message: 'Entérate de las últimas tendencias del trading.',
      buttonText: 'Síguenos en Tik tok',
      cardName: 'TikTok',
    },
    {
      logoUrl: '/img/conocenos-telegram.png',
      message: 'Analicemos juntos indicadores clave del mercado bursátil.',
      buttonText: 'Únete a la comunidad de Telegram',
      cardName: 'Telegram',
    },
    {
      logoUrl: '/img/conocenos-email.png',
      message: '¿Dudas sobre si el curso es para ti?, Conversa con nuestros asesores sin compromiso.',
      buttonText: 'Conersar via email',
      cardName: 'Email',
    },
    {
      logoUrl: '/img/conocenos-programa.png',
      message: 'Accede a conocimiento avanzado, explicado de manera eficaz para dominar el trading.',
      buttonText: 'Pre-inscríbete en el Programa',
      cardName: 'Pre inscripción',
    },
  ];
  return (
    <section className={className}>
      <h2 className={styles.SocialMedia_Title}>
        TE INVITO A
        {' '}
        <span className={styles.SocialMedia_TitleSub}>CONOCERNOS MÁS:</span>
      </h2>
      <div className={styles.SocialMedia_Cards}>
        {
          socialCardList.map((socialCardContent) => (
            <SocialCard
              className={styles.SocialMedia_SocialCard}
              content={socialCardContent}
            />
          ))
        }
      </div>
    </section>
  );
};

export default SocialMedia;
