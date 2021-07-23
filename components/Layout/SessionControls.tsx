import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from '@styles/SessionControls.module.scss';
import OpenLoginButton from './OpenLoginButton';

type Props = {
  className?: string,
}

const defaultProps: Partial<Props> = {
  className: '',
};

const registerClassName = cn('button', styles.SessionControls_Register);

const SessionControls: FC<Props> = ({ className }: Props) => (
  <div className={cn(styles.SessionControls, className)}>
    <OpenLoginButton>Iniciar Sesión</OpenLoginButton>
    <Link href="#preregistro"><a className={registerClassName}>Registrarse</a></Link>
  </div>
);

SessionControls.defaultProps = defaultProps;

export default SessionControls;
