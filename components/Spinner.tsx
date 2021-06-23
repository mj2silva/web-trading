import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/Spinner.module.scss';

type Props = {
  size?: 'small' | 'medium' | 'large',
  color?: 'yellow' | 'red' | 'green',
}

const defaultProps: Partial<Props> = {
  size: 'medium',
  color: 'yellow',
};

const Spinner: FC<Props> = (props: Props) => {
  const { size, color } = props;
  const className = cn(styles.Spinner, {
    [styles.Spinner_yellow]: color === 'yellow',
    [styles.Spinner_red]: color === 'red',
    [styles.Spinner_green]: color === 'green',
  }, {
    [styles.Spinner_small]: size === 'small',
    [styles.Spinner_medium]: size === 'medium',
    [styles.Spinner_large]: size === 'large',
  });
  return <div className={className} />;
};

Spinner.defaultProps = defaultProps;

export default Spinner;
