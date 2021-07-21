import {
  ChangeEventHandler, FC, FormEventHandler, useContext, useState,
} from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import styles from '@styles/UserReview.module.scss';
import { Comment } from 'lib/types';
import { createComment } from 'lib/repository/modulesRepository';
import StarsRating from './StarsRating';
import { UserContext } from './Layout/UserProvider';
import Spinner from './Spinner';

const UserReview: FC = () => {
  const className = cn('section', styles.UserReview);
  const { user } = useContext(UserContext);
  const { moduleSlug, classSlug } = useRouter().query;
  const [formValues, setFormValues] = useState({
    rating: 1,
    comment: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (user && typeof classSlug === 'string' && typeof moduleSlug === 'string') {
      setIsLoading(true);
      const comment: Comment = {
        comment: formValues.comment,
        rate: formValues.rating,
        userId: user?.uid,
        moduleClassId: classSlug,
        moduleId: moduleSlug,
      };
      try {
        await createComment(user, comment);
        setIsLoading(false);
        setSuccess(true);
      } catch {
        setIsLoading(false);
        setSuccess(false);
      }
    }
  };
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleRateChange = (rate: number): void => {
    setFormValues({
      ...formValues,
      rating: rate,
    });
  };
  return (
    <section className={className}>
      {isLoading
        ? <Spinner />
        : (
          <>
            <h3 className={styles.UserReview_Title}>
              Cuéntanos tu experiencia, dudas o aportes sobre el curso:
            </h3>
            <StarsRating
              starsNumber={5}
              className={styles.UserReview_Rating}
              onRatingSelect={handleRateChange}
            />
            <form onSubmit={handleSubmit} className={styles.UserReview_Form}>
              <textarea onChange={handleChange} name="comment" rows={10} className={styles.UserReview_Textarea} placeholder="Comentarios" />
              <button type="submit" className={cn('button', styles.UserReview_Button)}>ENVIAR</button>
            </form>
            { success && (
            <div className={styles.UserReview_Success}>
              ¡Muchas gracias por tus comentarios!
            </div>
            )}
          </>
        )}
    </section>
  );
};

export default UserReview;
