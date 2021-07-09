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
      href: 'https://vm.tiktok.com/ZMduAAhbY/',
      isBlank: true,
    },
    {
      logoUrl: '/img/conocenos-telegram.png',
      message: 'Analicemos juntos indicadores clave del mercado bursátil.',
      buttonText: 'Únete a la comunidad de Telegram',
      cardName: 'Telegram',
      href: 'https://t.me/joinchat/mOg3RL3bdqMyMGU5',
      isBlank: true,
    },
    {
      logoUrl: '/img/conocenos-email.png',
      message: '¿Dudas sobre si el curso es para ti?, Conversa con nuestros asesores sin compromiso.',
      buttonText: 'Conersar via email',
      cardName: 'Email',
      href: 'mailto:tradingparatioficial@gmail.com',
      isBlank: true,
    },
    {
      logoUrl: '/img/conocenos-programa.png',
      message: 'Accede a conocimiento avanzado, explicado de manera eficaz para dominar el trading.',
      buttonText: 'Pre-inscríbete en el Programa',
      cardName: 'Pre inscripción',
      href: '#preregistro',
    },
  ];
  return (
    <section className={className}>
      <span className="target" id="comunidad" />
      <h2 className={styles.SocialMedia_Title}>
        TE INVITO A
        {' '}
        <span className={styles.SocialMedia_TitleSub}>CONOCERNOS MÁS:</span>
      </h2>
      <div className={styles.SocialMedia_Cards}>
        {
          socialCardList.map((socialCardContent) => (
            <SocialCard
              key={`soc-card-${socialCardContent.cardName}`}
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
