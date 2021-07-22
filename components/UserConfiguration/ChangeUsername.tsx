import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useEffect, useState,
} from 'react';
import debounce from 'lodash.debounce';
import { changeUsername, checkUsername } from 'lib/repository/usersRepository';
import Spinner from 'components/Spinner';
import { UserContext } from 'components/Layout/UserProvider';

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
      }
    });
    checkUsernameDeb();
  }, [username]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Nuevo nombre de usuario:
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={username}
        />
      </label>
      <button
        type="submit"
        disabled={!changeAllowed}
      >
        { isSubmitting ? <Spinner /> : 'Cambiar' }
      </button>
      { error && <span>Hubo un error, intenta nuevamente más tarde</span>}
    </form>
  );
};

export default ChangeUsername;
