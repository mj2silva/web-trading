import {
  ChangeEventHandler, FC, FocusEventHandler, FormEventHandler, useState,
} from 'react';
import cn from 'classnames';
import styles from '@styles/Form.module.scss';
import Spinner from './Spinner';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: undefined,
};

const preInscription = async (names: string, email: string, country: string): Promise<void> => {
  const sendPreInscription = new Promise<void>((resolve, reject) => {
    if (names.match(/[a-zA-Z ]+/) && country !== 'none') {
      setTimeout(() => {
        resolve(alert(JSON.stringify({ email, names, country }, null, 2)));
      }, 1500);
    } else {
      reject(alert(JSON.stringify('Los datos no son válidos', null, 2)));
    }
  });
  return sendPreInscription;
};

const ContactForm: FC<Props> = (props: Props) => {
  const { className } = props;
  const formClassName = cn(styles.Form, className);
  const buttonClassName = cn('button', styles.Form_Button);
  const [formValues, setFormValues] = useState({
    names: '',
    email: '',
    country: 'none',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange: FocusEventHandler<HTMLSelectElement> = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    await preInscription(formValues.names, formValues.email, formValues.country);
    setIsSubmitting(false);
  };

  return !isSubmitting
    ? (
      <div className={formClassName}>
        <h3 className={styles.Form_Title}>
          PRE-INSCRIBIRME
        </h3>
        <form onSubmit={handleSubmit} className={styles.Form_Form}>
          <label htmlFor="names" className={styles.Form_Item}>
            <span className={styles.Form_Label}>Nombres y Apellidos</span>
            <input
              name="names"
              onChange={handleChange}
              type="text"
              className={styles.Form_Input}
              placeholder="Nombres y apellidos"
            />
          </label>
          <label htmlFor="email" className={styles.Form_Item}>
            <span className={styles.Form_Label}>Email</span>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              className={styles.Form_Input}
              placeholder="Email"
            />
          </label>
          <label htmlFor="country" className={styles.Form_Item}>
            <span className={styles.Form_Label}>Nombres y Apellidos</span>
            <select
              name="country"
              onBlur={handleSelectChange}
              className={styles.Form_Input}
              placeholder="País"
            >
              <option selected disabled value="none">País</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
              <option value="Perú">Perú</option>
            </select>
          </label>
          <h4 className={styles.Form_Success}>
            <span className={styles.Form_SuccessIcon}>
              <img className="image" src="/img/check.png" alt="check icon" />
            </span>
            Ya estoy registrado
          </h4>
          <button type="submit" className={buttonClassName}>ENVIAR</button>
        </form>
      </div>
    )
    : <Spinner size="medium" color="yellow" />;
};

ContactForm.defaultProps = defaultProps;

export default ContactForm;
