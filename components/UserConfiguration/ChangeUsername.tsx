import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useEffect, useState,
} from 'react';
import debounce from 'lodash.debounce';
import { changeUsername, checkUsername } from 'lib/repository/usersRepository';
import Spinner from 'components/Spinner';
import { UserContext } from 'components/Layout/UserProvider';
import styles from '@styles/ConfigField.module.scss';
import cn from 'classnames';

const ChangeUsername: FC = () => {
  const { user } = useContext(UserContext);

  const [username, setUsername] = useState(user?.username);
  const [changeAllowed, setChangeAllowed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    if (user && username) {
      try {
        await changeUsername(user, username);
      } catch (err) {
        setError(err.message);
      }
    }
    setIsSubmitting(false);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  useEffect(() => {
    const checkUsernameDeb = debounce(async () => {
      if (username) {
        const validUsername = await checkUsername(username);
        setChangeAllowed(validUsername);
        if (!validUsername && username !== user?.username) setError('El nombre de usuario ya existe');
        else setError('');
      }
    });
    checkUsernameDeb();
  }, [username, user?.username]);

  return (
    <form className={styles.ConfigField} onSubmit={handleSubmit}>
      <label className={styles.ConfigField_Wrapper} htmlFor="username">
        <span className={styles.ConfigField_Label}>Nuevo nombre de usuario:</span>
        <input
          className={styles.ConfigField_TextInput}
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
        />
      </label>
      <button
        type="submit"
        disabled={!changeAllowed}
        className={cn('button', styles.ConfigField_Button)}
      >
        { isSubmitting ? <Spinner /> : 'Cambiar' }
      </button>
      { error && (
      <span
        className={styles.ConfigField_Error}
      >
        { error }
      </span>
      )}
    </form>
  );
};

export default ChangeUsername;
