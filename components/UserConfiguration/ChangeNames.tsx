import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useEffect, useState,
} from 'react';
import debounce from 'lodash.debounce';
import { changeNames } from 'lib/repository/usersRepository';
import Spinner from 'components/Spinner';
import { UserContext } from 'components/Layout/UserProvider';
import styles from '@styles/ConfigField.module.scss';
import cn from 'classnames';

const ChangeNames: FC = () => {
  const { user } = useContext(UserContext);

  const [names, setNames] = useState(user?.names || '');
  const [changeAllowed, setChangeAllowed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (user && names) {
      try {
        await changeNames(user, names);
      } catch (err) {
        setError(err.message);
      }
    }
    setIsSubmitting(false);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const newNames = event.target.value;
    setNames(newNames);
  };

  useEffect(() => {
    const checkNamesDeb = debounce(() => {
      const regex = /^[A-zÀ-ú ]+$/;
      if (names) {
        const validNames = regex.test(names);
        setChangeAllowed(validNames);
      }
    });
    checkNamesDeb();
  }, [names]);

  return (
    <form className={styles.ConfigField} onSubmit={handleSubmit}>
      <label className={styles.ConfigField_Wrapper} htmlFor="names">
        <span className={styles.ConfigField_Label}>Tus nombres:</span>
        <input
          className={styles.ConfigField_TextInput}
          type="text"
          name="names"
          onChange={handleChange}
          value={names}
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

export default ChangeNames;
