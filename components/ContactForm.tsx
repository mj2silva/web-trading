/* eslint-disable jsx-a11y/no-onchange */
import {
  ChangeEventHandler, FC, FormEventHandler, useState,
} from 'react';
import cn from 'classnames';
import styles from '@styles/Form.module.scss';
import { PreRegisteredUser } from 'lib/types';
import { preRegisterUser } from 'lib/repository/modulesRepository';
import Spinner from './Spinner';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: undefined,
};

const ContactForm: FC<Props> = (props: Props) => {
  const { className } = props;
  const formClassName = cn(styles.Form, className);
  const buttonClassName = cn('button', styles.Form_Button);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    names: '',
    email: '',
    country: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const preRegisteredUser: PreRegisteredUser = {
        fullName: formValues.names,
        email: formValues.email,
        country: formValues.country,
      };
      await preRegisterUser(preRegisteredUser);
      setSuccess(true);
      setError(undefined);
    } catch (err) {
      setError('Hubo un error al enviar el formulario, puede intentarlo más tarde o comunicarse via');
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
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
              value={formValues.names}
              className={styles.Form_Input}
              placeholder="Nombres y apellidos"
            />
          </label>
          <label htmlFor="email" className={styles.Form_Item}>
            <span className={styles.Form_Label}>Email</span>
            <input
              name="email"
              value={formValues.email}
              onChange={handleChange}
              type="email"
              className={styles.Form_Input}
              placeholder="Email"
            />
          </label>
          <label htmlFor="country" className={styles.Form_Item}>
            <span className={styles.Form_Label}>País</span>
            <input
              name="country"
              value={formValues.country}
              onChange={handleChange}
              type="text"
              className={styles.Form_Input}
              placeholder="País"
            />
          </label>
          { success && (
          <h4 className={styles.Form_Success}>
            <span className={styles.Form_SuccessIcon}>
              <img className="image" src="/img/check.png" alt="check icon" />
            </span>
            Te has registrado correctamente
          </h4>
          ) }
          { error && (
            <h4 className={styles.Form_Error}>
              {error}
            </h4>
          )}
          <button type="submit" className={buttonClassName}>ENVIAR</button>
        </form>
      </div>
    )
    : <Spinner size="medium" color="yellow" />;
};

ContactForm.defaultProps = defaultProps;

export default ContactForm;
