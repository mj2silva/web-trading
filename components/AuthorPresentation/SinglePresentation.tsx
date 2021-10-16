import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from '@styles/AuthorPresentation.module.scss';

type Props = {
  author: {
    id: string | number,
    name: string,
    pictureUrl: string,
    message: string,
  },
  className?: string,
  id: number,
  activeAuthorId: number,
  totalSteps: number,
}

const defaultProps: Partial<Props> = {
  className: undefined,
};

const SinglePresentation: FC<Props> = (props: Props) => {
  const {
    author, className, id, activeAuthorId, totalSteps,
  } = props;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(id === activeAuthorId);
  }, [id, activeAuthorId, totalSteps]);

  const authorClassName = cn(styles.AuthorPresentation_Author, className, {
    [styles.AuthorPresentation_Author_active]: isActive,
  });

  return (
    <div className={authorClassName}>
      <div className={styles.AuthorPresentation_Image}>
        <img src={author.pictureUrl} alt={author.name} className="image" />
      </div>
      <div className={styles.AuthorPresentation_Greeting}>
        <h2 className={styles.AuthorPresentation_Presentation}>
          ¡Hey! soy
          {' '}
          { author.name }
        </h2>
        <h3 className={styles.AuthorPresentation_Submessage}>
          { author.message }
        </h3>
      </div>
    </div>
  );
};

SinglePresentation.defaultProps = defaultProps;

export default SinglePresentation;
