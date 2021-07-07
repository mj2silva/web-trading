import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useState,
} from 'react';
import cn from 'classnames';
import styles from '@styles/LoginForm.module.scss';
import Spinner from 'components/Spinner';
import { UserContext } from './UserProvider';

const LoginForm: FC = () => {
  const { signIn, error, isLoading } = useContext(UserContext);
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
  const login: FormEventHandler<HTMLFormElement> = async (event): Promise<void> => {
    event.preventDefault();
    if (signIn) await signIn(formValues.email, formValues.password);
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
        { error && <span className={styles.LoginForm_Error}>{ error }</span>}
        <button className={cn('button', styles.LoginForm_Button)} type="submit">
          {isLoading ? <Spinner /> : 'ENVIAR'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
