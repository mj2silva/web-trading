import { FC } from 'react';
import cn from 'classnames';
import styles from '@styles/UserReview.module.scss';
import StarsRating from './StarsRating';

const UserReview: FC = () => {
  const className = cn('section', styles.UserReview);
  return (
    <section className={className}>
      <h3 className={styles.UserReview_Title}>
        Cuéntanos tu experiencia, dudas o aportes sobre el curso:
      </h3>
      <StarsRating starsNumber={6} className={styles.UserReview_Rating} />
      <form className={styles.UserReview_Form}>
        <textarea name="comment" rows={10} className={styles.UserReview_Textarea} placeholder="Comentarios" />
        <button type="button" className={cn('button', styles.UserReview_Button)}>ENVIAR</button>
      </form>
    </section>
  );
};

export default UserReview;
