import { FC } from 'react';
import cn from 'classnames';
import styles from '../../styles/SessionControls.module.scss';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: '',
};

const registerClassName = cn('button', styles.SessionControls_Register);
const loginClassName = cn('button', styles.SessionControls_Login);

const SessionControls: FC<Props> = ({ className }: Props) => (
  <div className={cn(styles.SessionControls, className)}>
    <button type="button" className={loginClassName}>Iniciar Sesión</button>
    <button type="button" className={registerClassName}>Registrarse</button>
  </div>
);

SessionControls.defaultProps = defaultProps;

export default SessionControls;
