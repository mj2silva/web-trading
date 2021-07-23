import Modal from 'components/Modal';
import { FC, ReactNode, useState } from 'react';
import styles from '@styles/SessionControls.module.scss';
import cn from 'classnames';
import LoginForm from './LoginForm';

type Props = {
  children: ReactNode,
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: '',
};

const OpenLoginButton: FC<Props> = (props: Props) => {
  const { children, className } = props;
  const loginClassName = cn('button', className || styles.SessionControls_Login);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = (): void => setIsLoginOpen(true);
  const closeLogin = (): void => setIsLoginOpen(false);
  return (
    <>
      <button onClick={openLogin} type="button" className={loginClassName}>{ children }</button>
      <Modal
        isOpen={isLoginOpen}
        onRequestClose={closeLogin}
        height="fit"
      >
        <LoginForm />
      </Modal>
    </>
  );
};

OpenLoginButton.defaultProps = defaultProps;

export default OpenLoginButton;
