import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useEffect, useState,
} from 'react';
import debounce from 'lodash.debounce';
import { changeLastNames } from 'lib/repository/usersRepository';
import Spinner from 'components/Spinner';
import { UserContext } from 'components/Layout/UserProvider';
import styles from '@styles/ConfigField.module.scss';
import cn from 'classnames';

const ChangeLastNames: FC = () => {
  const { user } = useContext(UserContext);

  const [lastNames, setLastNames] = useState(user?.lastNames || '');
  const [changeAllowed, setChangeAllowed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (user && lastNames) {
      try {
        await changeLastNames(user, lastNames);
      } catch (err) {
        setError(err.message);
      }
    }
    setIsSubmitting(false);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const newLastNames = event.target.value;
    setLastNames(newLastNames);
  };

  useEffect(() => {
    const checkLastNamesDeb = debounce(() => {
      const regex = /^[A-zÀ-ú ]+$/;
      if (lastNames) {
        const validLastNames = regex.test(lastNames);
        setChangeAllowed(validLastNames);
      }
    });
    checkLastNamesDeb();
  }, [lastNames]);

  return (
    <form className={styles.ConfigField} onSubmit={handleSubmit}>
      <label className={styles.ConfigField_Wrapper} htmlFor="lastLastNames">
        <span className={styles.ConfigField_Label}>Tus apellidos:</span>
        <input
          className={styles.ConfigField_TextInput}
          type="text"
          name="lastLastNames"
          onChange={handleChange}
          value={lastNames}
        />
      </label>
      <button
        type="submit"
        disabled={!changeAllowed}
        className={cn('button', styles.ConfigField_Button)}
      >
        { isSubmitting ? <Spinner /> : 'Cambiar' }
      </button>
      { error && <span>Hubo un error, intenta nuevamente más tarde</span>}
    </form>
  );
};

export default ChangeLastNames;
