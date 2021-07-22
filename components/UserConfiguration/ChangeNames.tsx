import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useEffect, useState,
} from 'react';
import debounce from 'lodash.debounce';
import { changeNames } from 'lib/repository/usersRepository';
import Spinner from 'components/Spinner';
import { UserContext } from 'components/Layout/UserProvider';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="names">
        Tus nombres:
        <input
          type="text"
          name="names"
          onChange={handleChange}
          value={names}
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

export default ChangeNames;
