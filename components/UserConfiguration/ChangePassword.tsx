import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useState,
} from 'react';
import { changePassword } from 'lib/repository/usersRepository';
import Spinner from 'components/Spinner';
import { UserContext } from 'components/Layout/UserProvider';
import styles from '@styles/ConfigField.module.scss';
import cn from 'classnames';

const initialValues = {
  oldPassword: '',
  newPassword: '',
  newPasswordConfirm: '',
};

const ChangePassword: FC = () => {
  const { user } = useContext(UserContext);

  const [formValues, setFormValues] = useState(initialValues);
  const [changeAllowed, setChangeAllowed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (user && formValues.newPassword && formValues.oldPassword) {
      try {
        await changePassword(user, formValues.oldPassword, formValues.newPassword);
        setError('');
        setFormValues(initialValues);
      } catch (err) {
        setError('La contraseña ingresada es incorrecta');
      }
    }
    setIsSubmitting(false);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (): void => {
    const regex = /^^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (formValues.newPassword) {
      const validPassword = regex.test(formValues.newPassword);
      setChangeAllowed(validPassword);
      if (!validPassword) {
        setError('La contraseña debe tener al menos 8 caracteres, y al menos una letra y un número');
        return;
      }
    }
    if (formValues.newPassword) {
      const validPassword = formValues.newPassword === formValues.newPasswordConfirm;
      setChangeAllowed(validPassword);
      if (!validPassword) {
        setError('Las contraseñas deben coincidir');
        return;
      }
    }
    setError('');
  };

  return (
    <form className={cn(styles.ConfigField, styles.ConfigField_Multi)} onSubmit={handleSubmit}>
      <div className={styles.ConfigField_MultiWrapper}>
        <label className={styles.ConfigField_Wrapper} htmlFor="oldPassword">
          <span className={styles.ConfigField_Label}>Contraseña anterior:</span>
          <input
            className={styles.ConfigField_TextInput}
            type="password"
            name="oldPassword"
            onChange={handleChange}
            value={formValues.oldPassword}
          />
        </label>
        <label className={styles.ConfigField_Wrapper} htmlFor="newPassword">
          <span className={styles.ConfigField_Label}>Contraseña nueva:</span>
          <input
            className={styles.ConfigField_TextInput}
            onBlur={handleBlur}
            type="password"
            name="newPassword"
            onChange={handleChange}
            value={formValues.newPassword}
          />
        </label>
        <label className={styles.ConfigField_Wrapper} htmlFor="newPasswordConfirm">
          <span className={styles.ConfigField_Label}>Confirmar contraseña:</span>
          <input
            className={styles.ConfigField_TextInput}
            onBlur={handleBlur}
            type="password"
            name="newPasswordConfirm"
            onChange={handleChange}
            value={formValues.newPasswordConfirm}
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={!changeAllowed}
        className={cn('button', styles.ConfigField_Button)}
      >
        { isSubmitting ? <Spinner /> : 'Cambiar contraseña' }
      </button>
      { error && <span className={styles.ConfigField_Error}>{ error }</span>}
    </form>
  );
};

export default ChangePassword;
