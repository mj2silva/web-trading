import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/Contact.module.scss';
import ContactForm from './ContactForm';

const Contact: FC = () => {
  const contactStyles = cn('section', styles.ContactForm);
  return (
    <section className={contactStyles}>
      <h2 className={styles.ContactForm_Title}>
        ¿ESTÁS LISTO PARA DOMINAR EL TRADING?
      </h2>
      <p className={styles.ContactForm_Message}>
        Llena este formulatio de pre-inscripción, nuestros asesores se contactarán
        contigo para enviarte más información y completar tu registro.
      </p>
      <ContactForm className={styles.ContactForm_Form} />
    </section>
  );
};

export default Contact;
