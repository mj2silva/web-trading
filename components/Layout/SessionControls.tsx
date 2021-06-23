import { FC, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from '@styles/SessionControls.module.scss';
import Modal from '../Modal';
import LoginForm from './LoginForm';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: '',
};

const registerClassName = cn('button', styles.SessionControls_Register);
const loginClassName = cn('button', styles.SessionControls_Login);

const SessionControls: FC<Props> = ({ className }: Props) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = (): void => setIsLoginOpen(true);
  const closeLogin = (): void => setIsLoginOpen(false);
  return (
    <div className={cn(styles.SessionControls, className)}>
      <button onClick={openLogin} type="button" className={loginClassName}>Iniciar Sesión</button>
      <Link href="#preregistro"><a className={registerClassName}>Registrarse</a></Link>
      <Modal
        isOpen={isLoginOpen}
        onRequestClose={closeLogin}
        height="fit"
      >
        <LoginForm />
      </Modal>
    </div>
  );
};

SessionControls.defaultProps = defaultProps;

export default SessionControls;
