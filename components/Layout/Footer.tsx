import { FC } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, faInstagram, faTelegramPlane, faTiktok, faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import styles from '@styles/Footer.module.scss';
import Logo from './Logo';

const Footer: FC = () => (
  <footer className={styles.Footer}>
    <div className={styles.Footer_Main}>
      <div className={styles.Footer_Contact}>
        <h3 className={styles.Footer_ContactTitle}>CONTÁCTANOS</h3>
        <Logo color="black" />
        <div className={styles.Footer_ContactMedia}>
          <p>
            Telegram:
            {' '}
            <a className="link" href="#">@RenzoWenzel</a>
          </p>
          <p>
            <a className="link" href="#">tradingparatioficial@gmail.com</a>
          </p>
        </div>
      </div>
      <div className={styles.Footer_SocialMedia}>
        <h3 className={styles.Footer_SocialMessage}>
          ¡Cambia tu forma de ver los gráficos!
        </h3>
        <div className={styles.Footer_SocialLogos}>
          <a href="#" target="_blank" className={styles.Footer_SocialLogo}>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://vm.tiktok.com/ZMduAAhbY/" target="_blank" rel="noreferrer" className={styles.Footer_SocialLogo}>
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://t.me/joinchat/mOg3RL3bdqMyMGU5" target="_blank" rel="noreferrer" className={styles.Footer_SocialLogo}>
            <FontAwesomeIcon icon={faTelegramPlane} />
          </a>
          <a href="#" target="_blank" className={styles.Footer_SocialLogo}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" className={styles.Footer_SocialLogo}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
    <div className={styles.Footer_Foot}>
      <div className={styles.Footer_Legal}>
        <a className={cn('link', styles.Footer_Link)} href="#">POLITICAS DE PRIVACIDAD</a>
        {' '}
        |
        {' '}
        <a className={cn('link', styles.Footer_Link)} href="#">TÉRMINOS Y CONDICIONES</a>
      </div>
      <p className={styles.Footer_Copy}>
        &copy; Todos los derechos reservados. Desarrollado por
        {' '}
        <a className="link" href="https://web.mapeo.pe">Mapeo.pe</a>
      </p>
    </div>
  </footer>
);

export default Footer;
