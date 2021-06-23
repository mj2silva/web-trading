import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/AuthorPresentation.module.scss';

const AuthorPresentation: FC = () => {
  const className = cn('section', styles.AuthorPresentation);
  return (
    <section className={className}>
      <div className={styles.AuthorPresentation_Author}>
        <div className={styles.AuthorPresentation_Image}>
          <img src="/img/profesor.png" alt="Renzo Wenzel" className="image" />
        </div>
        <div className={styles.AuthorPresentation_Greeting}>
          <h2 className={styles.AuthorPresentation_Presentation}>
            ¡Hey! soy Renzo Wenzel
          </h2>
          <h3 className={styles.AuthorPresentation_Submessage}>
            Gracias por llegar hasta aquí
          </h3>
        </div>
      </div>
      <p className={styles.AuthorPresentation_Message}>
        Si aún no te convences de tomar este programa donde te enseñaré el paso a
        paso para convertirte en un trader, explicado de manera sencilla pero eficaz.
        Entonces...
      </p>
    </section>
  );
};

export default AuthorPresentation;
