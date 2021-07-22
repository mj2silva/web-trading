import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useState,
} from 'react';
import { changePassword } from 'lib/repository/usersRepository';
import Spinner from 'components/Spinner';
import { UserContext } from 'components/Layout/UserProvider';

const ChangePassword: FC = () => {
  const { user } = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  });
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="oldPassword">
        Contraseña anterior:
        <input
          type="password"
          name="oldPassword"
          onChange={handleChange}
          value={formValues.oldPassword}
        />
      </label>
      <label htmlFor="newPassword">
        Contraseña nueva:
        <input
          onBlur={handleBlur}
          type="password"
          name="newPassword"
          onChange={handleChange}
          value={formValues.newPassword}
        />
      </label>
      <label htmlFor="newPasswordConfirm">
        Confirmar contraseña:
        <input
          onBlur={handleBlur}
          type="password"
          name="newPasswordConfirm"
          onChange={handleChange}
          value={formValues.newPasswordConfirm}
        />
      </label>
      <button
        type="submit"
        disabled={!changeAllowed}
      >
        { isSubmitting ? <Spinner /> : 'Cambiar contraseña' }
      </button>
      { error && <span>{ error }</span>}
    </form>
  );
};

export default ChangePassword;
