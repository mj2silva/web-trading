import {
  ChangeEventHandler, FC, FormEventHandler, useState,
} from 'react';
import cn from 'classnames';
import styles from '@styles/LoginForm.module.scss';

const LoginForm: FC = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const login: FormEventHandler<HTMLFormElement> = (event): void => {
    event.preventDefault();
  };
  return (
    <div className={styles.LoginForm}>
      <h3 className={styles.LoginForm_Title}>
        INICIA SESIÓN
      </h3>
      <form onSubmit={login} className={styles.LoginForm_Form}>
        <label htmlFor="email" className={styles.LoginForm_Item}>
          <span className={styles.LoginForm_Label}>Email</span>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            value={formValues.email}
            className={styles.LoginForm_Input}
            placeholder="Email"
          />
        </label>
        <label htmlFor="password" className={styles.LoginForm_Item}>
          <span className={styles.LoginForm_Label}>Contraseña</span>
          <input
            name="password"
            value={formValues.password}
            onChange={handleChange}
            type="password"
            className={styles.LoginForm_Input}
            placeholder="Contraseña"
          />
        </label>
        <a className={styles.LoginForm_ForgotPasswordLink} href="#">
          ¿Olvidaste la contraseña?
        </a>
        <button className={cn('button', styles.LoginForm_Button)} type="submit">
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
