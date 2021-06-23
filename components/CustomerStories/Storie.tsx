import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import styles from '@styles/Storie.module.scss';

type Props = {
  storie: {
    name: string,
    message: string,
    pictureUrl: string,
  },
  className?: string,
  id: number,
  mainStorieId: number,
  totalSteps: number,
}

const defaultProps: Partial<Props> = {
  className: undefined,
};

const Storie: FC<Props> = (props: Props) => {
  const {
    storie, className, id, mainStorieId, totalSteps,
  } = props;
  const [isMain, setIsMain] = useState(false);
  const [isSecondary, setIsSecondary] = useState(false);

  useEffect(() => {
    if (id === mainStorieId) {
      setIsMain(true);
      setIsSecondary(false);
    } else if (id === mainStorieId - 1) {
      setIsMain(false);
      setIsSecondary(true);
    } else if (mainStorieId === 0 && id === totalSteps - 1) {
      setIsSecondary(true);
      setIsMain(false);
    } else {
      setIsSecondary(false);
      setIsMain(false);
    }
  }, [id, mainStorieId, totalSteps]);

  const storieClassName = cn(styles.Storie, className, {
    [styles.Storie_Main]: isMain,
    [styles.Storie_Secondary]: isSecondary,
    [styles.Storie_Inactive]: !isSecondary && !isMain,
  });

  return (
    <div className={storieClassName}>
      <div className={styles.Storie_AuthorPhoto}>
        <img className="image" src={storie.pictureUrl} alt={storie.name} />
      </div>
      <div className={styles.Storie_AuthorData}>
        <h3 className={styles.Storie_AuthorName}>
          { storie.name }
        </h3>
        <p className={styles.Storie_Message}>
          { storie.message }
        </p>
      </div>
    </div>
  );
};

Storie.defaultProps = defaultProps;

export default Storie;
