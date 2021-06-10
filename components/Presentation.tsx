import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/Presentation.module.scss';

const Presentation: FC = () => {
  const className = cn('section', styles.Presentation);
  return (
    <section className={className} />
  );
};

export default Presentation;
